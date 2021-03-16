$(document).ready(function() {

  function ktCreateInstagramFeed(divContainer, instaUrl) {
    $.ajax({
      url: "https://www.instagram.com/" + instaUrl + "/?__a=1",
      type: "get",
      success: function(response) {
        console.log(response);
        const instagramUser = response.graphql.user;

        ////////// ASSIGN DATA TO VARIABLE BEGIN //////////

        const url = "https://www.instagram.com/"+instaUrl;
        const profileImage = instagramUser.profile_pic_url;
        const profileUser = instagramUser.username;
        const postCount = instagramUser.edge_owner_to_timeline_media.count;
        const profileBio = instagramUser.biography ? instagramUser.biography : "";
        const externalLink = instagramUser.external_url ? instagramUser.external_url : "";
        const followerCount = instagramUser.edge_followed_by.count;
        const followingCount = instagramUser.edge_follow.count;
        const profileFullName = instagramUser.full_name;
        const instagramPost = instagramUser.edge_owner_to_timeline_media.edges;

        ////////// ASSIGN DATA TO VARIABLE END //////////

        ////////// INSTAGRAM HEADER START //////////

        const instagramContainer = document.querySelector("." + divContainer);
        instagramContainer.innerHTML = (`
          <div class="profile">
            <div class="profile-image">
              <img src="${profileImage}" alt="${profileFullName} Logo"/>
            </div>
            <div class="profile-user-settings">
              <h1 class="profile-user-name">${profileUser}</h1>
              <a href="${url}" class="btn profile-edit-btn" target="_blank">Follow us on Instagram <i class="fab fa-instagram"></i></a>
            </div>
            <div class="profile-stats">
              <ul>
                <li class="profile-stat-count"><span class="profile-stat-count">${postCount}</span></li>
                <li class="profile-stat-count"><span class="profile-stat-count">${followerCount}</span></li>
                <li class="profile-stat-count"><span class="profile-stat-count">${followingCount}</span></li>
              </ul>
            </div>
            <div class="profile-bio">
              <p>
                <span class="profile-real-name">${profileFullName}</span>
                <a href="${externalLink}" target="_blank">${externalLink}</a>              
              </p>
            </div>
          </div>
        `);
        ////////// INSTAGRAM HEADER END //////////

        ////////// GALLERY IMAGES START //////////

        const galleryContainer = document.createElement("div");
        galleryContainer.setAttribute("class", "gallery");
        instagramContainer.appendChild(galleryContainer);

        // for (let k = 0; k < instagramPost.length; k++) {
        for (let k = 0; k < postsToShare; k++) {
          const imgURL = instagramPost[k].node.display_url;
          const imgLikes = instagramPost[k].node.edge_liked_by.count;
          const imgPosts = instagramPost[k].node.edge_media_to_comment.count;
          const imgAlt = instagramPost[k].node.accessibility_caption;
          const imgCaption = instagramPost[k].node.edge_media_to_caption.edges[0].node.text;
          const imgUrlLink ="https://www.instagram.com/p/" + instagramPost[k].node.shortcode;

          let galleryItem = document.createElement("a");
          galleryItem.setAttribute("href", imgUrlLink);
          galleryItem.setAttribute("target", "_blank");

          galleryItem.innerHTML = (`      
            <div class="gallery-item" tabindex="0">
              <img class="gallery-image" alt="${imgAlt}" src ="${imgURL}" />
              <div class="gallery-item-info">
                <ul>
                  <li class="gallery-item-likes"> <i class="fas fa-heart"></i> ${imgLikes} </li>
                  <li class="gallery-item-comments"> <i class="fas fa-comment"></i> ${imgPosts} </li>
                </ul>
                <p>${imgCaption}</p>
              </div>
            </div>
          `);
          galleryContainer.appendChild(galleryItem);
        }
        ////////// GALLERY IMAGES END //////////
      }
    });
  }

  // 1: to use pass in the instagram name url
  const instagramUrl = "allamericanarenaproducts";

  // 2: Pass in div container name
  const instagramDiv = "instagram-container";

  // 3. default postsToShare is 12, you can override it down here, or comment it out and use default.
  const postsToShare = 3;

  ktCreateInstagramFeed(instagramDiv, instagramUrl);

});