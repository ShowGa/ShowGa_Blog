import Comment from "../models/commentModel.js";

export const createComment = async (req, res) => {
  try {
    const { content, belongUserID, belongPostID } = req.body;

    if (req.user.id !== belongUserID) {
      return res.status(400).json({ error: "Sneaky peeky !" });
    }

    const newComment = new Comment({
      content,
      belongUserID,
      belongPostID,
    });

    await newComment.save();

    return res.status(201).json({ message: "Create comment successfully !" });
  } catch (e) {
    console.log("Error in createComment controller !" + e);
    res
      .status(500)
      .json({ error: "Internal server error ! Please contact us ." });
  }
};
