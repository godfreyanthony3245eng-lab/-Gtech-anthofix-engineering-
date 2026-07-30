// Interface View Controls, Step Navigation & Dropdowns
window.UIHandler = {
    updateProgress: function(step) {
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`page-${i}`).classList.toggle('hidden', i !== step);
            const dot = document.getElementById(`step-dot-${i}`);
            if (i < step) { dot.className = 'step-circle completed'; dot.innerHTML = '<i class="fa-solid fa-check"></i>'; }
            else if (i === step) { dot.className = 'step-circle active'; dot.innerText = i; }
            else { dot.className = 'step-circle'; dot.innerText = i; }
        }
        document.getElementById('progress-line').style.width = ((step - 1) / 3) * 100 + '%';
    },

    populateStates: function(country) {
        const st = document.getElementById('p2-state'); st.innerHTML = '';
        Object.keys(window.LocationData[country] || window.LocationData["Other"]).forEach(s => st.appendChild(new Option(s, s)));
        this.onStateChange();
    },

    onCountryChange: function() { 
        this.populateStates(document.getElementById('p2-country').value); 
    },

    onStateChange: function() {
        const c = document.getElementById('p2-country').value, s = document.getElementById('p2-state').value, l = document.getElementById('p2-lga'); l.innerHTML = '';
        ((window.LocationData[c] && window.LocationData[c][s]) ? window.LocationData[c][s] : ["General"]).forEach(lg => l.appendChild(new Option(lg, lg)));
    }
};
