import DisclaimerClient from "./DisclaimerClient";

export const metadata = {
  title: "Disclaimer",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
