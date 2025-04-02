import { useForm } from "@tanstack/react-form";
import { Button } from "./button";
import { Input } from "./input";

// TypeScript-like interface for form data
interface IFormData {
  username: string;
  email: string;
  password: string;
}

const RegistrationForm = () => {
  const { Field, handleSubmit, reset } = useForm<IFormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Register
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Create your account
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit();
        }}>
          <Field name="username" children={(field) => (
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            </div>
          )}></Field>

          <Field name="email" children={(field) => (
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            </div>
          )}></Field>

          <Field name="password" children={(field) => (
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
              />
            </div>
          )}></Field>

          <div className="space-y-2 flex justify-between items-center">
            <Button variant={"outline"} onClick={() => reset()}>
              Reset
            </Button>

            <Button type="submit">
              Register
            </Button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;