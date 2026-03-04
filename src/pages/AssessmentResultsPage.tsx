import PageStub from "../components/PageStub";
import { IconCheckCircle } from "../components/Icons";

export default function AssessmentResultsPage() {
  return (
    <PageStub
      title="Assessment Results"
      description="Captures the results of a security control assessment including findings, observations, and risks. Upload an OSCAL Assessment Results JSON."
      accentColor="#FF6600"
      icon={<IconCheckCircle size={24} />}
    />
  );
}
