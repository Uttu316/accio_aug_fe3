function getUserData(username, onSuccess, onFailure) {
  //simulating time for data query or network request
  setTimeout(() => {
    if (username === "ABC") {
      const data = {
        name: "ABC_XYZ",
        userid: "232324232",
      };
      onSuccess(data);
    } else {
      onFailure("Oops No user");
    }
  }, 3000);
}
function getPost(userId, onSuccess, onFailure) {
  setTimeout(() => {
    if (userId) {
      onSuccess({
        postId: "3239322",
        caption: "Going to Morocco",
      });
    } else {
      onFailure("Oops no Post");
    }
  }, 3000);
}
function getComment(postId, onSuccess, onFailure) {
  setTimeout(() => {
    if (postId) {
      onSuccess({
        commentId: "4242424943",
        comment: "Wow!",
      });
    } else {
      onFailure("Oops no comment");
    }
  }, 3000);
}

console.time("code");
getUserData(
  "ABC",
  (data) => {
    console.log("user", data);
    getPost(
      data.userid,
      (post) => {
        console.log("Post", post);
        getComment(
          post.postId,
          (comment) => {
            console.log("comment", comment);
            console.timeEnd("code");
          },
          (error) => {
            console.log(error);
          },
        );
      },
      (error) => {
        console.log(error);
      },
    );
  },
  (error) => {
    console.log(error);
  },
);
