import routes from "../routes";

export const home = (req, res) => {
    console.log("It's home123.")
    res.render("home");
};

export const user = (req, res) => {
    res.render("user");
};

export const login = (req, res) => {
    res.render("login");
};

export const logout = (req, res) => {
    res.render("logout");
};

export const password = (req, res) => {
    res.render("password");
};

export const userdetail = (req, res) => {
    res.render("userdetail");
}

export const editprofile = (req, res) => {
    res.render("editprofile");
}

export const changepassword = (req, res) => {
    res.render("changepassword");
}