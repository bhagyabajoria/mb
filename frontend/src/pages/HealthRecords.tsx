import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CustomDiseaseSearch from "@/components/CustomDiseaseSearch";
import { CustomDisease } from "@/services/customDiseaseAPI";
import Logo from "@/components/Logo";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  Plus,
  FileText,
  Calendar,
  User,
  Building,
  Shield,
  Search,
  Filter,
  MoreHorizontal,
  ArrowLeft,
  Edit,
  Trash2,
  Download,
} from "lucide-react";
import { toast } from "sonner";

interface HealthRecord {
  id: number;
  title: string;
  record_type: string;
  description: string;
  icd11_code?: string;
  icd11_title?: string;
  diagnosis?: string;
  symptoms?: string[];
  namaste_name?: string;
  doctor_name?: string;
  hospital_name?: string;
  visit_date?: string;
  severity: string;
  verification_status: string;
  created_at: string;
  updated_at: string;
}

interface NewRecordForm {
  recordType: string;
  title: string;
  description: string;
  icd11Code: string;
  icd11Title: string;
  diagnosis: string;
  symptoms: string;
  doctorName: string;
  hospitalName: string;
  visitDate: string;
  severity: string;
  namasteName: string;
}

const HealthRecords = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingRecordId, setEditingRecordId] = useState<number | null>(null);
  const [formData, setFormData] = useState<NewRecordForm>({
    recordType: "",
    title: "",
    description: "",
    icd11Code: "",
    icd11Title: "",
    diagnosis: "",
    namasteName: "",
    symptoms: "",
    doctorName: "",
    hospitalName: "",
    visitDate: "",
    severity: "mild",
  });

  useEffect(() => {
    fetchHealthRecords();
  }, []);

  const fetchHealthRecords = async () => {
    try {
      // First try to load from localStorage
      const storedRecords = localStorage.getItem("health_records");
      if (storedRecords) {
        try {
          const parsedRecords = JSON.parse(storedRecords);
          setRecords(parsedRecords);
          setLoading(false);
          return;
        } catch (error) {
          console.error("Error parsing stored health records:", error);
        }
      }

      // If no stored records, try API (for future backend integration)
      const token = localStorage.getItem("auth_token");
      const response = await fetch("/api/health-records", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setRecords(data.data);
        // Save to localStorage for offline access
        localStorage.setItem("health_records", JSON.stringify(data.data));
      } else {
        // If API fails, just set empty array
        console.log("API not available, using local storage only");
        setRecords([]);
      }
    } catch (error) {
      console.error("Failed to fetch health records:", error);
      // Fallback to empty array if everything fails
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSampleRecord = async () => {
    // Create a sample record with predefined data
    const sampleRecord = {
      id: Date.now(),
      title: "John Doe",
      record_type: "consultation",
      description: "This is a sample health record for demonstration purposes.",
      icd11_code: "8A00",
      icd11_title: "Primary headache disorders",
      diagnosis: "Tension-type headache",
      symptoms: ["headache", "stress"],
      namaste_name: "स्वास्थ्य रिकॉर्ड (Health Record)",
      doctor_name: "Dr. Sample Physician",
      hospital_name: "Sample Medical Center",
      visit_date: new Date().toISOString().split("T")[0],
      severity: "mild",
      verification_status: "pending",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const updatedRecords = [...records, sampleRecord];
    setRecords(updatedRecords);

    // Save to localStorage so Dashboard can access it
    localStorage.setItem("health_records", JSON.stringify(updatedRecords));

    toast.success("Sample health record added successfully");
  };

  const handleCreateRecord = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingRecordId) {
        // Update existing record
        const updatedRecord = {
          id: editingRecordId,
          title: formData.title,
          record_type: formData.recordType,
          description: formData.description,
          icd11_code: formData.icd11Code,
          icd11_title: formData.icd11Title,
          diagnosis: formData.diagnosis,
          symptoms: formData.symptoms
            ? formData.symptoms.split(",").map((s) => s.trim())
            : [],
          namaste_name: formData.namasteName,
          doctor_name: formData.doctorName,
          hospital_name: formData.hospitalName,
          visit_date: formData.visitDate,
          severity: formData.severity,
          verification_status:
            records.find((r) => r.id === editingRecordId)
              ?.verification_status || "pending",
          created_at:
            records.find((r) => r.id === editingRecordId)?.created_at ||
            new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const updatedRecords = records.map((record) =>
          record.id === editingRecordId ? updatedRecord : record
        );
        setRecords(updatedRecords);
        localStorage.setItem("health_records", JSON.stringify(updatedRecords));
        toast.success("Health record updated successfully");
      } else {
        // Create new record
        const newRecord = {
          id: Date.now(),
          title: formData.title,
          record_type: formData.recordType,
          description: formData.description,
          icd11_code: formData.icd11Code,
          icd11_title: formData.icd11Title,
          diagnosis: formData.diagnosis,
          symptoms: formData.symptoms
            ? formData.symptoms.split(",").map((s) => s.trim())
            : [],
          namaste_name: formData.namasteName,
          doctor_name: formData.doctorName,
          hospital_name: formData.hospitalName,
          visit_date: formData.visitDate,
          severity: formData.severity,
          verification_status: "pending",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const updatedRecords = [...records, newRecord];
        setRecords(updatedRecords);
        localStorage.setItem("health_records", JSON.stringify(updatedRecords));
        toast.success("Health record created successfully");
      }

      // Reset form and close dialog
      setIsDialogOpen(false);
      setEditingRecordId(null);
      setFormData({
        recordType: "",
        title: "",
        description: "",
        icd11Code: "",
        icd11Title: "",
        diagnosis: "",
        symptoms: "",
        namasteName: "",
        doctorName: "",
        hospitalName: "",
        visitDate: "",
        severity: "mild",
      });
    } catch (error) {
      console.error("Failed to save health record:", error);
      toast.error("Failed to create health record");
    }
  };

  const handleVerifyRecord = async (recordId: number) => {
    try {
      // Update record verification status locally (since API might not exist)
      const updatedRecords = records.map((record) =>
        record.id === recordId
          ? {
              ...record,
              verification_status: "verified",
              updated_at: new Date().toISOString(),
            }
          : record
      );

      setRecords(updatedRecords);

      // Save to localStorage
      localStorage.setItem("health_records", JSON.stringify(updatedRecords));

      toast.success(t("verification.success"));

      // Try API call in background (optional)
      try {
        const token = localStorage.getItem("auth_token");
        const response = await fetch(`/api/verification/verify/${recordId}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ verificationType: "full" }),
        });

        if (response.ok) {
          console.log("Record also verified on server");
        }
      } catch (apiError) {
        console.log("API not available, verified locally only");
      }
    } catch (error) {
      console.error("Verification failed:", error);
      toast.error(t("verification.error"));
    }
  };

  const handleDeleteRecord = async (recordId: number) => {
    try {
      // Remove record from local state
      const updatedRecords = records.filter((record) => record.id !== recordId);
      setRecords(updatedRecords);

      // Update localStorage
      localStorage.setItem("health_records", JSON.stringify(updatedRecords));

      toast.success("Health record deleted successfully");

      // Try API call in background (optional)
      try {
        const token = localStorage.getItem("auth_token");
        const response = await fetch(`/api/health-records/${recordId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          console.log("Record also deleted on server");
        }
      } catch (apiError) {
        console.log("API not available, deleted locally only");
      }
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete record");
    }
  };

  const handleEditRecord = (record: HealthRecord) => {
    // Set form data with the selected record's data
    setFormData({
      recordType: record.record_type,
      title: record.title,
      description: record.description,
      icd11Code: record.icd11_code || "",
      icd11Title: record.icd11_title || "",
      diagnosis: record.diagnosis || "",
      symptoms: record.symptoms ? record.symptoms.join(", ") : "",
      namasteName: record.namaste_name || "",
      doctorName: record.doctor_name || "",
      hospitalName: record.hospital_name || "",
      visitDate: record.visit_date || "",
      severity: record.severity,
    });

    // Store the record ID for editing
    setEditingRecordId(record.id);

    // Open the dialog
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setEditingRecordId(null);
    setFormData({
      recordType: "",
      title: "",
      description: "",
      icd11Code: "",
      icd11Title: "",
      diagnosis: "",
      symptoms: "",
      namasteName: "",
      doctorName: "",
      hospitalName: "",
      visitDate: "",
      severity: "mild",
    });
  };

  const handleExportToExcel = () => {
    try {
      if (filteredRecords.length === 0) {
        toast.error("No records to export");
        return;
      }

      // Prepare data for Excel export (use filtered records for current view)
      const exportData = filteredRecords.map((record) => ({
        "Patient Name": record.title,
        "Record Type": getRecordTypeTranslation(record.record_type),
        Description: record.description,
        "ICD-11 Code": record.icd11_code || "",
        "ICD-11 Title": record.icd11_title || "",
        Diagnosis: record.diagnosis || "",
        Symptoms: record.symptoms ? record.symptoms.join(", ") : "",
        "Hindi Name": record.namaste_name || "",
        "Doctor Name": record.doctor_name || "",
        "Hospital Name": record.hospital_name || "",
        "Visit Date": record.visit_date || "",
        Severity: record.severity.toUpperCase(),
        "Verification Status": record.verification_status.toUpperCase(),
        "Created Date": new Date(record.created_at).toLocaleDateString(),
        "Last Updated": new Date(record.updated_at).toLocaleDateString(),
      }));

      // Create workbook and worksheet
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(exportData);

      // Set column widths for better readability
      const columnWidths = [
        { wch: 20 }, // Patient Name
        { wch: 15 }, // Record Type
        { wch: 30 }, // Description
        { wch: 12 }, // ICD-11 Code
        { wch: 25 }, // ICD-11 Title
        { wch: 25 }, // Diagnosis
        { wch: 30 }, // Symptoms
        { wch: 20 }, // Hindi Name
        { wch: 20 }, // Doctor Name
        { wch: 25 }, // Hospital Name
        { wch: 12 }, // Visit Date
        { wch: 10 }, // Severity
        { wch: 15 }, // Verification Status
        { wch: 12 }, // Created Date
        { wch: 12 }, // Last Updated
      ];
      worksheet["!cols"] = columnWidths;

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, "Health Records");

      // Generate filename with current date and filter info
      const currentDate = new Date().toISOString().split("T")[0];
      const filterInfo = filterType !== "all" ? `_${filterType}` : "";
      const searchInfo = searchTerm ? `_filtered` : "";
      const filename = `MediBridge_Health_Records${filterInfo}${searchInfo}_${currentDate}.xlsx`;

      // Write and download the file
      XLSX.writeFile(workbook, filename);

      toast.success(
        `Successfully exported ${filteredRecords.length} records to ${filename}`
      );
    } catch (error) {
      console.error("Export error:", error);
      toast.error("Failed to export records. Please try again.");
    }
  };

  // Removed duplicate handleCreateRecord. Add local record creation logic to main handleCreateRecord.

  // To support local table update, add this inside the main handleCreateRecord after successful API response:
  // setRecords([
  //   ...records,
  //   {
  //     id: Date.now(),
  //     title: formData.title,
  //     record_type: formData.recordType,
  //     description: formData.description,
  //     icd11_code: formData.icd11Code,
  //     icd11_title: formData.icd11Title,
  //     diagnosis: formData.diagnosis,
  //     symptoms: formData.symptoms ? formData.symptoms.split(",").map((s) => s.trim()) : [],
  //     doctor_name: formData.doctorName,
  //     hospital_name: formData.hospitalName,
  //     visit_date: formData.visitDate,
  //     severity: formData.severity,
  //     verification_status: "pending",
  //     created_at: new Date().toISOString(),
  //     updated_at: new Date().toISOString(),
  //   },
  // ]);

  // Removed unreachable/stray code after local setRecords/setFormData logic

  const filteredRecords = records.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.record_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (record.namaste_name &&
        record.namaste_name.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesFilter =
      filterType === "all" || record.record_type === filterType;

    return matchesSearch && matchesFilter;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "mild":
        return "bg-green-100 text-green-800";
      case "moderate":
        return "bg-yellow-100 text-yellow-800";
      case "severe":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const recordTypes = [
    "consultation",
    "lab_result",
    "prescription",
    "imaging",
    "surgery",
    "vaccination",
    "emergency",
    "follow_up",
    "other",
  ];

  const getRecordTypeTranslation = (type: string) => {
    const typeMap: { [key: string]: string } = {
      consultation: t("records.types.consultation"),
      lab_result: t("records.types.labResult"),
      prescription: t("records.types.prescription"),
      imaging: t("records.types.imaging"),
      surgery: t("records.types.surgery"),
      vaccination: t("records.types.vaccination"),
      emergency: t("records.types.emergency"),
      follow_up: t("records.types.followUp"),
      other: t("records.types.other"),
    };
    return typeMap[type] || type;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
      {/* Header */}
      <div className="space-y-3 md:space-y-4 mb-6 sm:mb-8">
        {/* Back Button - Separate row only for mobile and small tablet portrait */}
        <div className="flex items-center gap-3 xl:hidden">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>
        </div>

        {/* Main Header Content */}
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-4">
          <div className="flex flex-col xl:flex-row xl:items-center gap-3 xl:gap-4">
            {/* Back Button for Desktop */}
            <div className="hidden xl:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </Button>
              <Logo size="md" showText={true} to="/" />
            </div>

            {/* Logo and Title for Mobile/Tablet (both orientations) */}
            <div className="flex flex-col sm:flex-row sm:items-center md:flex-row md:items-center gap-3 xl:hidden">
              <Logo size="md" showText={true} to="/" />
              <div className="space-y-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                  {t("records.title")}
                </h1>
                <p className="text-sm sm:text-base text-gray-600">
                  {t("nav.healthRecords")}
                </p>
              </div>
            </div>

            {/* Title for Desktop */}
            <div className="hidden xl:block space-y-1">
              <h1 className="text-3xl font-bold text-gray-900">
                {t("records.title")}
              </h1>
              <p className="text-base text-gray-600">
                {t("nav.healthRecords")}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-row items-stretch sm:items-center md:items-center gap-2 sm:gap-3 md:gap-2 lg:gap-3">
            <LanguageSwitcher variant="compact" />
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm md:text-xs lg:text-sm"
              onClick={handleCreateSampleRecord}
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline md:hidden lg:inline">
                {t("records.addSample")}
              </span>
              <span className="sm:hidden md:inline lg:hidden">Sample</span>
            </Button>

            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm md:text-xs lg:text-sm"
              onClick={handleExportToExcel}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline md:hidden lg:inline">
                {t("records.exportExcel")}
              </span>
              <span className="sm:hidden md:inline lg:hidden">Export</span>
            </Button>

            <Button
              className="flex items-center gap-2 text-sm md:text-xs lg:text-sm"
              onClick={() => setIsDialogOpen(true)}
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline md:hidden lg:inline">
                {t("records.addNew")}
              </span>
              <span className="sm:hidden md:inline lg:hidden">Add</span>
            </Button>

            <Dialog open={isDialogOpen} onOpenChange={handleCloseDialog}>
              <DialogContent className="max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
                <DialogHeader>
                  <DialogTitle className="text-base sm:text-lg md:text-xl">
                    {editingRecordId
                      ? t("records.editRecord")
                      : t("records.createNewRecord")}
                  </DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm md:text-base">
                    {t("records.dialogDescription")}
                  </DialogDescription>
                </DialogHeader>

                <form
                  onSubmit={handleCreateRecord}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="recordType"
                        className="text-sm font-medium"
                      >
                        {t("records.recordType")}
                      </Label>
                      <Select
                        value={formData.recordType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, recordType: value })
                        }
                      >
                        <SelectTrigger className="h-10 sm:h-11">
                          <SelectValue
                            placeholder={t("records.selectRecordType")}
                          />
                        </SelectTrigger>
                        <SelectContent
                          side="bottom"
                          align="start"
                          className="max-h-60 overflow-y-auto"
                        >
                          {recordTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {getRecordTypeTranslation(type)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="severity" className="text-sm font-medium">
                        {t("records.severity")}
                      </Label>
                      <Select
                        value={formData.severity}
                        onValueChange={(value) =>
                          setFormData({ ...formData, severity: value })
                        }
                      >
                        <SelectTrigger className="h-10 sm:h-11">
                          <SelectValue
                            placeholder={t("records.selectSeverity")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mild">
                            {t("records.severityMild")}
                          </SelectItem>
                          <SelectItem value="moderate">
                            {t("records.severityModerate")}
                          </SelectItem>
                          <SelectItem value="severe">
                            {t("records.severitySevere")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="title" className="text-sm font-medium">
                      {t("records.patientName")}
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                      placeholder={t("records.patientNamePlaceholder")}
                      className="h-10 sm:h-11"
                      required
                    />
                  </div>

                  {/* Description field removed as requested */}

                  {/* Disease Section */}
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <CustomDiseaseSearch
                        onSelect={(disease: CustomDisease) => {
                          setFormData({
                            ...formData,
                            icd11Code: disease.icdCode,
                            icd11Title: disease.name,
                            diagnosis: disease.name,
                            namasteName: disease.namaste,
                            symptoms: disease.symptoms.join(", "),
                          });
                        }}
                        label={t("records.diseaseSearchLabel")}
                        placeholder={t("records.diseaseSearchPlaceholder")}
                        value={formData.icd11Title}
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="namasteName"
                        className="text-sm font-medium"
                      >
                        {t("records.namasteName")}
                      </Label>
                      <Input
                        id="namasteName"
                        value={formData.namasteName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            namasteName: e.target.value,
                          })
                        }
                        placeholder={t("records.namasteNamePlaceholder")}
                        className="h-10 sm:h-11"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="icd11Code"
                          className="text-sm font-medium"
                        >
                          {t("records.icd11Code")}
                        </Label>
                        <Input
                          id="icd11Code"
                          value={formData.icd11Code}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              icd11Code: e.target.value,
                            })
                          }
                          placeholder={t("records.icd11CodePlaceholder")}
                          className="h-10 sm:h-11"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="icd11Title"
                          className="text-sm font-medium"
                        >
                          {t("records.icd11Title")}
                        </Label>
                        <Input
                          id="icd11Title"
                          value={formData.icd11Title}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              icd11Title: e.target.value,
                            })
                          }
                          placeholder={t("records.icd11TitlePlaceholder")}
                          className="h-10 sm:h-11"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="diagnosis" className="text-sm font-medium">
                      {t("records.diagnosis")}
                    </Label>
                    <Textarea
                      id="diagnosis"
                      value={formData.diagnosis}
                      onChange={(e) =>
                        setFormData({ ...formData, diagnosis: e.target.value })
                      }
                      placeholder={t("records.diagnosisPlaceholder")}
                      rows={2}
                      className="min-h-[60px] sm:min-h-[80px] resize-none"
                    />
                  </div>

                  <div>
                    <Label htmlFor="symptoms" className="text-sm font-medium">
                      {t("records.symptoms")}
                    </Label>
                    <Input
                      id="symptoms"
                      value={formData.symptoms}
                      onChange={(e) =>
                        setFormData({ ...formData, symptoms: e.target.value })
                      }
                      placeholder={t("records.symptomsPlaceholder")}
                      className="h-10 sm:h-11"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="doctorName"
                        className="text-sm font-medium"
                      >
                        {t("records.doctorName")}
                      </Label>
                      <Input
                        id="doctorName"
                        value={formData.doctorName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            doctorName: e.target.value,
                          })
                        }
                        placeholder={t("records.doctorNamePlaceholder")}
                        className="h-10 sm:h-11"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="hospitalName"
                        className="text-sm font-medium"
                      >
                        {t("records.hospitalClinic")}
                      </Label>
                      <Input
                        id="hospitalName"
                        value={formData.hospitalName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            hospitalName: e.target.value,
                          })
                        }
                        placeholder={t("records.hospitalClinicPlaceholder")}
                        className="h-10 sm:h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="visitDate" className="text-sm font-medium">
                      {t("records.visitDate")}
                    </Label>
                    <Input
                      id="visitDate"
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) =>
                        setFormData({ ...formData, visitDate: e.target.value })
                      }
                      className="h-10 sm:h-11"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                      className="w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
                    >
                      {t("records.cancel")}
                    </Button>
                    <Button
                      type="submit"
                      className="w-full sm:w-auto text-sm sm:text-base h-10 sm:h-11"
                    >
                      {editingRecordId
                        ? t("records.updateRecord")
                        : t("records.createRecord")}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder={t("records.search")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-10 sm:h-11"
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-48 h-10 sm:h-11">
            <SelectValue placeholder={t("records.filterByType")} />
          </SelectTrigger>
          <SelectContent
            side="bottom"
            align="start"
            className="max-h-60 overflow-y-auto"
          >
            <SelectItem value="all">{t("records.allTypes")}</SelectItem>
            {recordTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {getRecordTypeTranslation(type)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Records Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredRecords.map((record) => (
          <Card key={record.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-2">
                <div className="min-w-0 flex-1">
                  <CardTitle className="text-base sm:text-lg truncate">
                    {record.title}
                  </CardTitle>
                  <CardDescription className="capitalize text-sm">
                    {getRecordTypeTranslation(record.record_type)}
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="shrink-0 h-8 w-8 p-0"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => handleEditRecord(record)}
                      className="flex items-center gap-2 text-blue-600 focus:text-blue-700"
                    >
                      <Edit className="h-4 w-4" />
                      Edit Record
                    </DropdownMenuItem>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <DropdownMenuItem
                          onSelect={(e) => e.preventDefault()}
                          className="flex items-center gap-2 text-red-600 focus:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                          Delete Record
                        </DropdownMenuItem>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Delete Health Record
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete "{record.title}"?
                            This action cannot be undone and will permanently
                            remove this health record from your account.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteRecord(record.id)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            Delete Record
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                  {record.description}
                </p>

                {record.icd11_code && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 shrink-0" />
                    <span className="font-medium truncate">
                      {record.icd11_code}
                    </span>
                    <span className="text-gray-600 truncate">
                      {record.icd11_title}
                    </span>
                  </div>
                )}

                {record.namaste_name && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="text-gray-400 shrink-0">🏥</span>
                    <span className="font-medium text-blue-600 truncate">
                      {record.namaste_name}
                    </span>
                  </div>
                )}

                {record.doctor_name && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <User className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 shrink-0" />
                    <span className="truncate">{record.doctor_name}</span>
                  </div>
                )}

                {record.hospital_name && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Building className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 shrink-0" />
                    <span className="truncate">{record.hospital_name}</span>
                  </div>
                )}

                {record.visit_date && (
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 shrink-0" />
                    <span className="truncate">
                      {new Date(record.visit_date).toLocaleDateString()}
                    </span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-1">
                  <div className="flex gap-1 sm:gap-2 flex-wrap">
                    <Badge
                      className={`text-xs ${getSeverityColor(record.severity)}`}
                    >
                      {record.severity}
                    </Badge>
                    <Badge
                      className={`text-xs ${getStatusColor(
                        record.verification_status
                      )}`}
                    >
                      {record.verification_status}
                    </Badge>
                  </div>

                  {record.verification_status !== "verified" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleVerifyRecord(record.id)}
                      className="flex items-center gap-1 text-xs sm:text-sm h-7 sm:h-8 shrink-0"
                    >
                      <Shield className="h-3 w-3" />
                      <span className="hidden sm:inline">
                        {t("verification.verify")}
                      </span>
                      <span className="sm:hidden">✓</span>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRecords.length === 0 && (
        <div className="text-center py-8 sm:py-12 px-4">
          <FileText className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">
            {searchTerm || filterType !== "all"
              ? t("records.noMatchingRecords")
              : t("records.noRecordsYet")}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 max-w-md mx-auto leading-relaxed">
            {searchTerm || filterType !== "all"
              ? t("records.adjustSearch")
              : t("records.startAdding")}
          </p>
          {!searchTerm && filterType === "all" && (
            <Button
              onClick={() => setIsDialogOpen(true)}
              className="text-sm sm:text-base h-10 sm:h-11 px-6"
            >
              <Plus className="h-4 w-4 mr-2" />
              {t("records.addFirstRecord")}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default HealthRecords;
