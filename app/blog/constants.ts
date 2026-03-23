// app/blog/constants.ts
import { TreeDeciduous, Layers, Volume2, Hammer, Ruler, ShieldCheck, Box } from "lucide-react";

export const BLOG_POSTS: Record<string, any> = {
  "engineered-vs-hardwood-nashville": {
    title: "Engineered vs Hardwood Flooring: What's the Difference?",
    date: "Feb 26, 2026",
    author: "Ivy Team",
    icon: TreeDeciduous,
    excerpt: "At first glance, they look nearly identical, but they're built differently and perform differently in your home.",
    content: `
      <p>When shopping for wood flooring, one of the most common questions homeowners face is whether to choose solid hardwood or engineered flooring. [cite: 214] At first glance, they can look nearly identical, but they're built differently and perform differently in your home. [cite: 215] This guide will help you understand the key differences including their construction, durability, moisture tolerance, and installation methods. [cite: 216]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">What Each Flooring Type Is</h2>
      <h3 class="text-xl font-semibold mt-6 mb-2">Solid Hardwood Flooring</h3>
      <p>Solid hardwood is made from a single piece of wood milled from a tree. [cite: 220] Each plank is typically three-quarters of an inch thick and is 100% natural wood from top to bottom. [cite: 221] Because it's solid wood throughout, it can be sanded and refinished multiple times over its lifespan. [cite: 222]</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">Engineered Flooring</h3>
      <p>Engineered flooring has a layered construction. The top layer is real hardwood (called a wear layer or veneer), typically between 1 to 6 millimeters thick. [cite: 224] Beneath this are multiple layers of plywood or high-density fiberboard, stacked and glued together in cross-grain patterns for stability. [cite: 225] The top surface is genuine hardwood—you're walking on real oak, maple, or walnut. [cite: 227]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Key Structural Differences</h2>
      <p><strong>Construction:</strong> Solid is one continuous piece of wood; Engineered is multiple layers bonded together with real hardwood on top. [cite: 230, 231]</p>
      <p><strong>Thickness:</strong> Solid is typically 3/4 inch thick. [cite: 233] Engineered varies from 3/8 to 3/4 inch total thickness. [cite: 234]</p>
      <p><strong>Dimensional Stability:</strong> The layered construction of engineered flooring makes it more dimensionally stable than solid hardwood, meaning it's less likely to expand, contract, or warp with changes in humidity. [cite: 236, 237]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Moisture Tolerance</h2>
      <p>Solid hardwood is highly sensitive to moisture. In humid conditions, the wood swells and can cup or buckle; in dry conditions, it shrinks and can create gaps. [cite: 242, 243, 244] Engineered flooring's layered construction resists moisture-related movement much better, making it suitable for basements and concrete slabs. [cite: 247, 249]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Refinishing Capability</h2>
      <p>Solid hardwood can be refinished five to seven times or more, potentially lasting 50 to 100 years. [cite: 252, 254] Engineered flooring can be refinished, but the frequency depends on the wear layer thickness. A thick wear layer (4-6mm) may allow for 1-3 refinishes. [cite: 256, 257]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Side-by-Side Comparison</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border-collapse border border-border">
          <thead>
            <tr class="bg-secondary/50">
              <th class="border border-border p-2">Feature</th>
              <th class="border border-border p-2">Solid Hardwood</th>
              <th class="border border-border p-2">Engineered Flooring</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-border p-2">Moisture Tolerance</td><td class="border border-border p-2">Low</td><td class="border border-border p-2">Better</td></tr>
            <tr><td class="border border-border p-2">Refinishing</td><td class="border border-border p-2">5–7+ times</td><td class="border border-border p-2">0–3 times</td></tr>
            <tr><td class="border border-border p-2">Typical Lifespan</td><td class="border border-border p-2">50–100+ years</td><td class="border border-border p-2">20–40 years</td></tr>
          </tbody>
        </table>
      </div>
    `
  },
  "engineered-installation-guide": {
    title: "Installation Guide: Engineered Flooring",
    date: "Feb 26, 2026",
    author: "Ivy Team",
    icon: Layers,
    excerpt: "Engineered flooring offers more installation flexibility than solid hardwood, making it a popular choice for a wider range of applications.",
    content: `
      [cite_start]<p>Engineered flooring offers more installation flexibility than solid hardwood, making it a popular choice for a wider range of applications[cite: 1378]. [cite_start]Whether you're installing over concrete, in a basement, or simply want a faster installation process, engineered flooring provides multiple options to fit your specific situation[cite: 1379].</p>
      
      [cite_start]<p>This guide covers everything you need to know about installing engineered flooring, including the three main installation methods, preparation requirements, and step-by-step instructions[cite: 1380].</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Why Engineered Flooring Installation is Different</h2>
      [cite_start]<p>The cross-grain plywood core makes engineered flooring more dimensionally stable, meaning it's less affected by moisture and temperature changes[cite: 1384]. [cite_start]This stability allows engineered flooring to be installed using three different methods—nail-down, glue-down, or floating—while solid hardwood is limited to nail-down or glue-down only[cite: 1385].</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Pre-Installation Preparation</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">Acclimation Period</h3>
      [cite_start]<p>While engineered flooring is more stable, it still contains real wood and needs to acclimate for a minimum of 48 to 72 hours (3 to 5 days is recommended)[cite: 1390, 1393].</p>
      <ul class="list-disc pl-6 space-y-2">
        [cite_start]<li><strong>Storage:</strong> Store boxes in the room where the flooring will be installed[cite: 1394].</li>
        [cite_start]<li><strong>Climate Control:</strong> Maintain 65 to 75°F and 30 to 50% relative humidity[cite: 1396].</li>
        [cite_start]<li><strong>Moisture Check:</strong> Use a moisture meter to verify flooring and subfloor are within 2 to 4% of each other[cite: 1397].</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">Subfloor Requirements</h3>
      [cite_start]<p><strong>Wood Subfloors:</strong> Must be clean, dry, flat, and structurally sound with moisture below 12%[cite: 1402, 1404].</p>
      [cite_start]<p><strong>Concrete Subfloors:</strong> Must be fully cured (60+ days) with moisture below 3 lbs per 1,000 sq ft[cite: 1406, 1407]. [cite_start]A moisture barrier is required[cite: 1409].</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Three Installation Methods</h2>
      
      <h3 class="text-xl font-semibold mt-6 mb-2">1. Floating Installation</h3>
      [cite_start]<p>The fastest and easiest method where planks click or lock together and rest on top of an underlayment without being attached to the subfloor[cite: 1422].</p>
      <ul class="list-disc pl-6 space-y-2">
        [cite_start]<li><strong>Best for:</strong> Concrete, basements, condos, and DIY projects[cite: 1425, 1426, 1427].</li>
        [cite_start]<li><strong>Pros:</strong> No adhesive cure time or specialized tools; easier to replace planks[cite: 1430, 1431, 1433].</li>
        [cite_start]<li><strong>Cons:</strong> Can feel slightly less solid or produce a hollow sound[cite: 1435, 1436].</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">2. Glue-Down Installation</h3>
      [cite_start]<p>Planks are adhered directly to the subfloor using flooring adhesive, creating a permanent bond[cite: 1438].</p>
      <ul class="list-disc pl-6 space-y-2">
        [cite_start]<li><strong>Best for:</strong> Concrete subfloors and large open areas where stability is prioritized[cite: 1440, 1441].</li>
        [cite_start]<li><strong>Pros:</strong> Most solid/stable feel; quieter than floating; works with radiant heat[cite: 1444, 1445, 1446].</li>
        [cite_start]<li><strong>Cons:</strong> Labor intensive; requires 12-24 hour cure time; permanent and difficult to remove[cite: 1448, 1449, 1450].</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-2">3. Nail-Down Installation</h3>
      <p>Secured with a pneumatic flooring nailer. [cite_start]Only suitable for flooring 3/8" or thicker[cite: 1453, 1454].</p>
      <ul class="list-disc pl-6 space-y-2">
        [cite_start]<li><strong>Best for:</strong> Wood subfloors and traditional hardwood feel[cite: 1456, 1457].</li>
        [cite_start]<li><strong>Pros:</strong> Solid/permanent; walk on immediately; faster than glue-down for large areas[cite: 1459, 1460, 1461].</li>
        [cite_start]<li><strong>Cons:</strong> Requires specialized equipment; only for wood subfloors[cite: 1463, 1464].</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Step-by-Step Floating Installation</h2>
      <p><strong>Step 1: Install Underlayment.</strong> Roll out across the subfloor. [cite_start]Butt seams together and seal with tape[cite: 1469, 1470].</p>
      [cite_start]<p><strong>Step 2: Plan the Layout.</strong> Ensure the last row is not narrower than 2 inches[cite: 1474].</p>
      [cite_start]<p><strong>Step 3: First Row.</strong> Use spacers for a 1/4 to 1/2 inch expansion gap[cite: 1477].</p>
      <p><strong>Step 4: Click-Lock Technique.</strong> Angle the plank into the previous row and lower flat. [cite_start]Use a tapping block for gaps—never strike planks directly[cite: 1485, 1490, 1491].</p>
      [cite_start]<p><strong>Step 5: Final Row.</strong> Use a pull bar to draw the final row tight while maintaining the expansion gap[cite: 1499].</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Common Installation Mistakes to Avoid</h2>
      <ul class="list-disc pl-6 space-y-2">
        <li><strong>Insufficient Expansion Gaps:</strong> Even stable engineered wood needs space. [cite_start]Minimum 1/4" required[cite: 1540, 1541].</li>
        [cite_start]<li><strong>Attaching Trim to the Floor:</strong> Baseboards must be attached to the wall only, or the floor cannot expand/contract freely[cite: 1543, 1544].</li>
        [cite_start]<li><strong>Poor Underlayment:</strong> Overlapping seams creates high spots that telegraph through the floor[cite: 1546].</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
      <p><strong>Can I install engineered flooring in a basement?</strong> Yes, its layered construction resists moisture better than solid hardwood. [cite_start]Use floating installation with a moisture barrier[cite: 1564, 1565].</p>
      <p><strong>Do I need underlayment?</strong> Required for floating installations. [cite_start]Not used for glue-down or nail-down[cite: 1567, 1568].</p>
      <p><strong>How soon can I walk on it?</strong> Immediately for floating/nail-down. [cite_start]Wait 12-24 hours for glue-down[cite: 1573, 1574].</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      [cite_start]<p>Engineered flooring's installation flexibility makes it suitable for a wider range of applications than solid hardwood[cite: 1585]. [cite_start]By understanding the three installation methods and following manufacturer guidelines, you can enjoy beautiful, durable flooring for decades[cite: 1587].</p>
    `
  },
  "hardwood-maintenance-guide": {
    title: "Hardwood Floor Maintenance Guide",
    date: "Feb 26, 2026",
    author: "Ivy Team",
    icon: Hammer,
    excerpt: "Preserve your investment with daily cleaning routines and periodic professional maintenance.",
    content: `
      <p>The finish is the protective layer on top of the wood that resists scratches and wear. [cite: 342] Proper maintenance focuses on preserving this finish. [cite: 343]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Daily and Weekly Cleaning</h2>
      <p>Sweep daily with a soft-bristle broom to remove dirt and grit that act like sandpaper underfoot. [cite: 357, 360] Once a week, use a hardwood-specific cleaner and a microfiber mop. [cite: 362, 366]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">What to Avoid</h2>
      <p>Never use a soaking wet mop or steam cleaners, as heat and moisture can warp wood. [cite: 369, 371] Avoid vinegar, ammonia, or oil soaps, which leave residue and dull the finish. [cite: 372, 373]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Buffing and Recoating</h2>
      <p>This procedure refreshes the finish without sanding to bare wood. [cite: 395] It is recommended every 5 to 7 years. [cite: 409] If water droplets soak in rather than bead up, your finish is compromised. [cite: 407]</p>
    `
  },
  "hardwood-restoration-guide": {
    title: "Hardwood Floor Restoration Guide",
    date: "Feb 26, 2026",
    author: "Ivy Team",
    icon: Ruler,
    excerpt: "Deep scratches, water damage, and decades of wear can be erased through full restoration.",
    content: `
      <p>Solid hardwood can be completely restored through refinishing, bringing it back to like-new condition. [cite: 514] This involves sanding the floor to bare wood, removing a thin layer of wood, and applying new stain and finish. [cite: 533]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">The Refinishing Process</h2>
      <ol class="list-decimal pl-6 space-y-4">
        <li><strong>Sanding:</strong> Multiple passes are done using progressively finer grits (typically 36-40, then 60-80, then 100-120). [cite: 587, 589]</li>
        <li><strong>Staining:</strong> Optional step to change the color or enhance natural wood tone. [cite: 605]</li>
        <li><strong>Finishing:</strong> Typically 3 to 4 coats of polyurethane are applied for residential protection. [cite: 626]</li>
      </ol>

      <h2 class="text-2xl font-bold mt-8 mb-4">Curing and Care</h2>
      <p>Wait 24 hours for light foot traffic (socks only). [cite: 630] Normal traffic can resume in 48-72 hours, but wait 30 days before placing area rugs. [cite: 631, 634]</p>
    `
  },
  "soundproof-flooring-guide": {
    title: "Soundproof Flooring: Buying & Installation Guide",
    date: "Feb 26, 2026",
    author: "Ivy Team",
    icon: Volume2,
    excerpt: "Minimize noise transmission between floors in multi-level Nashville homes and condos.",
    content: `
      <p>Soundproof flooring systems work by absorbing vibrations and preventing sound waves from traveling through the floor structure. [cite: 1450]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Understanding Sound Ratings</h2>
      <ul class="space-y-4">
        <li><strong>IIC (Impact Insulation Class):</strong> Measures footstep noise. Aim for 50+ for residential use; 65+ is excellent. [cite: 1468, 1470]</li>
        <li><strong>STC (Sound Transmission Class):</strong> Measures airborne noise like voices or TV. [cite: 1472]</li>
      </ul>

      <h2 class="text-2xl font-bold mt-8 mb-4">Best Materials and Installation</h2>
      <p>Cork is one of the best natural insulators. [cite: 1482] For the best soundproofing, use a <strong>floating installation</strong>, which helps decouple the flooring from the structure. [cite: 1518] Nailing is the worst method as fasteners create direct pathways for vibrations. [cite: 1521]</p>
    `
  },
  "lvp-lvt-laminate-buying-guide": {
    title: "LVP, LVT, and Laminate Buying Guide",
    date: "Feb 26, 2026",
    author: "Ivy Team",
    icon: Box,
    excerpt: "Understand the differences in water resistance, durability, and feel between synthetic flooring options.",
    content: `
      <p>LVP, LVT, and laminate offer natural looks at more affordable prices while resisting scratches better than hardwood. [cite: 1233]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">The Critical Difference: Waterproof vs. Water-Resistant</h2>
      <p><strong>LVP and LVT are 100% Waterproof.</strong> They are made from synthetic materials that don't absorb water, making them ideal for full bathrooms and basements. [cite: 1264, 1265, 1267]</p>
      <p><strong>Laminate is Water-Resistant.</strong> Its wood-fiber core can swell and warp if exposed to standing water for too long. [cite: 1274, 1275] Affected planks must be replaced if they swell. [cite: 1276]</p>

      <h2 class="text-2xl font-bold mt-8 mb-4">Comparison Summary</h2>
      <div class="overflow-x-auto my-6">
        <table class="min-w-full border-collapse border border-border">
          <thead>
            <tr class="bg-secondary/50">
              <th class="border border-border p-2">Feature</th>
              <th class="border border-border p-2">LVP/LVT</th>
              <th class="border border-border p-2">Laminate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-border p-2">Water Resistance</td><td class="border border-border p-2">100% Waterproof</td><td class="border border-border p-2">Water-Resistant</td></tr>
            <tr><td class="border border-border p-2">Feel Underfoot</td><td class="border border-border p-2">Softer, cushioned</td><td class="border border-border p-2">Firmer, rigid</td></tr>
            <tr><td class="border border-border p-2">Typical Cost</td><td class="border border-border p-2">Moderate</td><td class="border border-border p-2">Budget-friendly</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
};