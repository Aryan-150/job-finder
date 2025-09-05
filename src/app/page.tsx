import HomePage from "@/components/home";

export default async function Home() {

  await new Promise(r => setTimeout(r,2000));
  return (
    <HomePage />
  )
}