import connectMongoDB from "@/lib/mongodb";
import Email from "@/models/email";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (validateEmail(email) && name.trim() !== "" && message.trim() !== "") {
      const newMessage = {
        email,
        name,
        message,
      };

      try {
        await connectMongoDB();
        await Email.create(newMessage).then((data) =>
          res.status(201).json({ data })
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      res.status(422).json({ message: "Invalid input" });
    }
  } else {
    return res.status(400).json({ message: "Invalid request" });
  }
}
