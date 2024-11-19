let contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" }
];

function displayContactList() {
    console.log("Contact List:");
    contactList.forEach((contact, index) => {
        console.log(`${index + 1}. Name: ${contact.name}/ Phone: ${contact.phone}/ Email: ${contact.email}`);
    });
}

function addContact(name, phone, email) {
    contactList.push({ name, phone, email });
    console.log(`New contact added: Name: ${name}/ Phone: ${phone}/ Email: ${email}`)
}

function showFirstAndLastContacts() {
    if (contactList.length > 0) {
        console.log(`First Contact: Name: ${contactList[0].name}/ Phone: ${contactList[0].phone}/ Email: ${contactList[0].email}`);
        console.log(`Last Contact: Name: ${contactList[contactList.length - 1].name}/ Phone: ${contactList[contactList.length - 1].phone}/ Email: ${contactList[contactList.length - 1].email}`);
    } else {
        console.log("Contact list is empty.");
    }
}

displayContactList();

addContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");

displayContactList();

showFirstAndLastContacts();