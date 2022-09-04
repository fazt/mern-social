import { Button } from "../components/ui/Button";

function HomePage() {
  return (
    <div className="bg-zinc-800 p-20">
      <h1 className="text-4xl font-bold mb-5">Welcome to MERN Social</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
        voluptates, perspiciatis dolor numquam odio tempora totam optio
        cupiditate quos veritatis architecto qui. Cupiditate, doloremque
        voluptatibus sint unde dignissimos corporis in!
      </p>
      <div className="flex gap-x-2">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </div>
  );
}

export default HomePage;
