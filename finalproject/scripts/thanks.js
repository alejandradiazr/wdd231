const results =
document.querySelector(
"#results"
);

const params =
new URLSearchParams(
window.location.search
);

const fullname =
params.get("fullname");

if (!fullname) {

results.innerHTML = `

<p>
No form data was submitted.
</p>

`;

}

else {

const email =
params.get("email");

const phone =
params.get("phone") || "Not provided";

const message =
params.get("message");

results.innerHTML = `

<p>
<strong>Name:</strong>
${fullname}
</p>

<p>
<strong>Email:</strong>
${email}
</p>

<p>
<strong>Phone:</strong>
${phone}
</p>

<p>
<strong>Message:</strong>
${message}
</p>

`;

}