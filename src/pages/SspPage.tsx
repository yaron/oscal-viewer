import PageStub from "../components/PageStub";
import { IconShield } from "../components/Icons";

export default function SspPage() {
  return (
    <PageStub
      title="SSP"
      description="System Security Plan — documents the security controls implemented for a system and their implementation status. Upload an OSCAL SSP JSON to explore."
      accentColor="#216570"
      icon={<IconShield size={24} />}
    />
  );
}
