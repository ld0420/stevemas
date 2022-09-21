export const submitData = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  try {
    const body = { author, message };
    await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
  } catch (error) {
    console.error(error);
  }
};
