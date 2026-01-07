import { Link } from "react-router-dom";
import { GenericPageSection } from "./generic_text";

export function NotFound() {
  return (
    <div className="pt-16">
      <GenericPageSection label="404" title="404 - Page Not Found" subtitle="The page you are looking for does not exist.">
        <p>
          Please check the URL for mistakes or return to the <Link to="/">homepage</Link>.
        </p>
      </GenericPageSection>
    </div>
  );
}
