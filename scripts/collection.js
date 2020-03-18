// script for websites

console.log("hi. let's see how it goes...");

function createEmbed(el, user, collection) {
  var newDiv = document.createElement("div");
  var targetEl = document.getElementById(el);
  targetEl.appendChild(newDiv);

  var newStyle = document.createElement("style");
  newStyle.innerHTML = `

    #next, #back, #random, #glitch-view, #live-app {

          display: inline-block;
    border-radius: 5px;
    font-family: "Arial", sans-serif;
    font-weight: 600;
    line-height: 1;
    position: relative;
    white-space: nowrap;
    padding: 0.375em 0.5em 0.1875em;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: black;
    background-color: white;
    border: 2px solid black;

    }

  `;
  document.head.appendChild(newStyle);

  newDiv.innerHTML = `

    <img
        src=""
        id="project-avatar"
        style="border-radius: 50%; height: 50px;"
      />
      <h2 id="project-name"></h2>
      <p id="project-desc"></p>

      <br /><br />

      <button id = "glitch-view">
        Glitch View
      </button>
      <button id = "live-app">
        Live App
      </button>

      <br /><br /><br />

      <div class="glitch-embed-wrap" style="height: 420px; width: 100%;"></div>

      <br /><br /><br /><br />

      <p style="float: right;">
        Last updated at <i><span id="last-update"></span></i>
      </p>

      <br /><br /><br />

      <center>
        <div class="horizontal">
          <button class="bracket-button" id="back">Previous</button>
          <button class="bracket-button" id="random">Random</button>
          <button class="bracket-button" id="next">Next</button>
        </div>
      </center>
  `;

  const collectionName = user + "/" + collection;
  const baseUrl =
    "https://api.glitch.com/v1/collections/by/fullUrl/projects?orderKey=createdAt&limit=50&orderDirection=ASC";

  fetch(`${baseUrl}&fullUrl=${collectionName}`)
    .then(res => res.json())
    .then(json => {
      const items = json.items;
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

      var src = 1;
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
        src = src + 1;
        if (src === projectLength) {
          src = 0;
        }
        newFriend = friends[src].domain;
        seturl();
        updateAvatar();
        updateName();
        updateDesc();
        lastUpdate();
        console.log("next!");
        console.log(newFriend);
      }

      function previous() {
        src = src - 1;
        if (src === 0) {
          src = projectLength;
        }
        console.log("previous!");
        newFriend = friends[src].domain;
        updateAvatar();
        seturl();
        updateName();
        updateDesc();
        lastUpdate();
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
