import { Bug } from "lucide-react";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex-column-center gap-8 height-100">
      <Bug size={32} />
      <h1>Whoops! Something went wrong</h1>
      <Link className="errorLink" to="/">
        Return Home
      </Link>
    </div>
  );
}
