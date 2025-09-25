import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { FolderOpen, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AuthCallback = () => {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");
        const state = urlParams.get("state");
        const error = urlParams.get("error");

        // Check for OAuth errors
        if (error) {
          setStatus("error");
          setMessage(t("authCallback.errorPrefix") + `: ${error}`);
          return;
        }

        // Validate state parameter
        const storedState = sessionStorage.getItem("oauth_state");
        if (
          !state ||
          !storedState ||
          !state.startsWith(storedState.split("_")[0])
        ) {
          setStatus("error");
          setMessage(t("authCallback.invalidState"));
          return;
        }

        // Clear stored state
        sessionStorage.removeItem("oauth_state");

        if (code) {
          // Here you would typically send the code to your backend
          // For now, we'll simulate a successful authentication
          setStatus("loading");
          setMessage(t("authCallback.exchangingCode"));

          // Simulate API call delay
          setTimeout(() => {
            // Determine if this was a signup or login based on state
            const isSignup = state.includes("_signup");

            // Store dummy user data for now (replace with actual user data from backend)
            const userData = {
              email: "user@example.com", // This would come from the backend
              name: "John Doe",
              loginTime: new Date().toISOString(),
            };
            localStorage.setItem("user_data", JSON.stringify(userData));
            localStorage.setItem("auth_token", "dummy_token_" + Date.now());

            setStatus("success");
            setMessage(
              isSignup
                ? t("authCallback.accountCreated")
                : t("authCallback.loginSuccess")
            );

            // Redirect to dashboard after a short delay
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          }, 1500);

          // TODO: Replace this simulation with actual backend integration:
          /*
          const response = await fetch('/api/auth/google', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              code, 
              isSignup: state.includes('_signup') 
            }),
          });

          if (response.ok) {
            const data = await response.json();
            // Store user token/session
            localStorage.setItem('auth_token', data.token);
            setStatus('success');
            setMessage('Authentication successful!');
            setTimeout(() => navigate('/dashboard'), 2000);
          } else {
            throw new Error('Authentication failed');
          }
          */
        } else {
          setStatus("error");
          setMessage(t("authCallback.noCode"));
        }
      } catch (err) {
        setStatus("error");
        setMessage(t("authCallback.generalError"));
        console.error("Auth callback error:", err);
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 via-background to-secondary/20 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-sm sm:max-w-md space-y-6 sm:space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="flex justify-center items-center space-x-4">
            <Logo size="lg" showText={true} to="/" />
            <LanguageSwitcher variant="compact" />
          </div>
        </div>

        {/* Status Card */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
          <CardHeader className="text-center px-4 sm:px-6">
            <CardTitle className="flex items-center justify-center space-x-2 text-base sm:text-lg">
              {status === "loading" && (
                <>
                  <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin text-govt-blue" />
                  <span>{t("authCallback.authenticating")}</span>
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-govt-green" />
                  <span className="text-govt-green">
                    {t("authCallback.success")}
                  </span>
                </>
              )}
              {status === "error" && (
                <>
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-destructive" />
                  <span className="text-destructive">
                    {t("authCallback.error")}
                  </span>
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-3 sm:space-y-4 px-4 sm:px-6 pb-6">
            <p className="text-sm sm:text-base text-muted-foreground">
              {message}
            </p>

            {status === "success" && (
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t("authCallback.redirecting")}
              </p>
            )}

            {status === "error" && (
              <div className="space-y-3 sm:space-y-4">
                <Link
                  to="/login"
                  className="inline-block bg-govt-blue text-white px-4 sm:px-6 py-2 sm:py-2 rounded text-sm sm:text-base hover:bg-govt-blue/90 transition-colors"
                >
                  {t("authCallback.tryAgain")}
                </Link>
                <br />
                <Link
                  to="/"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-govt-blue transition-colors"
                >
                  {t("authCallback.backToHome")}
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthCallback;
