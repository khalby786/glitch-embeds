console.log("hello world :o");

function addEmbed() {
  var username = document.getElementById("username").value;
  var colname = document.getElementById("collectionname").value;

  const collectionName = username + "/" + colname;
  const baseUrl =
    "https://api.glitch.com/v1/collections/by/fullUrl/projects?orderKey=createdAt&limit=50&orderDirection=ASC";

  fetch(`${baseUrl}&fullUrl=${collectionName}`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      const items = json.items;
      console.log(items);
      const friends = [];
      json.items.forEach(p => {
        friends.push({
          domain: p.domain,
          description: p.description,
          lastUpdate: p.updatedAt,
          avatar: `https://cdn.glitch.com/project-avatar/${p.id}.png`
        });
      });

      console.log(friends);

      var src = 0;
      var newFriend = friends[src].domain;

      function seturl() {
        /*document.getElementById("iframe-contain").innerHTML = `<iframe src="https://${newFriend}.glitch.me" id = "project"></iframe>`*/
        document.getElementsByClassName(
          "glitch-embed-wrap"
        )[0].innerHTML = `<iframe src="https://glitch.com/embed/#!/embed/${newFriend}?path=README.md&previewSize=0" title="khaleelsblog on Glitch" allow="geolocation; microphone; camera; midi; vr; encrypted-media" style="height: 100%; width: 100%; border: 0;">`;
      }

      function liveApp() {
        document.getElementsByClassName(
          "glitch-embed-wrap"
        )[0].innerHTML = `<iframe src="https://${newFriend}.glitch.me" id = "project"></iframe>`;
      }

      function glitchView() {
        seturl();
      }

      function updateAvatar() {
        var projectAvatar = document.getElementById("project-avatar");
        projectAvatar.src = friends[src].avatar;
      }

      function updateName() {
        var projectName = document.getElementById("project-name");
        projectName.innerHTML = friends[src].domain;
      }

      function updateDesc() {
        var projectName = document.getElementById("project-desc");
        projectName.innerHTML = friends[src].description;
      }

      function lastUpdate() {
        var updated = document.getElementById("last-update");
        updated.innerText = friends[src].lastUpdate;
      }

      updateAvatar();
      seturl();
      updateName();
      updateDesc();
      lastUpdate();

      var project = document.getElementById("project");
      var projectLength = friends.length;

      function next() {
        if (src === projectLength) {
          src = 0;
        } else {
          src = src + 1;
          newFriend = friends[src].domain;
          seturl();
          updateAvatar();
          updateName();
          updateDesc();
          lastUpdate();
          console.log("next!");
          console.log(newFriend);
        }
      }

      function previous() {
        if (src === 0) {
          src = projectLength;
        } else {
          src = src - 1;
          console.log("previous!");
          newFriend = friends[src].domain;
          updateAvatar();
          seturl();
          updateName();
          updateDesc();
          lastUpdate();
        }
      }

      function random() {
        src = Math.floor(Math.random() * projectLength);
        console.log("random");
        newFriend = friends[src].domain;
        updateAvatar();
        seturl();
        updateName();
        updateDesc();
        lastUpdate();
      }

      document.getElementById("next").addEventListener("click", next);
      document.getElementById("back").addEventListener("click", previous);
      document.getElementById("random").addEventListener("click", random);

      document
        .getElementById("glitch-view")
        .addEventListener("click", glitchView);
      document.getElementById("live-app").addEventListener("click", liveApp);
    });
}
