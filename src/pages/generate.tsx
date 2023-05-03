import FormGroup from "@/components/FormGroup";
import Input from "@/components/Input";
import { api } from "@/utils/api";
import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const GeneratePage: NextPage = () => {
  const [form, setForm] = useState({
    prompt: "",
  });
  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess(data) {
      console.log("mutation finished", data);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateIcon.mutate({
      prompt: form.prompt,
    });
  };

  const updateForm = (key: string) => {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm({ ...form, [key]: e.target.value });
    };
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormGroup>
            <label htmlFor="prompt">Prompt</label>
            <Input value={form.prompt} onChange={updateForm("prompt")} />
          </FormGroup>
          <button className="rounded bg-blue-400 px-4 py-2 hover:bg-blue-500">
            Submit
          </button>
        </form>
      </main>
    </>
  );
};

export default GeneratePage;
