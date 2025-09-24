import React, { useState } from "react";
import ICD11Search, { ISelectedEntity } from "./ICD11Search";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ICD11Example: React.FC = () => {
  const [selectedDisease, setSelectedDisease] =
    useState<ISelectedEntity | null>(null);

  const handleDiseaseSelect = (entity: ISelectedEntity) => {
    console.log("Selected Disease:", entity);
    setSelectedDisease(entity);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>WHO ICD-11 Disease Search Example</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ICD11Search
            onSelect={handleDiseaseSelect}
            placeholder="Try searching for 'diabetes', 'hypertension', 'pneumonia'..."
            label="Search Medical Conditions"
          />

          {selectedDisease && (
            <Card className="border-green-200 bg-green-50">
              <CardContent className="pt-4">
                <h3 className="font-semibold text-lg mb-2">
                  Selected Disease Information:
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{selectedDisease.code}</Badge>
                    <span className="font-medium">{selectedDisease.title}</span>
                  </div>
                  {selectedDisease.selectedText && (
                    <p className="text-sm text-gray-600">
                      <strong>Search term:</strong>{" "}
                      {selectedDisease.selectedText}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    <strong>Foundation URI:</strong>{" "}
                    {selectedDisease.foundationUri}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Linearization URI:</strong>{" "}
                    {selectedDisease.linearizationUri}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ICD11Example;
