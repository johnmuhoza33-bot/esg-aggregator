import { redirect } from "next/navigation";
export default function Page() {
// temporarily send users to your real flow
redirect("/get-started");
}