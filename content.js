// URL of the image to replace profile pictures with
const newProfilePictureUrl = chrome.runtime.getURL('images/new-profile-picture.png');

// Function to replace profile pictures
function replaceProfilePictures() {
  // Select all profile pictures in the feed
  const profilePictures = document.querySelectorAll('.feed-shared-actor__avatar-image, .entity-result__image, .update-components-actor__avatar-image, .profile-photo-edit__preview, .ivm-view-attr__img--centered');

  // Replace each profile picture with the new image
  profilePictures.forEach(pic => {
    pic.src = newProfilePictureUrl;
    pic.srcset = newProfilePictureUrl;
  });
}

// Observe DOM changes to handle dynamically loaded content
const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, { childList: true, subtree: true });

// Initial replacement
replaceProfilePictures();
