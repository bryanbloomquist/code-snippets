$(document).ready(function() {
  function ktCreateInstagramFeed(divContainer, instaUrl) {
    $.ajax({
      url: "https://www.instagram.com/" + instaUrl + "/?__a=1",
      type: "get",
      success: function(response) {
        console.log(response);

        // Assign data to variable start -----------

        let url = "https://www.instagram.com/" + instaUrl;
        let dataProfileImg = response.graphql.user.profile_pic_url;

        let dataProfileUserName = response.graphql.user.username;

        let dataPostCounts =
          response.graphql.user.edge_owner_to_timeline_media.count;

        let dataBiography = response.graphql.user.biography
          ? response.graphql.user.biography
          : "";

        let dataExternalLink = response.graphql.user.external_url
          ? response.graphql.user.external_url
          : "";

        let dataFollowersCounts = response.graphql.user.edge_followed_by.count;

        let dataFollowingCounts = response.graphql.user.edge_follow.count;

        let dataFullName = response.graphql.user.full_name;

        let instagramPost =
          response.graphql.user.edge_owner_to_timeline_media.edges;

        // Assign data to variable start -----------

        // Instagram image start -----------

        let instagramContainer = document.querySelector("." + divContainer);

        let profile = document.createElement("div");
        profile.setAttribute("class", "profile");

        let profileImgDiv = document.createElement("div");
        profileImgDiv.setAttribute("class", "profile-image");

        let profileImg = document.createElement("img");
        profileImg.setAttribute("src", dataProfileImg);
        profileImg.setAttribute("alt", dataFullName + " Logo");

        instagramContainer.appendChild(profile);
        profile.appendChild(profileImgDiv);
        profileImgDiv.appendChild(profileImg);

        // Instagram image end -----------

        // profile header name and btn start -----------

        let profileUserSettings = document.createElement("div");
        profileUserSettings.setAttribute("class", "profile-user-settings");

        let profileUserName = document.createElement("h1");
        profileUserName.setAttribute("class", "profile-user-name");

        profileUserName.innerText = dataProfileUserName;

        let followUsBtn = document.createElement("a");
        followUsBtn.setAttribute("class", "btn profile-edit-btn");
        followUsBtn.setAttribute("href", url);
        followUsBtn.setAttribute("target", "_blank");
        followUsBtn.innerText = "Follow Us";

        // append
        profile.appendChild(profileUserSettings);
        profileUserSettings.appendChild(profileUserName);
        profileUserSettings.appendChild(followUsBtn);

        // profile header name and btn End -----------

        // profile Stats start-----------
        let profileStatsDiv = document.createElement("div");
        profileStatsDiv.setAttribute("class", "profile-stats");

        let profileStatsUL = document.createElement("ul");

        let profileListPosts = document.createElement("li");
        profileListPosts.setAttribute("class", "profile-stat-count");

        profileListPosts.innerHTML =
          '<span class="profile-stat-count"> ' +
          dataPostCounts +
          "</span> posts";

        let profileListFollowers = document.createElement("li");
        profileListFollowers.setAttribute("class", "profile-stat-count");

        profileListFollowers.innerHTML =
          '<span class="profile-stat-count"> ' +
          dataFollowersCounts +
          "</span> followers";

        let profileListFollowing = document.createElement("li");
        profileListFollowing.setAttribute("class", "profile-stat-count");

        profileListFollowing.innerHTML =
          '<span class="profile-stat-count"> ' +
          dataFollowingCounts +
          "</span> following";

        profile.appendChild(profileStatsDiv);
        profileStatsDiv.appendChild(profileStatsUL);
        profileStatsUL.appendChild(profileListPosts);
        profileStatsUL.appendChild(profileListFollowers);
        profileStatsUL.appendChild(profileListFollowing);

        // profile Stats end-----------

        // profile Bio start-----------

        let profileBioDiv = document.createElement("div");
        profileBioDiv.setAttribute("class", "profile-bio");
        let profileBioP = document.createElement("p");
        profileBioP.innerHTML =
          '<span class="profile-real-name"> ' + dataFullName + "</span> ";

        let externalLink = document.createElement("a");
        externalLink.setAttribute("href", dataExternalLink);
        externalLink.setAttribute("target", "_blank");
        externalLink.innerText = dataExternalLink;

        profile.appendChild(profileBioDiv);
        profileBioDiv.appendChild(profileBioP);
        profileBioP.appendChild(externalLink);
        //   profile bio end  -----------

        // gallery images start ----------

        let galleryContainer = document.createElement("div");
        galleryContainer.setAttribute("class", "gallery");

        instagramContainer.appendChild(galleryContainer);

        for (let k = 0; k < instagramPost.length; k++) {
          let imgURL = instagramPost[k].node.display_url;
          let imgLikes = instagramPost[k].node.edge_liked_by.count;
          let imgPosts = instagramPost[k].node.edge_media_to_comment.count;
          let imgUrlLink =
            "https://www.instagram.com/p/" + instagramPost[k].node.shortcode;

          let galleryItem = document.createElement("a");
          galleryItem.setAttribute("href", imgUrlLink);
          galleryItem.setAttribute("target", "_blank");

          galleryItem.innerHTML =
            '<div class="gallery-item" tabindex="0"><img class="gallery-image" alt="' +
            dataProfileUserName +
            '" src="' +
            imgURL +
            '" />' +
            '<div class="gallery-item-info">' +
            "                  <ul>" +
            '                    <li class="gallery-item-likes">' +
            '                      <span class="visually-hidden">Likes:</span' +
            '                      ><i class="fas fa-heart" aria-hidden="true"></i> ' +
            imgLikes +
            "                    </li>" +
            '                    <li class="gallery-item-comments">' +
            '                      <span class="visually-hidden">Comments:</span' +
            '                      ><i class="fas fa-comment" aria-hidden="true"></i> ' +
            imgPosts +
            "                    </li>" +
            "                  </ul>" +
            "                </div></div>";

          galleryContainer.appendChild(galleryItem);
        }

        // gallery images end ----------
      }
    });
  }

  // 1) to use pass in the instagram name url
  // 2) Pass in div container name

  const instagramDiv = "instagram-container";
  const instagramUrl = "r.2.studio";

  ktCreateInstagramFeed(instagramDiv, instagramUrl);
});