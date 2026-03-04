import PageStub from "../components/PageStub";
import { IconBook } from "../components/Icons";

export default function CatalogPage() {
  return (
    <PageStub
      title="Catalog"
      description="A collection of security and privacy controls. Upload an OSCAL Catalog JSON to browse controls, groups, and parameters."
      accentColor="#002868"
      icon={<IconBook size={24} />}
    />
  );
}
