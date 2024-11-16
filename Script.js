// Array to store groups
let groups = [];

// Handle Create Group Button Click
document.getElementById("create-group-btn").addEventListener("click", () => {
  const groupName = prompt("Enter a group name:");
  if (groupName) {
    groups.push(groupName); // Add group to the array
    displayGroups(); // Refresh the group list
  }
});

// Display Groups on the Dashboard
function displayGroups() {
  const groupList = document.getElementById("group-list");
  groupList.innerHTML = ""; // Clear previous list
  groups.forEach((groupName) => {
    const groupButton = document.createElement("div");
    groupButton.classList.add("group-btn");
    groupButton.textContent = groupName;
    groupButton.addEventListener("click", () => enterGroupSpace(groupName));
    groupList.appendChild(groupButton);
  });
}

// Enter Group Space
function enterGroupSpace(groupName) {
  document.getElementById("home").style.display = "none";
  document.getElementById("group-space").style.display = "block";
  document.getElementById("group-name").textContent = `Group: ${groupName}`;
}

// Back to Dashboard Button
document.getElementById("back-to-dashboard").addEventListener("click", () => {
  document.getElementById("group-space").style.display = "none";
  document.getElementById("home").style.display = "block";
});

// Real-Time Chat (Local Simulation)
document.getElementById("send-chat").addEventListener("click", () => {
  const chatInput = document.getElementById("chat-input");
  if (chatInput.value) {
    const messageContainer = document.getElementById("messages");
    const message = document.createElement("div");
    message.textContent = chatInput.value;
    messageContainer.appendChild(message);
    chatInput.value = "";
  }
});

// Document Sharing
document.getElementById("share-document").addEventListener("click", () => {
  const fileInput = document.getElementById("upload-document");
  const file = fileInput.files[0];
  if (file) {
    const documentList = document.getElementById("documents-list");
    const documentItem = document.createElement("li");
    documentItem.textContent = file.name;
    documentList.appendChild(documentItem);
  }
});

// Task and Goal Management
document.getElementById("add-task").addEventListener("click", () => {
  const taskInput = document.getElementById("task-input");
  const taskDeadline = document.getElementById("task-deadline");
  if (taskInput.value && taskDeadline.value) {
    const taskList = document.getElementById("task-list");
    const taskItem = document.createElement("li");
    taskItem.textContent = `${taskInput.value} (Due: ${taskDeadline.value})`;
    taskList.appendChild(taskItem);
    taskInput.value = "";
    taskDeadline.value = "";
  }
});

