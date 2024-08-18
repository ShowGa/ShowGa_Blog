import Comment from "../models/commentModel.js";
import Post from "../models/postModel.js";

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

export const getPostComments = async (req, res) => {
  try {
    const { belongPostID } = req.params;
    const queryContent = req.query;

    const startIndex = parseInt(queryContent) || 0;
    const limit = parseInt(queryContent.limit) || 8;
    const sort = queryContent.sort || "createdAt";
    const order = queryContent.order || "desc";

    const foundComments = await Comment.find({ belongPostID })
      .sort({ [sort]: order })
      .skip(startIndex)
      .limit(limit)
      .populate({
        path: "belongUserID",
        select: "username avatar",
      });

    const totalComments = await Post.countDocuments({
      belongPostID,
    });

    // check is there any more post
    const isEnd = startIndex + limit >= totalComments;

    return res.status(200).json({ foundComments, isEnd });
  } catch (e) {
    console.log("Error in getPostComments controller !" + e);
    return res.status(500).json({ error: "Internal server error !" });
  }
};
