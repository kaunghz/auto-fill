// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "autofill") {
        autofillForm();
        sendResponse({ status: "success", message: "Form autofilled!" });
    }
});

const user = {
    name: "Kaung",
    email: "kaung@example.com",
    phone: "123-456-7890",
    location: "United States",
    linkedin: "linkedin.com",
    portfolio: "portfolio",
    gender: "male",
    race: "asian",
    veteran: "not",
    disability: "not",
    authorized: "yes",
    sponsorship: "yes",
};

function autofillForm() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.type === 'text') {
            if (input.name?.toLowerCase().includes('name') || input.placeholder?.toLowerCase().includes('name')) {
                input.value = user.name;
            }
            if (input.name?.toLowerCase().includes('email') || input.placeholder?.toLowerCase().includes('email')) {
                input.value = user.email;
            }
            if (input.name?.toLowerCase().includes('phone') || input.placeholder?.toLowerCase().includes('phone')) {
                input.value = user.phone;
            }
            if (input.name?.toLowerCase().includes('location') || input.placeholder?.toLowerCase().includes('location')) {
                input.value = user.location;
            }
            if (input.name?.toLowerCase().includes('linkedin') || input.placeholder?.toLowerCase().includes('linkedin')) {
                input.value = user.linkedin;
            }
            if (input.name?.toLowerCase().includes('portfolio') || input.placeholder?.toLowerCase().includes('portfolio')) {
                input.value = user.portfolio;
            }
        }
        if (input.type === 'radio' || input.type === 'checkbox') {
            if (input.name?.toLowerCase().includes('gender')) {
                input.checked = input.value.toLowerCase() === user.gender.toLowerCase();
            }
            if (input.name?.toLowerCase().includes('race') && input.value.toLowerCase().includes('asian')) {
                input.checked = input.value.toLowerCase().includes('asian');
            }
            if (input.name?.toLowerCase().includes('veteran')) {
                input.checked = input.value.toLowerCase().includes(user.veteran.toLowerCase());
            }
            if (input.name?.toLowerCase().includes('disability')) {
                input.checked = input.value.toLowerCase().includes('not'); // Check for "not"
            }
            if (input.name?.toLowerCase().includes('authorized')) {
                input.checked = input.value.toLowerCase() === user.authorized.toLowerCase();
            }
            if (input.name?.toLowerCase().includes('sponsorship')) {
                input.checked = input.value.toLowerCase() === user.sponsorship.toLowerCase();
            }
        }
    });

    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        if (select.name?.toLowerCase().includes('gender') || select.id?.toLowerCase().includes('gender')) {
            for (const option of select.options) {
                if (option.value.toLowerCase() === user.gender.toLowerCase()) {
                    option.selected = true;
                }
            }
        }
        if (select.name?.toLowerCase().includes('race') || select.id?.toLowerCase().includes('race')) {
            for (const option of select.options) {
                if (option.value.toLowerCase().includes('asian')) {
                    option.selected = true;
                }
            }
        }
        if (select.name?.toLowerCase().includes('veteran') || select.id?.toLowerCase().includes('veteran')) {
            for (const option of select.options) {
                if (option.value.toLowerCase().includes('not')) {
                    option.selected = true;
                }
            }
        }
        if (select.name?.toLowerCase().includes('disability') || select.id?.toLowerCase().includes('disability')) {
            for (const option of select.options) {
                if (option.value.toLowerCase().includes('not')) {
                    option.selected = true;
                }
            }
        }
        if (select.name?.toLowerCase().includes('authorized') || select.id?.toLowerCase().includes('authorized')) {
            for (const option of select.options) {
                option.selected = option.value.toLowerCase().includes(user.authorized.toLowerCase());
            }
        }
        if (select.name?.toLowerCase().includes('sponsorship') || select.id?.toLowerCase().includes('sponsorship')) {
            for (const option of select.options) {
                if (option.value.toLowerCase().includes('not')) {
                    option.selected = true;
                }
            }
        }
    });

}
