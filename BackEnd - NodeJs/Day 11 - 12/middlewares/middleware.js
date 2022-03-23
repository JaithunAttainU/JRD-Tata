const authUser = (req, res, next) => {
  console.log("New Request", req.session)
  console.log("Session ID After Log Out", req.sessionID)
  if (req.session.userID && req.session.isLogged === true) {
    // req.session.userID = "sfdtgr"
    next()
  } else {
    res.redirect('/')
  }
}

module.exports = {
  authUser
}