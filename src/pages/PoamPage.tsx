import PageStub from "../components/PageStub";
import { IconAlertTriangle } from "../components/Icons";

export default function PoamPage() {
  return (
    <PageStub
      title="POA&M"
      description="Plan of Action and Milestones — tracks the remediation of security findings and weaknesses. Upload an OSCAL POA&M JSON to review open items."
      accentColor="#D32F2F"
      icon={<IconAlertTriangle size={24} />}
    />
  );
}
