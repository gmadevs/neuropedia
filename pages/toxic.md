---
outline: deep
---
<style>

.star-link-list {
  list-style-type: none !important;
  padding-left: 0 !important;
  margin-left: 0 !important;
}

.switch-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
  font-size: 0.95rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: #ccc;
  border-radius: 24px;
  transition: 0.4s;
}

.slider:before {
  content: "";
  position: absolute;
  height: 18px;
  width: 18px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #42b983;
}

input:checked + .slider:before {
  transform: translateX(18px);
}

</style>

# Toxic and metabolic diseases

<div class="switch-container">
  <label class="switch">
    <input type="checkbox" id="toggle-stars">
    <span class="slider"></span>
  </label>
  <span>Show only recommended topics ⭐</span>
</div>

## Metabolic disease

[Non Ketotic Hyperglycaemic Seizure](https://radiopaedia.org/articles/non-ketotic-hyperglycaemic-seizure)  
[Mild Encephalopathy With Reversible Splenial Lesion Mers](https://radiopaedia.org/articles/mild-encephalopathy-with-reversible-splenial-lesion-mers)  

## Toxic disease

[Toxic Leukoencephalopathy Mnemonic](https://radiopaedia.org/articles/toxic-leukoencephalopathy-mnemonic)  
[Wernicke Encephalopathy](https://radiopaedia.org/articles/wernicke-encephalopathy)  
[Carbon Monoxide Poisoning](https://radiopaedia.org/articles/carbon-monoxide-poisoning-1)  
[Minamata Disease](https://radiopaedia.org/articles/minamata-disease-1)  