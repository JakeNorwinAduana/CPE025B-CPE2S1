let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let running = true;

while (running) {
    let choice = prompt("Main Menu: 'show', 'all', 'add', 'search', or 'quit'");

    if (choice === null) break; // Handles 'Cancel' on the main prompt

    switch (choice.toLowerCase()) {
        case "show":
            let index = prompt("Enter the index of the contact:");
            if (contacts[index]) {
                console.log(`${contacts[index].name} | ${contacts[index].phone} | ${contacts[index].email}`);
            } else {
                alert("Error: Index does not exist.");
            }
            break;

        case "all":
            console.log("--- Full Contact List ---");
            for (let contact of contacts) {
                console.log(`${contact.name} | ${contact.phone} | ${contact.email}`);
            }
            break;

        case "add":
            let n = prompt("Name:");
            let p = prompt("Phone:");
            let e = prompt("Email:");
            if (n && p && e) {
                contacts.push({ name: n, phone: p, email: e });
                alert("Contact added successfully.");
            } else {
                alert("Error: All fields are required.");
            }
            break;

        case "search":
            let searchName = prompt("Enter the name to search for:");
            let found = false;
            for (let contact of contacts) {
                if (contact.name.toLowerCase() === searchName.toLowerCase()) {
                    alert(`Found: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
                    found = true;
                    break;
                }
            }
            if (!found) alert("Contact not found.");
            break;

        case "quit":
            running = false;
            console.log("Session ended.");
            break;

        default:
            alert("Invalid option. Please try again.");
    }
}