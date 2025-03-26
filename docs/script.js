import * as dc from "https://cdn.jsdelivr.net/npm/@dreamcomposer/pre/+esm";
// Use the token from the environment variable
//const token = import.meta.env.VITE_DC_TOKEN;
dc.setAccessToken('ba6f9097-04d1-4b48-af36-cf9cd727950c'); //replace with 'token'
const dcController = dc.init('frame-container');

dc.setBackgroundColor(dcController, "#444444");
dc.setEnvironmentVisibility(dcController, false);
dc.setPpi(dcController, 200);
dc.setGridVisibility(dcController, false);
dc.setEnvironment(dcController, 'drug_store_1cb1622b-3e0d-4162-b5ba-84b18413a3a7');

dc.setRenderQuality(dcController, dc.RenderQuality.HIGH);
dc.setSurfaceMaterial(dcController, 'paper_blank_rough_f44db693-c610-4e2d-9721-0dbffe93522a');

  dc.setGeometry(dcController, "https://dreamcomposer.de/demo/library/box.gltf", {
    scaleWithMapping: true,
    defaultScale: [100, 100, 100],
    stages: [
      {
        name: "Front",
        uvColor: [0.5, 0, 0.5],
        axes: [0, 1],
      },
      {
        name: "Back",
        uvColor: [0.5, 1, 0.5],
        axes: [0, 1],
      },
      {
        name: "Top",
        uvColor: [0.5, 0.5, 1],
        axes: [0, 2],
      },
      {
        name: "Bottom",
        uvColor: [0.5, 0.5, 0],
        axes: [0, 2],
      },
      {
        name: "Right",
        uvColor: [1, 0.5, 0.5],
        axes: [2, 1],
      },
      {
        name: "Left",
        uvColor: [0, 0.5, 0.5],
        axes: [2, 1],
      },
    ],
  });


  dc.load(dcController);

// We'll store the layers in an array so we can easily modify them later.
const layers = [
  {
    // Foil layer (this is what we'll replace on click)
    material: 'foil_luxor_232_bff0045b-9216-4ea9-b1ed-e12f67ae72a6',
    texture: "https://dreamcomposer.de/demo/library/color_grid_512.png",
    name: "Peter",
  }
];

dc.setLayers(dcController, layers);

dc.setStageMappings(dcController, {
    Front: {
      uvMapping: {
        x: 0.25,
        y: 0.25,
        width: 1.0,
        height: 1.0,
      }
    },
    Back: {
      uvMapping: {
        x: 0.25,
        y: 0.75,
        width: 1,
        height: 1,
      }
    },
    Top: {
      uvMapping: {
        x: 0.25,
        y: 0,
        width: 1,
        height: 1,
      }
    },
    Bottom: {
      uvMapping: {
        x: 0.25,
        y: 0.5,
        width: 1,
        height: 1,
      }
    },
    Left: {
      uvMapping: {
        x: 0,
        y: 0.25,
        width: 1,
        height: 1,
      }
    },
    Right: {
      uvMapping: {
        x: 0.5,
        y: 0.25,
        width: 1,
        height: 1,
      }
    },
  });

dc.load(dcController);
console.log('Scene loaded.');

// -------------------------------
// 2) Material list (60 total)
// -------------------------------
const allMaterials = [
  // 40x LUXOR®
  { id: "78acf4c2-a447-4670-b7f4-26eff841bc65", name: "LUXOR® 230" },
  { id: "d79fe7cb-155c-44ec-9b11-f79b149cff5d", name: "LUXOR® 231" },
  { id: "bff0045b-9216-4ea9-b1ed-e12f67ae72a6", name: "LUXOR® 232" },
  { id: "965d30fe-1bff-4d7e-babe-14a091041236", name: "LUXOR® 233" },
  { id: "b07f9486-2e20-441c-80bd-9c178091f185", name: "LUXOR® 302" },
  { id: "9831ade4-addc-497e-bb5a-498a4da32bf2", name: "LUXOR® 307" },
  { id: "acbfd8d6-47eb-4ddb-9c99-8af94e41844c", name: "LUXOR® 308" },
  { id: "2afc60dd-b273-4413-933f-41bece0d57ba", name: "LUXOR® 332" },
  { id: "014ea69d-69ba-4c47-ab52-37eadc886752", name: "LUXOR® 334" },
  { id: "331add36-c2ba-4948-ab4c-d066f34c4574", name: "LUXOR® 336" },
  { id: "3b2dc929-acb9-48d1-9341-a0df7670e28d", name: "LUXOR® 338" },
  { id: "d75004c4-0d7a-4be8-a8ce-870ea8f9c52f", name: "LUXOR® 341" },
  { id: "52a7d877-55e3-4259-867a-5a15cb412cc4", name: "LUXOR® 355" },
  { id: "f422231b-bda8-4470-afda-33c9465def21", name: "LUXOR® 360" },
  { id: "77cd6a98-d7ac-4289-8e18-a94bb7a35ffa", name: "LUXOR® 362" },
  { id: "e18923db-81aa-4dff-9df4-d2cbc7437565", name: "LUXOR® 369" },
  { id: "eec8c272-122e-4c98-9933-3fcdd44d1235", name: "LUXOR® 376" },
  { id: "cd02d047-2b97-400c-96f4-9ccc165266ed", name: "LUXOR® 377" },
  { id: "059c7403-6cd5-4eec-8662-c10d55356898", name: "LUXOR® 381" },
  { id: "6aa6d7fb-3336-448a-baf5-b6b9bb0c2894", name: "LUXOR® 386" },
  { id: "2dd58e80-bca4-4254-9f77-1d6520e9b98c", name: "LUXOR® 390" },
  { id: "478e7480-dd85-4f37-9010-ed65920dffe5", name: "LUXOR® 391" },
  { id: "d294eca7-6cbe-4eb4-9886-368329267ff0", name: "LUXOR® 392" },
  { id: "933fd0f0-4670-48b1-a5f7-d917acff8885", name: "LUXOR® 396" },
  { id: "733fe691-3d10-4df2-b5c7-f012d2c0068e", name: "LUXOR® 397" },
  { id: "bb04df87-71a1-482a-8409-1a9eeee95b45", name: "LUXOR® 398" },
  { id: "5f7edcc2-3494-47ca-86cc-717f2155d243", name: "LUXOR® 404" },
  { id: "c83854f4-6bee-4c95-9948-82804c31089d", name: "LUXOR® 418" },
  { id: "596244e1-a7f7-4480-a449-eb89a3de64f7", name: "LUXOR® 420" },
  { id: "0cf8e147-90ee-4368-b49d-a0cf6470500b", name: "LUXOR® 423" },
  { id: "0dc1230d-7d91-46fa-9a59-39d4f79354da", name: "LUXOR® 425" },
  { id: "7475dce5-0d94-497b-9a0f-1a26a6c114e1", name: "LUXOR® 426" },
  { id: "6cd4c900-976b-47cb-96c0-932d0df720ab", name: "LUXOR® 427" },
  { id: "f8d0dca4-7ef5-4d8a-ad0a-d93228974370", name: "LUXOR® 428" },
  { id: "33f4cf10-235f-4cc9-9caa-26a83bc1a398", name: "LUXOR® 428K" },
  { id: "8b7de179-ce93-43d7-8b82-f4725abe364d", name: "LUXOR® 429N" },
  { id: "1f0b24f1-9a67-4c8a-9b92-edc6994d8d1e", name: "LUXOR® 432" },

  // 20x LIGHT LINE®
  { id: "ec617d3b-aa7b-422c-98da-04e74cbfd725", name: "LIGHT LINE® Aquadrops Select" },
  { id: "d245bb5e-9f8e-496d-b6e5-6dab00a6ad5f", name: "LIGHT LINE® BLUR" },
  { id: "33944869-9f59-452c-8b15-9cba28d192b8", name: "LIGHT LINE® Crossing" },
  { id: "d60a5175-c7eb-448b-8e29-bc427aa03cba", name: "LIGHT LINE® Infinity Select" },
  { id: "edecb5ca-5d04-4c8f-b2c7-a4c7b92cbc5e", name: "LIGHT LINE® Laser Seamless" },
  { id: "21bdd6a1-e9a6-46a5-b385-a516c471e1da", name: "LIGHT LINE® Laser TS" },
  { id: "f61ba565-7569-4c13-a237-8490ebdde7d0", name: "LIGHT LINE® Laser/385" },
  { id: "459a3564-c6de-49d2-811d-a6586b76d3d2", name: "LIGHT LINE® Morning Dew Select" },
  { id: "f0fba827-b5e0-4db7-b581-bbbfa5efe3ab", name: "LIGHT LINE® Over" },
  { id: "ffc4387e-f091-4aee-9d2c-1941ac10ffc4", name: "LIGHT LINE® Reflex TS" },
  { id: "04233ddf-3e08-4a89-beac-282bad501fd1", name: "LIGHT LINE® Reflex/385" },
  { id: "fada416b-13b6-4b11-8d40-1293780040e9", name: "LIGHT LINE® Reptile Select" },
  { id: "e84bc5b4-6371-4eca-93c5-471c5e665389", name: "LIGHT LINE® SB Arrows Select" },
  { id: "5785b06e-b1b6-4c15-a98d-ca112c457e47", name: "LIGHT LINE® SB Borg Select" },
  { id: "76d41cb7-8034-4358-8ca9-8eff99006c01", name: "LIGHT LINE® SB Carbon Select" },
  { id: "706e5a13-9473-45a4-b312-421c30cd9d45", name: "LIGHT LINE® SB Confetti Select" },
  { id: "420d33bb-f74a-4b75-9c03-02c11afc6e94", name: "LIGHT LINE® SB Crosslight Seamless" },
  { id: "8d3fe407-5325-4d03-a4f4-707826232cca", name: "LIGHT LINE® SB Dots Select" },
  { id: "a80648a2-4bdb-437c-ac24-4488c94f8625", name: "LIGHT LINE® SB Dotscreen Select" },
  { id: "13b464b2-8464-478a-8661-58f14aa4c0d4", name: "LIGHT LINE® SB Frost Select" }
];

// 3) Create a filename from the material name
function makeFileNameFromName(originalName) {
  let fileName = originalName
    .replace(/[®]/g, '_')   // Replace '®' with underscore
    .replace(/\s+/g, '_')   // Replace spaces with underscores
    .replace(/[^a-z0-9äöüß_.-]/gi, ''); // Remove other problematic chars
  return fileName + '.webp';
}

// 4) Render the grid & handle clicks to change foil
const materialsGrid = document.getElementById('materials-grid');

allMaterials.forEach((mat) => {
  // Container
  const materialDiv = document.createElement('div');
  materialDiv.classList.add('material');

  // Thumbnail
  const img = document.createElement('img');
  img.alt = mat.name;
  img.src = `/assets/foils/${makeFileNameFromName(mat.name)}`;

  // Label
  const nameDiv = document.createElement('div');
  nameDiv.classList.add('material-name');
  nameDiv.textContent = mat.name;

  // On click, update the foil layer
  materialDiv.addEventListener('click', () => {
    // Update layers[0] with the new material ID
    layers[0].material = mat.id;
    dc.setLayers(dcController, layers);
    console.log('Foil changed to:', mat.name);
  });

  // Assemble
  materialDiv.appendChild(img);
  materialDiv.appendChild(nameDiv);
  materialsGrid.appendChild(materialDiv);
});
