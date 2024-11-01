console.log(
  '%c👋 Hello from Zervise!',
  'color:#54c9ff;font-family:system-ui;font-size:1.6rem;-webkit-text-stroke: 1px black;font-weight:bold;'
);

// SVG code
// #region
const faqSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24">
<g id="qm" transform="translate(-251 -93)">
  <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(251 93)" fill="#fff" stroke="#202020" stroke-width="2">
    <circle cx="11.5" cy="11.5" r="11.5" stroke="none"/>
    <circle cx="11.5" cy="11.5" r="10.5" fill="none"/>
  </g>
  <path 
  id="Icon_open-question-mark" data-name="Icon open-question-mark" 
  d="M3.567,0A3.644,3.644,0,0,0,.852.994,3.352,3.352,0,0,0,0,
  2.921l1.444.2a1.862,1.862,0,0,1,.448-1.039,2.094,2.094,0,0,
  1,1.675-.572,2.478,2.478,0,0,1,1.762.512,1.285,1.285,0,0,
  1,.4.994A2.563,2.563,0,0,1,4.521,5.271,4.344,4.344,0,0,0,
  2.845,8.659v.376H4.289V8.659A2.531,2.531,0,0,1,5.459,6.4,
  4.366,4.366,0,0,0,7.178,3.012,2.957,2.957,0,0,0,6.326.888,
  3.885,3.885,0,0,0,3.567,0ZM2.845,10.541v1.506H4.289V10.541Z" 
  transform="translate(259.06 98.642)" fill="#202020"/>
</g>
</svg>`;

const newTicketSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 28 28">
<g id="Icon_feather-plus-square" data-name="Icon feather-plus-square" transform="translate(-4 -4)">
  <path id="Path_296" data-name="Path 296" d="M7.5,4.5h21a20,20,0,0,1,3,3v21a20,20,0,0,1-3,3H7.5a20,20,0,0,1-3-3V7.5a20,20,0,0,1,3-3Z" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  <path id="Path_297" data-name="Path 297" d="M18,12V24" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
  <path id="Path_298" data-name="Path 298" d="M12,18H24" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
</g>
</svg>`;

const myTicketsSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" viewBox="0 0 35.111 28.708">
<g id="ticket_icon" data-name="ticket icon" transform="translate(-358 -374.292)">
  <g id="Rectangle_119" data-name="Rectangle 119" transform="translate(358 376)" fill="none" stroke="#202020" stroke-width="1.8">
    <rect width="35.111" height="27" rx="4" stroke="none"/>
    <rect x="0.5" y="0.5" width="34.111" height="26" rx="3.5" fill="none"/>
  </g>
  <path id="Path_185" data-name="Path 185" d="M429.172,413.083h11.263" transform="translate(-55.503 -27.761)" fill="none" stroke="#202020" stroke-linecap="round" stroke-width="1"/>
  <path id="Path_186" data-name="Path 186" d="M429.172,413.083h11" transform="translate(-55.439 -23.583)" fill="none" stroke="#202020" stroke-linecap="round" stroke-width="1"/>
  <path id="Path_187" data-name="Path 187" d="M429.172,413.083h11" transform="translate(-55.265 -19.404)" fill="none" stroke="#202020" stroke-linecap="round" stroke-width="1"/>
  <path id="Path_188" data-name="Path 188" d="M362.906,374.251s.031,2.156,0,3.119a1.455,1.455,0,1,1-2.909,0c.013-1.987-.013-6.438,0-8.583a1.462,1.462,0,0,1,2.909,0c-.016,1.146,0,.84,0,.84" transform="translate(4.612 7.317)" fill="none" stroke="#202020" stroke-width="1"/>
</g>
</svg>`;

const closeSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="fa-svg svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
<path fill="currentColor" stroke-width="1" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
</svg>`;

const submitSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" class="fa-svg-md svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
</svg>`;

const extLinkSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="fa-svg-md svg-inline--fa fa-external-link-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z">
</path>
</svg>`;

const sendSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" class="fa-svg-md svg-inline--fa fa-paper-plane fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
</svg>`;

const exclamationSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" class="fa-svg-bg svg-inline--fa fa-exclamation-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
</svg>`;

const chevronSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="fa-svg-md svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
<path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
</svg>`;

const refreshSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sync-alt" class="fa-svg-sm svg-inline--fa fa-sync-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"></path>
</svg>`;

const loadingSvg = `<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-notch" class="fa-svg svg-inline--fa fa-circle-notch fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path fill="currentColor" d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"></path>
</svg>`;

const attachmentSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
</svg>`;

// const downloadSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
// <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
// </svg>`;
const downloadSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
</svg>`;
// #endregion

// const apiBase = 'http://localhost:7001';
const apiBase = 'https://api.zervise.com';

let socket = io(apiBase);

// Global app state
let state = {
  person: null,
  token: '',
  tickets: [],
  faqs: [],
  agents: [],
  errors: [],
};
let stateProxy = new Proxy(state, {
  set: function (target, key, value) {
    console.log(`${key} set to ${value}`);
    target[key] = value;
    if (key === 'tickets') addTicketHtml();
    else if (key === 'faqs') addFaqHtml();
    else if (key === 'person') getAllAgents();
    return true;
  },
});

const zerviseBtn = document.querySelector('.zervise-btn');
let zerviseContainerClass = 'zervise-container-3';
if (zerviseBtn.classList.contains('zervise-btn-1'))
  zerviseContainerClass = 'zervise-container-1';
else if (zerviseBtn.classList.contains('zervise-btn-2'))
  zerviseContainerClass = 'zervise-container-2';
else zerviseContainerClass = 'zervise-container-3';

const subdomainURL = zerviseBtn.getAttribute('data-subdomain');
const subdomain = subdomainURL
  .split('zervise.com/')[0]
  .split('https://')[1]
  .split('.')[0];

// loading the auth token for submitting tickets
const loadAuthToken = () => {
  if (localStorage.getItem('auth-token') && localStorage.getItem('person')) {
    state.token = localStorage.getItem('auth-token');
    state.person = JSON.parse(localStorage.getItem('person'));
    stateProxy.person = JSON.parse(localStorage.getItem('person'));

    showSuccess('Zervise subdomain connected');

    console.log(state);
  } else {
    const url = `${apiBase}/auth/user/wordpress/${subdomain}`;
    const data = {
      wordpressId: zerviseBtn.getAttribute('data-user-id'),
      email: zerviseBtn.getAttribute('data-user-email'),
      name: zerviseBtn.getAttribute('data-user-name'),
      registerDate: zerviseBtn.getAttribute('data-user-register-date'),
    };
    const headers = {
      'Content-Type': 'application/json',
    };

    makeRequest(url, 'POST', headers, data, 'Zervise subdomain connected');
  }
};

const getAllAgents = () => {
  makeRequest(
    `${apiBase}/person/clientId/${state.person.clientId}`,
    'GET',
    {
      'auth-token': state.token,
      clientId: state.person.clientId,
    },
    {},
    '',
    false
  );
};

// shows error as a div
const showError = (msg, removalTime = 10000) => {
  if (document.querySelector('.error-container'))
    document.querySelector('.error-container').remove();

  const errorcontainer = document.createElement('div');
  errorcontainer.classList.add('error-container');
  errorcontainer.innerText = msg;

  document.body.appendChild(errorcontainer);

  setTimeout(() => {
    errorcontainer.remove();
  }, +removalTime);
};

// shows success message as a div
const showSuccess = (msg, removalTime = 8000) => {
  if (document.querySelector('.success-container'))
    document.querySelector('.success-container').remove();

  const successContainer = document.createElement('div');
  successContainer.classList.add('success-container');
  successContainer.innerText = msg;

  document.body.appendChild(successContainer);

  setTimeout(() => {
    successContainer.remove();
  }, +removalTime);
};

// starts loading state
const startLoading = (isReply = false) => {
  if (isReply) {
    document.querySelector('.submit-btn').innerHTML = loadingSvg;
    document.querySelector('.submit-btn').classList.add('loading');
    document.querySelector('#ticket-desc').value = '';
    document.querySelector('#ticket-attachment').value = '';
  } else {
    document.querySelector(
      '.submit-btn'
    ).innerHTML = `${loadingSvg} &nbsp;Submitting Ticket...`;
    document.querySelector('.submit-btn').classList.add('loading');
    document.querySelector('#ticket-heading').value = '';
    document.querySelector('#ticket-desc').value = '';
    document.querySelector('#ticket-attachment').value = '';
  }
};

// ends loading state
const finishLoading = (isReply = false) => {
  if (isReply) {
    document.querySelector('.submit-btn').innerHTML = sendSvg;
    document.querySelector('.submit-btn').classList.remove('loading');
  } else {
    document.querySelector(
      '.submit-btn'
    ).innerHTML = `${submitSvg} &nbsp;Submit Ticket Now`;
    document.querySelector('.submit-btn').classList.remove('loading');
  }
};

// makes a request to the zervise api
const makeRequest = async (
  url = '',
  method = 'GET',
  headers = {},
  data = {},
  successMsg = 'Success',
  isFormData = false
) => {
  if (isFormData) {
    if (url.includes('attachment')) startLoading(true);
    else startLoading();
  }

  let config = {
    method,
    headers,
  };
  if (method !== 'GET') config.body = isFormData ? data : JSON.stringify(data);

  fetch(url, config)
    .then((result) => {
      if (!result.ok) throw result;
      return result.json();
    })
    .then((result) => {
      if (url.includes('attachment')) {
        finishLoading(true);
        if (successMsg) showSuccess(successMsg);
      } else {
        if (Array.isArray(result)) {
          if (url.includes('ticket')) {
            stateProxy.tickets = result;
            state.tickets = result;
            if (successMsg) showSuccess(successMsg);
          } else if (url.includes('faq')) {
            stateProxy.faqs = result;
            state.faqs = result;
            if (successMsg) showSuccess(successMsg);
          } else if (url.includes('person')) {
            state.agents = result;
            if (successMsg) showSuccess(successMsg);
          }
        } else if (result.person && result.token) {
          state.person = result.person;
          state.token = result.token;
          stateProxy.person = result.person;
          localStorage.setItem('auth-token', result.token);
          localStorage.setItem('person', JSON.stringify(result.person));
          if (successMsg) showSuccess(successMsg);
        } else {
          finishLoading();
          if (successMsg)
            showSuccess(
              result.ticketNumber
                ? `Ticket #${result.ticketNumber} created successfully`
                : 'Ticket created successfully'
            );

          const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: false,
          });
          document.querySelector('.nav-item-2').dispatchEvent(clickEvent);
          setTimeout(() => {
            const ticketDiv = document.querySelector('.ticket-div');
            ticketDiv.scrollTop = ticketDiv.scrollHeight;
          }, 500);
        }
      }

      console.log(state);
    })
    .catch((error) => {
      console.log(error.status);
      if (error.status == 401) {
        localStorage.removeItem('auth-token');
        localStorage.removeItem('person');

        showError('Session expired! Refresh the page to login again.');
      } else {
        console.log(error);
        error.json().then((body) => {
          state.errors = body.errors;

          document.querySelector(
            '.submit-btn'
          ).innerHTML = `${submitSvg} &nbsp;Submit Ticket Now`;
          document.querySelector('.submit-btn').classList.remove('loading');
          state.errors.forEach((err) => {
            showError(err.msg);
          });

          console.log(state);
        });
      }
    });
};

if (!zerviseBtn.disabled) {
  loadAuthToken();
}

const getAttachmentHtml = (attachmentLinks = []) => {
  let attachmentHtml = '';
  attachmentLinks.forEach(({ link }, i) => {
    attachmentHtml += `<div class="ac-msg"><a download href='${link}' target='_blank'>${downloadSvg}</a><a download href='${link}' target='_blank'>attachment-${
      i + 1
    }.${link.split('.')[link.split('.').length - 1]}</a></div>`;
  });

  return attachmentHtml;
};

const getActivityItemHtml = (activity) => {
  if (!activity) return '';

  return `<div class="ac-item">
  <div class="ac-sender-info ac-sender-info-${activity.message.sender}">
  <p class='ac-updater'>${
    state.agents.find((ag) => ag._id == activity.updatedBy).name.split(' ')[0]
  }</p>
  <p class="ticket-date date-l ac-date">${new Date(
    activity.date
  ).toLocaleString('en-In', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  })}</p>
  </div>  

  <div class="ac-top ac-top-${activity.message.sender}">
    <div class="ac-badge ac-badge-${activity.message.sender}">${state.agents
    .find((ag) => ag._id == activity.updatedBy)
    .name.split(' ')[0][0]
    .toLowerCase()}
    </div>
    <div>
    <p class="ac-msg">${activity.message.body}</p>
    </div>
  </div>
  <div class="ac-top-attachment ac-top-attachment-${activity.message.sender}">
    <div>
    ${getAttachmentHtml(activity.attachmentLinks || [])}
    </div>
  </div>
  
</div>`;
};

const getActivitiesHtml = (ticketIndex) => {
  let activitiesHtml = '';
  stateProxy.tickets[ticketIndex].activities
    .filter((ac) => ac.type === 'reply')
    .forEach((activity) => {
      activitiesHtml += getActivityItemHtml(activity);
    });

  return activitiesHtml;
};

const notFoundHtml = (msg = 'No Content found') => {
  return `<div class="not-found">
  ${exclamationSvg}
  <p>${msg}</p>
</div>`;
};

const addTicketHtml = () => {
  let ticketItemsHtml = '';
  stateProxy.tickets.forEach((ticket, i) => {
    ticketItemsHtml += `
        <div class="ticket-item" title="${ticket.ticketDescription.substring(
          0,
          80
        )}..." data-index=${i}>
            <div class="ticket-top">
              <p class="ticket-number">#${ticket.ticketNumber}</p>
              <p class="ticket-status">${
                ticket.ticketStatus[ticket.ticketStatus.length - 1].status
              }</p>
            </div>
  
            <div class="ticket-bottom">
              <p class="ticket-head" >${ticket.ticketHeading}</p>
              <p class="ticket-date">${new Date(
                ticket.dateCreated
              ).toLocaleString('en-In', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
              })}</p>
            </div>
          </div>
        `;
  });

  document.querySelector('.top-div').innerHTML = `<div class="ticket-div">${
    ticketItemsHtml === '' ? notFoundHtml('No Tickets found') : ticketItemsHtml
  }</div>`;

  const coll = document.getElementsByClassName('ticket-item');
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      let overlayDiv = document.querySelector('.overlay-div');
      overlayDiv.classList.toggle('expand');
      if (overlayDiv.innerHTML) {
        overlayDiv.innerHTML = '';
      } else {
        let activitiesHtml = getActivitiesHtml(
          coll[i].getAttribute('data-index')
        );

        overlayDiv.innerHTML = stateProxy.tickets[
          coll[i].getAttribute('data-index')
        ]
          ? `
        <div class="overlay-top">
          <div title="${
            stateProxy.tickets[coll[i].getAttribute('data-index')].ticketHeading
          } - ${
              stateProxy.tickets[coll[i].getAttribute('data-index')]
                .ticketDescription
            }">
            <p class="overlay-q">
              <p class="ticket-number">#${
                stateProxy.tickets[coll[i].getAttribute('data-index')]
                  .ticketNumber
              }</p>
                  <p class="ticket-status">${
                    stateProxy.tickets[coll[i].getAttribute('data-index')]
                      .ticketStatus[
                      stateProxy.tickets[coll[i].getAttribute('data-index')]
                        .ticketStatus.length - 1
                    ].status
                  }</p>
              <br/>
              ${stateProxy.tickets[
                coll[i].getAttribute('data-index')
              ].ticketHeading
                .substring(0, 30)
                .trim()} ...
              <br/>
              <p class="ticket-date date-l">${new Date(
                stateProxy.tickets[
                  coll[i].getAttribute('data-index')
                ].dateCreated
              ).toLocaleString('en-In', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour12: true,
                hour: 'numeric',
                minute: 'numeric',
              })}</p>
              </p>
          </div>
          <div class="overlay-close-btn" title="Close Overlay">${chevronSvg}</div>
        </div>

        <div class="overlay-mid">
            ${
              !activitiesHtml
                ? notFoundHtml('Problem loading activities')
                : activitiesHtml
            }
        </div>

        <form class="zervise-form overlay-form" data-index=${coll[
          i
        ].getAttribute('data-index')}>
          <textarea id="ticket-desc" type="text" rows="2" placeholder="Reply..." required></textarea>
          
          <div class="form-bottom">
            <div class="file-div overlay-file-div"><input id="ticket-attachment" type="file" multiple></div>
            <button type="submit" value="Create Ticket" class="submit-btn overlay-submit" title="Send Reply">${sendSvg}</button>
          </div>
        </form>`
          : `<div class="overlay-top">
        <div>
          <p class="overlay-q"></p>
        </div>
        <div class="overlay-close-btn" title="Close Overlay">${chevronSvg}</div>
      </div>
      ${notFoundHtml('Problem loading content')}`;
      }
      document.querySelector('.overlay-mid').scrollTop =
        document.querySelector('.overlay-mid').scrollHeight;

      socket.on('msg', (data) => {
        console.log(data);
        if (
          overlayDiv.classList.contains('expand') &&
          data.ticketId ==
            stateProxy.tickets[coll[i].getAttribute('data-index')]._id
        ) {
          let overlayMid = document.querySelector('.overlay-mid');
          if (overlayMid) {
            overlayMid.insertAdjacentHTML(
              'beforeend',
              getActivityItemHtml(data.activity)
            );
            // if (
            //   overlayMid.lastElementChild.lastElementChild.childElementCount ===
            //   3
            // ) {
            //   overlayMid.lastElementChild.lastElementChild.lastElementChild.addEventListener(
            //     'click',
            //     () => {
            //       console.log(data.activity.attachmentLinks);
            //       const attachmentDiv = document.createElement('div');
            //       attachmentDiv.classList.add('attachment-overlay');
            //       let attachments = `<div class='close-attachment'>${closeSvg}</div>`;
            //       data.activity.attachmentLinks.forEach(({ link }, k) => {
            //         attachments += `<div class='attach-link attach-link-${k}'><a download href='${link}' target='_blank'><div>${downloadSvg}</div> ${
            //           link.split('@original@')[1]
            //         }</a></div>`;
            //       });
            //       attachmentDiv.innerHTML = attachments;

            //       document
            //         .querySelector('.overlay-div')
            //         .appendChild(attachmentDiv);

            //       document
            //         .querySelector('.close-attachment')
            //         .addEventListener('click', () => attachmentDiv.remove());
            //     }
            //   );
            // }
            overlayMid.scrollTop = overlayMid.scrollHeight;
          }
        }
      });

      // const acItems = document.getElementsByClassName('ac-top');
      // for (let j = 0; j < acItems.length; j++) {
      //   if (acItems[j].childElementCount === 3) {
      //     acItems[j].lastElementChild.addEventListener('click', () => {
      //       console.log(
      //         stateProxy.tickets[coll[i].getAttribute('data-index')].activities[
      //           j
      //         ].attachmentLinks
      //       );

      //       const attachmentDiv = document.createElement('div');
      //       attachmentDiv.classList.add('attachment-overlay');
      //       let attachments = `<p>Attachments</p><div class='close-attachment'>${closeSvg}</div>`;
      //       stateProxy.tickets[coll[i].getAttribute('data-index')].activities[
      //         j
      //       ].attachmentLinks.forEach(({ link }, m) => {
      //         attachments += `<div class='attach-link attach-link-${m}'><a download href='${link}' target='_blank'><div>${downloadSvg}</div> ${
      //           link.split('@original@')[1]
      //         }</a></div>`;
      //       });
      //       attachmentDiv.innerHTML = attachments;

      //       document.querySelector('.overlay-div').appendChild(attachmentDiv);

      //       document
      //         .querySelector('.close-attachment')
      //         .addEventListener('click', () => attachmentDiv.remove());
      //     });
      //   }
      // }

      document
        .querySelector('.overlay-close-btn')
        .addEventListener('click', () => {
          coll[i].classList.remove('open');
          overlayDiv.classList.remove('expand');
          overlayDiv.innerHTML = '';

          makeRequest(
            `${apiBase}/ticket/user`,
            'GET',
            {
              'auth-token': state.token,
              clientId: state.person.clientId,
            },
            {},
            '',
            false
          );
        });

      document
        .querySelector('.overlay-form')
        .addEventListener('submit', (e) => {
          e.preventDefault();

          if (!state.token || !state.person.clientId) {
            showError('Invalid subdomain URL');
            return;
          }

          let message = e.target[0].value;
          let replyAttachments = e.target[1].files;

          const url = `${apiBase}/ticket/attachment/${
            stateProxy.tickets[this.getAttribute('data-index')]._id
          }?clientId=${state.person.clientId}&updatedBy=${state.person._id}`;
          const headers = {
            'auth-token': state.token,
            clientId: state.person.clientId,
          };

          let formData = new FormData();
          formData.append('message', message);
          formData.append('messageType', 'reply');
          for (let i = 0; i < replyAttachments.length; i++) {
            formData.append('attachment', replyAttachments[i]);
          }

          makeRequest(
            url,
            'POST',
            headers,
            formData,
            'Replied successfully',
            true
          );
        });
    });
  }
};

const addFaqHtml = () => {
  let faqItemsHtml = '';
  stateProxy.faqs.forEach((faq, i) => {
    faqItemsHtml += `<button class="collapsible" data-index=${i}>${faq.question}</button>`;
  });

  document.querySelector('.top-div').innerHTML = `<div class="faq-div">${
    faqItemsHtml === '' ? notFoundHtml('No Articles found') : faqItemsHtml
  }</div>`;

  const coll = document.getElementsByClassName('collapsible');
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      this.classList.toggle('open');
      let overlayDiv = document.querySelector('.overlay-div');
      overlayDiv.classList.toggle('expand');
      if (overlayDiv.innerHTML) {
        overlayDiv.innerHTML = '';
      } else {
        overlayDiv.innerHTML = stateProxy.faqs[
          coll[i].getAttribute('data-index')
        ]
          ? `
        <div class="overlay-top">
          <p class="overlay-q">${
            stateProxy.faqs[coll[i].getAttribute('data-index')].question
          }</p>
          <div class="overlay-close-btn" title="Close Overlay">${chevronSvg}</div>
        </div>
        <p class="overlay-a">${
          stateProxy.faqs[coll[i].getAttribute('data-index')].answer
        }</p>`
          : `<div class="overlay-top">
        <p class="overlay-q"></p>
        <div class="overlay-close-btn" title="Close Overlay">${chevronSvg}</div>
      </div>
      ${notFoundHtml('problem loading content')}`;
      }

      document
        .querySelector('.overlay-close-btn')
        .addEventListener('click', () => {
          coll[i].classList.remove('open');
          overlayDiv.classList.remove('expand');
          overlayDiv.innerHTML = '';

          makeRequest(
            `${apiBase}/faqs/users/${state.person.clientId}`,
            'GET',
            {
              'auth-token': state.token,
              clientId: state.person.clientId,
            },
            {},
            '',
            false
          );
        });
    });
  }
};

const addListnerForTicketSubmit = () => {
  const zerviseForm = document.querySelector('.zervise-form');

  // submitting the form
  zerviseForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!state.token || !state.person.clientId) {
      showError('Invalid subdomain URL');
      return;
    }

    let ticketHeading = e.target[0].value;
    let ticketDescription = e.target[1].value;
    let ticketAttachments = e.target[2].files;

    let formData = new FormData();
    const ticketObj = {
      ticketHeading,
      ticketDescription,
      clientId: state.person.clientId,
      createdPersonId: state.person._id,
      userId: state.person._id,
      wordpressUserId: zerviseBtn.getAttribute('data-user-id'),
      source: 'Wordpress',
      ticketInfo: {
        priority: 'low',
        tags: ['wordpress'],
        updatedBy: '',
        currentlyAssigned: '',
        department: '',
        service: '',
        tags: '',
      },
      ticketStatus: [
        {
          status: 'open',
          end: '',
          updatedBy: '',
        },
      ],
      activities: [
        {
          action: 'Reported via Wordpress Widget',
          message: {
            body: ticketDescription,
            sender: 'user',
          },
          type: 'reply',
          updatedBy: state.person._id,
        },
      ],
    };
    formData.append('ticket', JSON.stringify(ticketObj));
    for (let i = 0; i < ticketAttachments.length; i++) {
      formData.append('attachment', ticketAttachments[i]);
    }

    const url = `${apiBase}/ticket/create`;
    const headers = {
      'auth-token': state.token,
      clientId: state.person.clientId,
    };

    makeRequest(
      url,
      'POST',
      headers,
      formData,
      'Ticket created successfully',
      true
    );
  });
};

// adds the form in a div
const addZerviseDiv = () => {
  const container = document.createElement('div');
  container.classList.add('zervise-container', zerviseContainerClass);

  container.innerHTML = `
  <div class="close-btn" title="Close Widget">${closeSvg}</div>
  <p class="zervise-head">
    ${newTicketSvg} &nbsp;&nbsp;Raise a Ticket</p>
  <section class="top-div">
    <form class="zervise-form">
      <input id="ticket-heading" type="text" placeholder="Enter ticket subject" required></input> <textarea id="ticket-desc" type="text" rows="11" placeholder="Describe your issue..." required></textarea>
      <div class="file-div"><input id="ticket-attachment" type="file" multiple></div>
      <button type="submit" value="Create Ticket" class="submit-btn" title="Submit Ticket">${submitSvg} &nbsp;Submit Ticket Now</button>
    </form> 
  </section>
  

  <div class="bottom-nav">
    <button class="bottom-nav-item nav-item-0">FAQs</button>  
    <button class="bottom-nav-item nav-item-1 active">Raise a Ticket</button>  
    <button class="bottom-nav-item nav-item-2">My Tickets</button>  
  </div>

  <p class="footer-txt">⚡ Powered by <a href="https://zervise.com/" target="_blank">Zervise</a></p>
  
  <div class="overlay-div"></div>`;

  document.body.appendChild(container);

  document.querySelector('.nav-item-0').addEventListener('click', () => {
    if (!document.querySelector('.nav-item-0').classList.contains('active')) {
      document.querySelector('.nav-item-1').classList.remove('active');
      document.querySelector('.nav-item-2').classList.remove('active');
      document.querySelector('.nav-item-0').classList.add('active');

      document.querySelector(
        '.zervise-head'
      ).innerHTML = `${faqSvg} &nbsp&nbsp;FAQs`;

      makeRequest(
        `${apiBase}/faqs/users/${state.person.clientId}`,
        'GET',
        {
          'auth-token': state.token,
          clientId: state.person.clientId,
        },
        {},
        '',
        false
      );
    }
  });
  document.querySelector('.nav-item-1').addEventListener('click', () => {
    if (!document.querySelector('.nav-item-1').classList.contains('active')) {
      document.querySelector('.nav-item-0').classList.remove('active');
      document.querySelector('.nav-item-2').classList.remove('active');
      document.querySelector('.nav-item-1').classList.add('active');

      document.querySelector(
        '.zervise-head'
      ).innerHTML = `${newTicketSvg} &nbsp;&nbsp;Raise a Ticket`;

      document.querySelector('.top-div').innerHTML = `
      <form class="zervise-form">
        <input id="ticket-heading" type="text" placeholder="Enter ticket subject" required></input> <textarea id="ticket-desc" type="text" rows="11" placeholder="Describe your issue..." required></textarea>
        <div class="file-div"><input id="ticket-attachment" type="file" multiple></div>
        <button type="submit" value="Create Ticket" class="submit-btn" title="Submit Ticket">${submitSvg} &nbsp;Submit Ticket Now</button>
      </form> `;

      addListnerForTicketSubmit();
    }
  });
  document.querySelector('.nav-item-2').addEventListener('click', () => {
    if (!document.querySelector('.nav-item-2').classList.contains('active')) {
      document.querySelector('.nav-item-0').classList.remove('active');
      document.querySelector('.nav-item-1').classList.remove('active');
      document.querySelector('.nav-item-2').classList.add('active');

      document.querySelector(
        '.zervise-head'
      ).innerHTML = `${myTicketsSvg} &nbsp;&nbsp;My Tickets <button class="refresh-btn">${refreshSvg} &nbsp;Refresh</button>`;

      document.querySelector('.refresh-btn').addEventListener('click', () => {
        makeRequest(
          `${apiBase}/ticket/user`,
          'GET',
          {
            'auth-token': state.token,
            clientId: state.person.clientId,
          },
          {},
          'Tickets synced',
          false
        );
      });

      makeRequest(
        `${apiBase}/ticket/user`,
        'GET',
        {
          'auth-token': state.token,
          clientId: state.person.clientId,
        },
        {},
        '',
        false
      );
    }
  });

  // button for closing the form
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.zervise-container').remove();
  });
  addListnerForTicketSubmit();
};

zerviseBtn.addEventListener('click', () => {
  addZerviseDiv();
});
