const SocialMediaLinks = {
  github: "thiagohcarvalho",
  linkedin: "thiagohcarvalho10",
  instagram: "thiagohcarvalho10",
  twitter: "sxlid",
  facebook: "thiagocarvalho41"
}

function changeSocialMediaLinks() {
  for(let li of socialLinks.children) {
    const social = li.getAttribute("class")
    if (social === "linkedin") {
      li.children[0].href = `https://www.${social}.com/in/${SocialMediaLinks[social]}/`
    } else {
      li.children[0].href = `https://www.${social}.com/${SocialMediaLinks[social]}/`
    }
  }
}

changeSocialMediaLinks()

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${SocialMediaLinks.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    username.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userPic.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGithubProfileInfo()