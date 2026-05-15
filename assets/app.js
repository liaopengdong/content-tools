const TOOLS = {"word-counter": {"slug": "word-counter", "title": "Word Counter", "desc": "Count words, characters, sentences, paragraphs, and reading time.", "category": "Writing", "kind": "wordCounter", "fields": [{"id": "text", "label": "Text", "type": "textarea", "value": "Paste your article, product copy, or notes here."}], "manual": false}, "case-converter": {"slug": "case-converter", "title": "Case Converter", "desc": "Convert text to title case, sentence case, uppercase, lowercase, and slug case.", "category": "Formatting", "kind": "caseConverter", "fields": [{"id": "text", "label": "Text", "type": "textarea", "value": "a practical guide to online tools"}], "manual": false}, "slug-generator": {"slug": "slug-generator", "title": "Slug Generator", "desc": "Create clean URL slugs from titles and headings.", "category": "SEO Content", "kind": "slugGenerator", "fields": [{"id": "title", "label": "Title", "type": "text", "value": "A Practical Guide to Online Tools"}], "manual": false}, "meta-description-helper": {"slug": "meta-description-helper", "title": "Meta Description Helper", "desc": "Check length and preview a meta description for search results.", "category": "SEO Content", "kind": "metaHelper", "fields": [{"id": "text", "label": "Meta description", "type": "textarea", "value": "Free browser-based tools that help you prepare content faster and more accurately."}], "manual": false}, "title-length-checker": {"slug": "title-length-checker", "title": "Title Length Checker", "desc": "Check title length for SEO, social previews, and readability.", "category": "SEO Content", "kind": "titleChecker", "fields": [{"id": "title", "label": "Title", "type": "text", "value": "A Practical Guide to Better Content Tools"}], "manual": false}, "subtitle-cleaner": {"slug": "subtitle-cleaner", "title": "Subtitle Cleaner", "desc": "Clean timestamps, numbering, and extra spaces from subtitle transcripts.", "category": "Publishing", "kind": "subtitleCleaner", "fields": [{"id": "text", "label": "Subtitle text", "type": "textarea", "value": "1\n00:00:01,000 --> 00:00:03,000\nHello world\n\n2\n00:00:04,000 --> 00:00:06,000\nThis is a transcript."}], "manual": false}, "markdown-cleaner": {"slug": "markdown-cleaner", "title": "Markdown Cleaner", "desc": "Normalize markdown spacing and remove repeated blank lines.", "category": "Formatting", "kind": "markdownCleaner", "fields": [{"id": "text", "label": "Markdown", "type": "textarea", "value": "# Title\n\n\n\nParagraph with spaces.   \n\n\nAnother paragraph."}], "manual": false}, "reading-time": {"slug": "reading-time", "title": "Reading Time Calculator", "desc": "Estimate reading time from word count and reading speed.", "category": "Writing", "kind": "readingTime", "fields": [{"id": "text", "label": "Text", "type": "textarea", "value": "Paste your article here."}, {"id": "wpm", "label": "Words per minute", "type": "number", "value": 200}], "manual": false}, "headline-ideas": {"slug": "headline-ideas", "title": "Headline Ideas Generator", "desc": "Generate practical headline variations from a topic.", "category": "Writing", "kind": "headlineIdeas", "fields": [{"id": "topic", "label": "Topic", "type": "text", "value": "calculate freelance rates"}], "manual": false}, "hashtag-generator": {"slug": "hashtag-generator", "title": "Hashtag Generator", "desc": "Create simple social hashtags from keywords.", "category": "Publishing", "kind": "hashtags", "fields": [{"id": "keywords", "label": "Keywords", "type": "textarea", "value": "small business, productivity, tools"}], "manual": false}, "text-deduplicator": {"slug": "text-deduplicator", "title": "Text Deduplicator", "desc": "Remove duplicate lines while preserving order.", "category": "Formatting", "kind": "dedupe", "fields": [{"id": "text", "label": "Lines", "type": "textarea", "value": "apple\nbanana\napple\norange\nbanana"}], "manual": false}, "utm-builder": {"slug": "utm-builder", "title": "UTM Builder", "desc": "Build campaign tracking URLs for content promotion.", "category": "Publishing", "kind": "utmBuilder", "fields": [{"id": "url", "label": "URL", "type": "text", "value": "https://example.com/page"}, {"id": "source", "label": "Source", "type": "text", "value": "devto"}, {"id": "medium", "label": "Medium", "type": "text", "value": "referral"}, {"id": "campaign", "label": "Campaign", "type": "text", "value": "tools-launch"}, {"id": "content", "label": "Content", "type": "text", "value": ""}], "manual": false}, "character-counter": {"slug": "character-counter", "title": "Character Counter", "desc": "Count characters, words, sentences, and paragraphs.", "category": "Writing", "kind": "wordCounter", "fields": [{"id": "text", "label": "Text", "type": "textarea", "value": "Paste your article, product copy, or notes here."}], "manual": false}, "title-case-converter": {"slug": "title-case-converter", "title": "Title Case Converter", "desc": "Convert text into title case and other common writing formats.", "category": "Formatting", "kind": "caseConverter", "fields": [{"id": "text", "label": "Text", "type": "textarea", "value": "a practical guide to online tools"}], "manual": false}, "sentence-case-converter": {"slug": "sentence-case-converter", "title": "Sentence Case Converter", "desc": "Convert text into sentence case for cleaner copy.", "category": "Formatting", "kind": "caseConverter", "fields": [{"id": "text", "label": "Text", "type": "textarea", "value": "a practical guide to online tools"}], "manual": false}, "url-slug-maker": {"slug": "url-slug-maker", "title": "URL Slug Maker", "desc": "Create clean URL slugs from page titles and article ideas.", "category": "SEO Content", "kind": "slugGenerator", "fields": [{"id": "title", "label": "Title", "type": "text", "value": "A Practical Guide to Online Tools"}], "manual": false}, "seo-description-checker": {"slug": "seo-description-checker", "title": "SEO Description Checker", "desc": "Check meta description length and preview text.", "category": "SEO Content", "kind": "metaHelper", "fields": [{"id": "text", "label": "Meta description", "type": "textarea", "value": "Free browser-based tools that help you prepare content faster and more accurately."}], "manual": false}, "blog-title-length-checker": {"slug": "blog-title-length-checker", "title": "Blog Title Length Checker", "desc": "Check title length for search and social snippets.", "category": "SEO Content", "kind": "titleChecker", "fields": [{"id": "title", "label": "Title", "type": "text", "value": "A Practical Guide to Better Content Tools"}], "manual": false}, "transcript-cleaner": {"slug": "transcript-cleaner", "title": "Transcript Cleaner", "desc": "Clean subtitle timestamps and transcript numbering.", "category": "Publishing", "kind": "subtitleCleaner", "fields": [{"id": "text", "label": "Subtitle text", "type": "textarea", "value": "1\n00:00:01,000 --> 00:00:03,000\nHello world\n\n2\n00:00:04,000 --> 00:00:06,000\nThis is a transcript."}], "manual": false}, "duplicate-line-remover": {"slug": "duplicate-line-remover", "title": "Duplicate Line Remover", "desc": "Remove repeated lines while keeping the original order.", "category": "Formatting", "kind": "dedupe", "fields": [{"id": "text", "label": "Lines", "type": "textarea", "value": "apple\nbanana\napple\norange\nbanana"}], "manual": false}, "campaign-url-builder": {"slug": "campaign-url-builder", "title": "Campaign URL Builder", "desc": "Build UTM-tagged URLs for publishing and promotion.", "category": "Publishing", "kind": "utmBuilder", "fields": [{"id": "url", "label": "URL", "type": "text", "value": "https://example.com/page"}, {"id": "source", "label": "Source", "type": "text", "value": "devto"}, {"id": "medium", "label": "Medium", "type": "text", "value": "referral"}, {"id": "campaign", "label": "Campaign", "type": "text", "value": "tools-launch"}, {"id": "content", "label": "Content", "type": "text", "value": ""}], "manual": false}, "article-reading-time": {"slug": "article-reading-time", "title": "Article Reading Time", "desc": "Estimate reading and speaking time for article drafts.", "category": "Writing", "kind": "readingTime", "fields": [{"id": "text", "label": "Text", "type": "textarea", "value": "Paste your article here."}, {"id": "wpm", "label": "Words per minute", "type": "number", "value": 200}], "manual": false}, "social-hashtag-maker": {"slug": "social-hashtag-maker", "title": "Social Hashtag Maker", "desc": "Create hashtags from keywords and content topics.", "category": "Publishing", "kind": "hashtags", "fields": [{"id": "keywords", "label": "Keywords", "type": "textarea", "value": "small business, productivity, tools"}], "manual": false}, "headline-variation-generator": {"slug": "headline-variation-generator", "title": "Headline Variation Generator", "desc": "Generate practical headline options from a topic.", "category": "Writing", "kind": "headlineIdeas", "fields": [{"id": "topic", "label": "Topic", "type": "text", "value": "calculate freelance rates"}], "manual": false}};

const byId = (id) => document.getElementById(id);
const money = (v) => Number.isFinite(v) ? new Intl.NumberFormat("en-US", {style:"currency", currency:"USD", maximumFractionDigits:2}).format(v) : "$0.00";
const num = (v) => Number.isFinite(v) ? new Intl.NumberFormat("en-US", {maximumFractionDigits:2}).format(v) : "0";
const pct = (v) => Number.isFinite(v) ? `${v.toFixed(2)}%` : "0.00%";
const escapeHtml = (s) => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
const readFields = (fields) => {
  const out = {};
  fields.forEach(f => {
    const el = byId(f.id);
    if (!el) return;
    if (f.type === "file") out[f.id] = el.files?.[0] || null;
    else if (f.type === "textarea" || f.type === "text" || f.type === "select") out[f.id] = el.value;
    else out[f.id] = Number(el.value || 0);
  });
  return out;
};
const fieldHtml = (f) => {
  if (f.type === "textarea") return `<div class="field wide"><label for="${f.id}">${f.label}</label><textarea id="${f.id}" placeholder="${f.placeholder || ""}">${f.value || ""}</textarea></div>`;
  if (f.type === "select") return `<div class="field"><label for="${f.id}">${f.label}</label><select id="${f.id}">${f.options.map(o => `<option value="${o[0]}">${o[1]}</option>`).join("")}</select></div>`;
  if (f.type === "file") return `<div class="field wide"><label for="${f.id}">${f.label}</label><input id="${f.id}" type="file" accept="${f.accept || ""}"></div>`;
  return `<div class="field"><label for="${f.id}">${f.label}</label><input id="${f.id}" type="${f.type || "number"}" step="any" value="${f.value ?? ""}" placeholder="${f.placeholder || ""}"></div>`;
};
let generatedExtra = "";
const show = (rows, extra="") => {
  byId("results").innerHTML = rows.map(([k,v]) => `<div class="result-card"><span>${escapeHtml(k)}</span><strong>${escapeHtml(v)}</strong></div>`).join("") + (extra || generatedExtra);
  generatedExtra = "";
};
const copyText = () => navigator.clipboard?.writeText(byId("results").innerText);

async function loadImage(file) {
  if (!file) throw new Error("Choose an image file, then select Run tool.");
  const img = new Image();
  img.src = URL.createObjectURL(file);
  await img.decode();
  return img;
}
function canvasFromImage(img, w=img.width, h=img.height, rotate=0, gray=false, bg="#ffffff") {
  const c = document.createElement("canvas");
  const swap = rotate === 90 || rotate === 270;
  c.width = swap ? h : w;
  c.height = swap ? w : h;
  const ctx = c.getContext("2d");
  ctx.fillStyle = bg;
  ctx.fillRect(0,0,c.width,c.height);
  if (rotate) {
    ctx.translate(c.width/2, c.height/2);
    ctx.rotate(rotate * Math.PI / 180);
    ctx.drawImage(img, -w/2, -h/2, w, h);
  } else ctx.drawImage(img, 0, 0, w, h);
  if (gray) {
    const data = ctx.getImageData(0,0,c.width,c.height);
    for (let i=0;i<data.data.length;i+=4) {
      const g = Math.round(data.data[i]*0.299 + data.data[i+1]*0.587 + data.data[i+2]*0.114);
      data.data[i]=data.data[i+1]=data.data[i+2]=g;
    }
    ctx.putImageData(data,0,0);
  }
  return c;
}
function downloadCanvas(c, type="image/png", name="image.png", quality=.85) {
  const url = c.toDataURL(type, quality);
  generatedExtra = `<div class="result-card"><span>Preview</span><strong><a class="button" href="${url}" download="${name}">Download ${name}</a></strong><img class="preview-image" src="${url}" alt="Generated output preview"></div>`;
}

const calculator = {
  jsonFormatter: v => { try { const o=JSON.parse(v.input); return [["Valid JSON","Yes"],["Characters",num(v.input.length)],["Formatted", JSON.stringify(o,null,2)],["Minified", JSON.stringify(o)]]; } catch(e){ return [["Valid JSON","No"],["Error",e.message]]; } },
  jsonToCsv: v => { try { const arr=JSON.parse(v.input); const rows=Array.isArray(arr)?arr:[arr]; const keys=[...new Set(rows.flatMap(o=>Object.keys(o||{})))]; const csv=[keys.join(","),...rows.map(o=>keys.map(k=>`"${String(o?.[k]??"").replaceAll('"','""')}"`).join(","))].join("\n"); return [["Rows",num(rows.length)],["Columns",num(keys.length)],["CSV",csv]]; } catch(e){ return [["Error",e.message]]; } },
  regexTester: v => { try { const re=new RegExp(v.pattern,v.flags); const m=[...v.text.matchAll(re)]; return [["Matches",num(m.length)],["Matched text",m.map(x=>x[0]).join("\n") || "No matches"]]; } catch(e){ return [["Error",e.message]]; } },
  timestampConverter: v => { const d = v.mode==="unix" ? new Date(Number(v.value)*1000) : new Date(v.value); return [["Local time",d.toString()],["ISO",d.toISOString?.() || "Invalid date"],["Unix seconds",Number.isFinite(d.getTime())?Math.floor(d.getTime()/1000).toString():"Invalid date"]]; },
  base64: v => { try { return [["Encoded",btoa(unescape(encodeURIComponent(v.text)))],["Decoded",decodeURIComponent(escape(atob(v.text)))] ]; } catch { return [["Encoded",btoa(unescape(encodeURIComponent(v.text)))],["Decoded","Input is not valid Base64"]]; } },
  urlCodec: v => [["Encoded",encodeURIComponent(v.text)],["Decoded",decodeURIComponent(v.text)]],
  jwtDecoder: v => { const p=v.token.split("."); const dec=s=>JSON.stringify(JSON.parse(atob(s.replace(/-/g,"+").replace(/_/g,"/"))),null,2); try { return [["Header",dec(p[0])],["Payload",dec(p[1])],["Signature present",p[2]?"Yes":"No"]]; } catch(e){ return [["Error","Invalid JWT format"]]; } },
  uuidGenerator: v => [["UUIDs",Array.from({length:Math.max(1,Math.min(50,v.count||5))},()=>crypto.randomUUID()).join("\n")]],
  hashGenerator: async v => { const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(v.text)); return [["SHA-256",[...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")]]; },
  queryParser: v => { const q=v.query.replace(/^\?/,""); const params=[...new URLSearchParams(q).entries()]; return [["Parameters",num(params.length)],["Parsed",params.map(([k,val])=>`${k}: ${val}`).join("\n") || "No parameters"]]; },
  htmlEntities: v => [["Escaped",escapeHtml(v.text)],["Unescaped",v.text.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'")]],
  apiFormatter: v => calculator.jsonFormatter({input:v.payload}),

  aspectRatio: v => { const ratio=v.width/v.height; return [["Aspect ratio",`${num(v.width)}:${num(v.height)} (${ratio.toFixed(4)})`],["New height from width",num(v.newWidth/ratio)],["New width from height",num(v.newHeight*ratio)]]; },
  favicon: v => { const c=document.createElement("canvas"); c.width=c.height=512; const ctx=c.getContext("2d"); ctx.fillStyle=v.bg||"#1f7a4d"; ctx.fillRect(0,0,512,512); ctx.fillStyle=v.color||"#ffffff"; ctx.font="bold 190px Georgia"; ctx.textAlign="center"; ctx.textBaseline="middle"; ctx.fillText((v.text||"BH").slice(0,3).toUpperCase(),256,270); downloadCanvas(c,"image/png","favicon.png"); return [["Generated","Download link ready"],["Size","512 x 512"]]; },
  socialSize: async v => { const img=await loadImage(v.image); const r=img.width/img.height; return [["Dimensions",`${img.width} x ${img.height}`],["Aspect ratio",r.toFixed(3)],["Open Graph 1200x630 fit",Math.abs(r-1200/630)<.08?"Good fit":"May crop"],["Square social fit",Math.abs(r-1)<.08?"Good fit":"May crop"]]; },
  imageMeta: async v => { const img=await loadImage(v.image); return [["File name",v.image.name],["File size",`${(v.image.size/1024).toFixed(1)} KB`],["Type",v.image.type],["Dimensions",`${img.width} x ${img.height}`],["Aspect ratio",(img.width/img.height).toFixed(4)]]; },
  imageResize: async v => { const img=await loadImage(v.image); const c=canvasFromImage(img, v.width||img.width, v.height||img.height); downloadCanvas(c,"image/png","resized-image.png"); return [["Output","Download link ready"],["Dimensions",`${c.width} x ${c.height}`]]; },
  imageCompress: async v => { const img=await loadImage(v.image); const c=canvasFromImage(img); downloadCanvas(c,"image/jpeg","compressed-image.jpg",(v.quality||80)/100); return [["Output","Download link ready"],["Quality",`${v.quality}%`]]; },
  imageWebp: async v => { const img=await loadImage(v.image); const c=canvasFromImage(img); downloadCanvas(c,"image/webp","converted-image.webp",(v.quality||85)/100); return [["Output","Download link ready"],["Quality",`${v.quality}%`]]; },
  imageJpg: async v => { const img=await loadImage(v.image); const c=canvasFromImage(img,img.width,img.height,0,false,v.bg||"#ffffff"); downloadCanvas(c,"image/jpeg","converted-image.jpg",.9); return [["Output","Download link ready"],["Background",v.bg||"#ffffff"]]; },
  imagePng: async v => { const img=await loadImage(v.image); const c=canvasFromImage(img); downloadCanvas(c,"image/png","converted-image.png"); return [["Output","Download link ready"],["Dimensions",`${c.width} x ${c.height}`]]; },
  imageRotate: async v => { const img=await loadImage(v.image); const c=canvasFromImage(img,img.width,img.height,Number(v.degrees)); downloadCanvas(c,"image/png","rotated-image.png"); return [["Output","Download link ready"],["Rotation",`${v.degrees} degrees`]]; },
  imageGray: async v => { const img=await loadImage(v.image); const c=canvasFromImage(img,img.width,img.height,0,true); downloadCanvas(c,"image/png","grayscale-image.png"); return [["Output","Download link ready"],["Dimensions",`${c.width} x ${c.height}`]]; },
  imageColor: async v => { const img=await loadImage(v.image); const c=canvasFromImage(img); const d=c.getContext("2d").getImageData(Math.floor(c.width/2),Math.floor(c.height/2),1,1).data; const hex="#"+[d[0],d[1],d[2]].map(x=>x.toString(16).padStart(2,"0")).join(""); return [["Center HEX",hex],["Center RGB",`rgb(${d[0]}, ${d[1]}, ${d[2]})`]]; },

  wordCounter: v => { const words=(v.text.trim().match(/\b[\w'-]+\b/g)||[]).length; return [["Words",num(words)],["Characters",num(v.text.length)],["Sentences",num((v.text.match(/[.!?]+/g)||[]).length)],["Paragraphs",num(v.text.split(/\n\s*\n/).filter(Boolean).length)],["Reading time",`${Math.max(1,Math.ceil(words/200))} min`]]; },
  caseConverter: v => { const title=v.text.toLowerCase().replace(/\b\w/g,c=>c.toUpperCase()); const slug=v.text.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); return [["Title Case",title],["Sentence case",v.text.charAt(0).toUpperCase()+v.text.slice(1).toLowerCase()],["Uppercase",v.text.toUpperCase()],["Lowercase",v.text.toLowerCase()],["Slug",slug]]; },
  slugGenerator: v => [["Slug",v.title.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")],["Length",num(v.title.length)]],
  metaHelper: v => [["Characters",num(v.text.length)],["Status",v.text.length<120?"Too short":v.text.length>160?"Too long":"Good"],["Preview",v.text]],
  titleChecker: v => [["Characters",num(v.title.length)],["Estimated pixels",num(v.title.length*8.5)],["Status",v.title.length>60?"May truncate":"Good"]],
  subtitleCleaner: v => [["Cleaned transcript",v.text.replace(/^\d+\s*$/gm,"").replace(/\d{2}:\d{2}:\d{2}[,\.]\d{3}\s*-->\s*\d{2}:\d{2}:\d{2}[,\.]\d{3}/g,"").replace(/[ \t]+/g," ").replace(/\n{3,}/g,"\n\n").trim()]],
  markdownCleaner: v => [["Cleaned markdown",v.text.replace(/[ \t]+$/gm,"").replace(/\n{3,}/g,"\n\n").trim()]],
  readingTime: v => { const words=(v.text.trim().match(/\b[\w'-]+\b/g)||[]).length; return [["Words",num(words)],["Reading time",`${Math.max(1,Math.ceil(words/(v.wpm||200)))} min`],["Speaking time",`${Math.max(1,Math.ceil(words/140))} min`]]; },
  headlineIdeas: v => [["Ideas",[`How to ${v.topic} Without Wasting Time`,`A Practical Guide to ${v.topic}`,`${v.topic}: Common Mistakes and Better Options`,`What I Check Before ${v.topic}`,`${v.topic} Checklist for Beginners`].join("\n")]],
  hashtags: v => [["Hashtags",v.keywords.split(/[,\n]+/).map(x=>"#"+x.trim().toLowerCase().replace(/[^a-z0-9]+/g,"")).filter(x=>x.length>1).join(" ")]],
  dedupe: v => { const seen=new Set(); const lines=v.text.split(/\r?\n/).filter(l=>{const k=l.trim(); if(!k||seen.has(k)) return false; seen.add(k); return true;}); return [["Unique lines",lines.join("\n")],["Line count",num(lines.length)]]; },
  utmBuilder: v => { const u=new URL(v.url); [["utm_source",v.source],["utm_medium",v.medium],["utm_campaign",v.campaign],["utm_content",v.content]].forEach(([k,val])=>val&&u.searchParams.set(k,val)); return [["Campaign URL",u.toString()]]; },

  compoundInterest: v => { let bal=v.principal; const r=v.rate/100/v.compounds; for(let y=0;y<v.years;y++) for(let c=0;c<v.compounds;c++) bal=bal*(1+r)+v.monthly*12/v.compounds; return [["Future value",money(bal)],["Total contributions",money(v.principal+v.monthly*12*v.years)],["Estimated interest",money(bal-v.principal-v.monthly*12*v.years)]]; },
  loanPayoff: v => loanCalc(v.balance,v.rate,v.payment,v.extra),
  mortgage: v => { const r=v.rate/100/12,n=v.years*12,p=v.amount*r/(1-Math.pow(1+r,-n)); return [["Principal and interest",money(p)],["Estimated monthly total",money(p+v.tax/12+v.insurance/12)],["Total interest",money(p*n-v.amount)]]; },
  creditCard: v => loanCalc(v.balance,v.apr,v.payment,0),
  savingsGoal: v => { const months=v.months, need=(v.goal-v.current)/months; return [["Monthly savings needed",money(need)],["Weekly savings needed",money(need*12/52)],["Remaining target",money(v.goal-v.current)]]; },
  emergencyFund: v => [["Recommended fund",money(v.expenses*v.months)],["Current gap",money(Math.max(0,v.expenses*v.months-v.current))],["Coverage now",`${(v.current/v.expenses).toFixed(1)} months`]],
  retirement: v => calculator.compoundInterest({principal:v.current,monthly:v.monthly,rate:v.rate,years:v.years,compounds:12}),
  inflation: v => { const future=v.amount*Math.pow(1+v.rate/100,v.years); return [["Future cost",money(future)],["Buying power loss",money(future-v.amount)]]; },
  salaryHourly: v => [["Hourly rate",money(v.salary/(v.weeks*v.hours))],["Monthly pay",money(v.salary/12)],["Weekly pay",money(v.salary/v.weeks)]],
  hourlySalary: v => [["Annual salary",money(v.rate*v.hours*v.weeks)],["Monthly pay",money(v.rate*v.hours*v.weeks/12)],["Weekly pay",money(v.rate*v.hours)]],
  dti: v => [["DTI ratio",pct(v.debt/v.income*100)],["Status",v.debt/v.income>.43?"High":"Manageable"]],
  investmentReturn: v => { const gain=v.end-v.start+v.withdrawals-v.deposits; return [["Net gain",money(gain)],["ROI",pct(gain/(v.start+v.deposits)*100)],["Ending value",money(v.end)]]; },

  seoTitle: v => calculator.titleChecker({title:v.title}),
  seoMeta: v => calculator.metaHelper({text:v.description}),
  serpPreview: v => [["Preview",`${v.title}\n${v.url}\n${v.description}`],["Title length",num(v.title.length)],["Description length",num(v.description.length)]],
  robotsTester: v => { const blocked=v.rules.split(/\r?\n/).some(l=>l.toLowerCase().startsWith("disallow:") && v.path.startsWith(l.split(":").slice(1).join(":").trim())); return [["Result",blocked?"Potentially blocked":"Not blocked by simple rules"],["Path",v.path]]; },
  sitemapExtractor: v => { const urls=[...v.xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]); return [["URLs found",num(urls.length)],["URLs",urls.join("\n")]]; },
  canonicalChecker: v => [["Match",v.page.replace(/\/$/,"")===v.canonical.replace(/\/$/,"")?"Yes":"No"],["Page URL",v.page],["Canonical URL",v.canonical]],
  schemaGenerator: v => [["JSON-LD",JSON.stringify({"@context":"https://schema.org","@type":v.type,name:v.name,description:v.description,url:v.url},null,2)]],
  ogPreview: v => [["Preview",`${v.title}\n${v.url}\n${v.description}\nImage: ${v.image}`]],
  keywordDensity: v => { const words=(v.text.toLowerCase().match(/\b[\w'-]+\b/g)||[]); const kw=v.keyword.toLowerCase(); const count=words.filter(w=>w===kw).length; return [["Keyword count",num(count)],["Total words",num(words.length)],["Density",pct(count/words.length*100)]]; },
  slugChecker: v => { const words=v.slug.split("-").filter(Boolean); return [["Words",num(words.length)],["Characters",num(v.slug.length)],["Status",v.slug.length>75?"Long":"Good"]]; },
  hreflang: v => [["Tags",v.lines.split(/\r?\n/).map(line=>{const [lang,url]=line.split(",").map(x=>x?.trim()); return lang&&url?`<link rel="alternate" hreflang="${lang}" href="${url}">`:"";}).filter(Boolean).join("\n")]],
  faqSchema: v => { const pairs=v.text.split(/\n\s*\n/).map(b=>b.split(/\r?\n/)); return [["JSON-LD",JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:pairs.map(p=>({"@type":"Question",name:p[0]||"",acceptedAnswer:{"@type":"Answer",text:p.slice(1).join(" ")}}))},null,2)]]; }
};
function loanCalc(balance, rate, payment, extra=0){let b=balance, i=0, m=0, p=payment+extra; while(b>0.01&&m<1200){const interest=b*rate/100/12; i+=interest; b+=interest; b-=Math.min(p,b); m++; if(p<=interest) break;} return [["Payoff months",m>=1200?"More than 100 years":num(m)],["Total interest",money(i)],["Monthly payment",money(p)]];}
async function runTool() {
  const slug = document.body.dataset.tool;
  if (!slug || !TOOLS[slug]) return;
  const t = TOOLS[slug];
  byId("calculatorForm").innerHTML = t.fields.map(fieldHtml).join("");
  const run = async () => {
    try { const rows = await calculator[t.kind](readFields(t.fields)); show(rows); }
    catch (e) { show([["Action needed", e.message]]); }
  };
  byId("runTool")?.addEventListener("click", run);
  byId("calculatorForm").querySelectorAll("input,textarea,select").forEach(el => {
    if (!t.manual) {
      el.addEventListener("input", run);
      el.addEventListener("change", run);
    }
  });
  byId("copyResults")?.addEventListener("click", copyText);
  if (t.manual) show([["Ready", "Enter values, choose any required file, then select Run tool."]]);
  else run();
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(n => n.textContent = new Date().getFullYear());
  runTool();
});
