import PageStub from "../components/PageStub";
import { IconLayers } from "../components/Icons";

export default function ProfilePage() {
  return (
    <PageStub
      title="Profile"
      description="A selection and tailoring of controls from one or more catalogs. Upload an OSCAL Profile JSON to view imported controls and modifications."
      accentColor="#02317F"
      icon={<IconLayers size={24} />}
    />
  );
}
