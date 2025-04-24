export const validateCreateassignments = (req, res, next) => {
    const { title, Content, Category, Email } = req.body;

    // ตรวจสอบว่า Title, Content, Category และ Email มีค่า
    if (!title || !Content || !Category || !Email) {
        return res.status(400).json({ error: "All fields (Title, Content, Category, Email) are required." });
    }

    // ตรวจสอบรูปแบบ Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }

    // ตรวจสอบค่า Category
    const validCategories = ["Math", "English", "Biology"];
    if (!validCategories.includes(Category)) {
        return res.status(400).json({ error: `Category must be one of the following: ${validCategories.join(", ")}.` });
    }

    // ตรวจสอบความยาวของ Content
    if (Content.length < 500 || Content.length > 1000) {
        return res.status(400).json({ error: "Content must be between 500 and 1000 characters long." });
    }

    next();
};