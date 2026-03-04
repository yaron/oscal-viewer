import PageStub from "../components/PageStub";
import { IconClipboard } from "../components/Icons";

export default function AssessmentPlanPage() {
  return (
    <PageStub
      title="Assessment Plan"
      description="Describes the plan for assessing a system's security controls, including scope, schedule, and assessment methods. Upload an OSCAL Assessment Plan JSON."
      accentColor="#3A00A1"
      icon={<IconClipboard size={24} />}
    />
  );
}
