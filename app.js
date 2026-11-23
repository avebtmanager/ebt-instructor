'use strict';
/* ============ Marco de competencias (EASA AMC1 ORO.FC.231 / OACI Doc 9995 — numeración OB 0–8) ============ */
var COMP=[
 {k:'KNO',n:0,es:'Aplicación del conocimiento',en:'Application of knowledge',ob:[
  ['0.1','Demonstrates practical and applicable knowledge of limitations and systems and their interaction'],
  ['0.2','Demonstrates required knowledge of published operating instructions'],
  ['0.3','Demonstrates knowledge of the physical environment, the ATC environment and the operational infrastructure'],
  ['0.4','Demonstrates appropriate knowledge of applicable legislation'],
  ['0.5','Knows where to source required information'],
  ['0.6','Demonstrates a positive interest in acquiring knowledge'],
  ['0.7','Is able to apply knowledge effectively']]},
 {k:'APK',n:1,es:'Aplicación de procedimientos y cumplimiento normativo',en:'Application of procedures and compliance with regulations',ob:[
  ['1.1','Identifies where to find procedures and regulations'],
  ['1.2','Applies relevant operating instructions, procedures and techniques in a timely manner'],
  ['1.3','Follows SOPs unless a higher degree of safety dictates an appropriate deviation'],
  ['1.4','Operates aircraft systems and associated equipment correctly'],
  ['1.5','Monitors aircraft systems status'],
  ['1.6','Complies with applicable regulations'],
  ['1.7','Applies relevant procedural knowledge']]},
 {k:'COM',n:2,es:'Comunicación',en:'Communication',ob:[
  ['2.1','Determines that the recipient is ready and able to receive information'],
  ['2.2','Selects appropriately what, when, how and with whom to communicate'],
  ['2.3','Conveys messages clearly, accurately and concisely'],
  ['2.4','Confirms that the recipient demonstrates understanding of important information'],
  ['2.5','Listens actively and demonstrates understanding when receiving information'],
  ['2.6','Asks relevant and effective questions'],
  ['2.7','Uses appropriate escalation in communication to resolve identified deviations'],
  ['2.8','Uses and interprets non-verbal communication appropriately'],
  ['2.9','Adheres to standard radiotelephone phraseology and procedures'],
  ['2.10','Accurately reads, interprets, constructs and responds to datalink messages']]},
 {k:'FPA',n:3,es:'Gestión de la trayectoria: automatización',en:'Flight path management — automation',ob:[
  ['3.1','Controls the aircraft using automation with accuracy and smoothness as appropriate'],
  ['3.2','Monitors and detects deviations from the intended flight path and takes appropriate action'],
  ['3.3','Manages the flight path to achieve optimum operational performance'],
  ['3.4','Maintains the intended flight path using automation whilst managing other tasks and distractions'],
  ['3.5','Selects appropriate level and mode of automation in a timely manner'],
  ['3.6','Effectively monitors automation, including engagement and automatic mode transitions']]},
 {k:'FPM',n:4,es:'Gestión de la trayectoria: control manual',en:'Flight path management — manual control',ob:[
  ['4.1','Controls the aircraft using manual control with accuracy and smoothness as appropriate'],
  ['4.2','Monitors and detects deviations from the intended flight path and takes appropriate action'],
  ['4.3','Manually controls the aeroplane using the relationship between attitude, speed and thrust, and navigation signals or visual information'],
  ['4.4','Manages the flight path to achieve optimum operational performance'],
  ['4.5','Maintains the intended flight path during manual flight whilst managing other tasks and distractions'],
  ['4.6','Uses appropriate flight management and guidance systems, as installed and applicable'],
  ['4.7','Effectively monitors flight guidance systems including engagement and automatic mode transitions']]},
 {k:'LTW',n:5,es:'Liderazgo y trabajo en equipo',en:'Leadership and teamwork',ob:[
  ['5.1','Encourages team participation and open communication'],
  ['5.2','Demonstrates initiative and provides direction when required'],
  ['5.3','Engages others in planning'],
  ['5.4','Considers inputs from others'],
  ['5.5','Gives and receives feedback constructively'],
  ['5.6','Addresses and resolves conflicts and disagreements in a constructive manner'],
  ['5.7','Exercises decisive leadership when required'],
  ['5.8','Accepts responsibility for decisions and actions'],
  ['5.9','Carries out instructions when directed'],
  ['5.10','Applies effective intervention strategies to resolve identified deviations'],
  ['5.11','Manages cultural and language challenges, as applicable']]},
 {k:'PSD',n:6,es:'Resolución de problemas y toma de decisiones',en:'Problem solving and decision making',ob:[
  ['6.1','Identifies, assesses and manages threats and errors in a timely manner'],
  ['6.2','Seeks accurate and adequate information from appropriate sources'],
  ['6.3','Identifies and verifies what and why things have gone wrong, if appropriate'],
  ['6.4','Perseveres in working through problems whilst prioritising safety'],
  ['6.5','Identifies and considers appropriate options'],
  ['6.6','Applies appropriate and timely decision-making techniques'],
  ['6.7','Monitors, reviews and adapts decisions as required'],
  ['6.8','Adapts when faced with situations where no guidance or procedure exists'],
  ['6.9','Demonstrates resilience when encountering an unexpected event']]},
 {k:'SAW',n:7,es:'Conciencia situacional y gestión de la información',en:'Situation awareness and management of information',ob:[
  ['7.1','Monitors and assesses the state of the aeroplane and its systems'],
  ['7.2','Monitors and assesses the aeroplane’s energy state and its anticipated flight path'],
  ['7.3','Monitors and assesses the general environment as it may affect the operation'],
  ['7.4','Validates the accuracy of information and checks for gross errors'],
  ['7.5','Maintains awareness of the people involved in or affected by the operation and their capacity to perform as expected'],
  ['7.6','Develops effective contingency plans based upon potential risks associated with threats and errors'],
  ['7.7','Responds to indications of reduced situation awareness']]},
 {k:'WLM',n:8,es:'Gestión de la carga de trabajo',en:'Workload management',ob:[
  ['8.1','Exercises self-control in all situations'],
  ['8.2','Plans, prioritises and schedules appropriate tasks effectively'],
  ['8.3','Manages time efficiently when carrying out tasks'],
  ['8.4','Offers and gives assistance'],
  ['8.5','Delegates tasks'],
  ['8.6','Seeks and accepts assistance, when appropriate'],
  ['8.7','Monitors, reviews and cross-checks actions conscientiously'],
  ['8.8','Verifies that tasks are completed to the expected outcome'],
  ['8.9','Manages and recovers from interruptions, distractions, variations and failures effectively']]}
];
var LOGO="data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1024 1024%22%3E%3Cstyle%3E.b%7Bfill:%23FFF%3Bstroke:%23000%3Bstroke-opacity:.14%7D.f%7Bfill:%23000%7D%40media %28prefers-color-scheme:dark%29%7B.b%7Bfill:%23000%3Bstroke:%23FFF%3Bstroke-opacity:.22%7D.f%7Bfill:%23FFF%7D%7D%3C/style%3E%3Crect class=%22b%22 x=%226%22 y=%226%22 width=%221012%22 height=%221012%22 rx=%22228%22 stroke-width=%2212%22/%3E%3Crect x=%22150%22 y=%22250%22 width=%22110%22 height=%2222%22 class=%22f%22/%3E%3Cpath d=%22M155.46875 610.0H334.326171875V560.693359375H213.4765625V513.3203125H325.1416015625V465.4638671875H213.4765625V419.21875H334.326171875V369.912109375H155.46875ZM347.78515625 610.0H454.9384765625C508.2734375 610.0 538.4052734375 581.962890625 538.4052734375 542.1630859375C538.4052734375 508.1640625 515.36328125 486.25 485.392578125 484.31640625V483.994140625C512.462890625 478.0322265625 530.0263671875 458.53515625 530.0263671875 430.8203125C530.0263671875 394.8876953125 501.0224609375 369.912109375 447.6875 369.912109375H347.78515625ZM404.3427734375 565.52734375V509.6142578125H445.75390625C466.5400390625 509.6142578125 479.26953125 520.5712890625 479.26953125 537.9736328125C479.26953125 555.21484375 466.37890625 565.52734375 445.431640625 565.52734375ZM404.3427734375 467.3974609375V414.384765625H442.208984375C460.7392578125 414.384765625 472.1796875 424.697265625 472.1796875 440.810546875C472.1796875 457.0849609375 460.7392578125 467.3974609375 442.208984375 467.3974609375ZM540.5849609375 419.21875H611.322265625V610.0H669.330078125V419.21875H739.90625V369.912109375H540.5849609375Z%22 class=%22f%22/%3E%3Cpath d=%22M153.251953125 713.244140625H170.0537109375V760.0H178.328125V713.244140625H195.0576171875V706.162109375H153.251953125ZM205.6572265625 760.0H213.6064453125V735.4658203125C213.6064453125 730.154296875 217.6533203125 726.396484375 223.2177734375 726.396484375C224.8798828125 726.396484375 226.794921875 726.685546875 227.373046875 726.830078125V719.2421875C226.5419921875 719.1337890625 225.0244140625 719.025390625 224.0126953125 719.025390625C219.279296875 719.025390625 215.2685546875 721.69921875 213.787109375 726.107421875H213.353515625V719.603515625H205.6572265625ZM247.583984375 760.9033203125C254.1240234375 760.9033203125 257.9541015625 757.615234375 259.5078125 754.4716796875H259.9052734375V760.0H267.6015625V733.189453125C267.6015625 721.5185546875 258.3154296875 719.09765625 251.8115234375 719.09765625C244.62109375 719.09765625 237.828125 721.916015625 235.08203125 729.142578125L242.5615234375 731.09375C243.681640625 728.34765625 246.64453125 725.5654296875 251.919921875 725.5654296875C256.978515625 725.5654296875 259.65234375 728.1669921875 259.65234375 732.6474609375V732.8642578125C259.65234375 735.71875 256.5810546875 735.6826171875 249.462890625 736.513671875C241.8388671875 737.380859375 233.92578125 739.404296875 233.92578125 748.58203125C233.92578125 756.53125 239.8876953125 760.9033203125 247.583984375 760.9033203125ZM249.3544921875 754.5078125C244.91015625 754.5078125 241.73046875 752.5205078125 241.73046875 748.6904296875C241.73046875 744.53515625 245.416015625 743.017578125 249.896484375 742.4033203125C252.353515625 742.078125 258.49609375 741.427734375 259.6884765625 740.271484375V745.4384765625C259.6884765625 750.171875 255.822265625 754.5078125 249.3544921875 754.5078125ZM280.296875 760.0H288.24609375V719.603515625H280.296875ZM284.3076171875 713.4248046875C287.0537109375 713.4248046875 289.330078125 711.3291015625 289.330078125 708.7275390625C289.330078125 706.08984375 287.0537109375 703.994140625 284.3076171875 703.994140625C281.5615234375 703.994140625 279.28515625 706.08984375 279.28515625 708.7275390625C279.28515625 711.3291015625 281.5615234375 713.4248046875 284.3076171875 713.4248046875ZM308.890625 736.080078125C308.890625 729.6845703125 312.865234375 726.03515625 318.28515625 726.03515625C323.560546875 726.03515625 326.8125 729.50390625 326.8125 735.3212890625V760.0H334.76171875V734.345703125C334.76171875 724.373046875 329.26953125 719.09765625 321.03125 719.09765625C315.322265625 719.09765625 311.0947265625 721.6630859375 308.5654296875 727.3720703125L308.529296875 719.603515625H300.94140625V760.0H308.890625ZM347.45703125 760.0H355.40625V719.603515625H347.45703125ZM351.4677734375 713.4248046875C354.2138671875 713.4248046875 356.490234375 711.3291015625 356.490234375 708.7275390625C356.490234375 706.08984375 354.2138671875 703.994140625 351.4677734375 703.994140625C348.7216796875 703.994140625 346.4453125 706.08984375 346.4453125 708.7275390625C346.4453125 711.3291015625 348.7216796875 713.4248046875 351.4677734375 713.4248046875ZM376.05078125 736.080078125C376.05078125 729.6845703125 380.025390625 726.03515625 385.4453125 726.03515625C390.720703125 726.03515625 393.97265625 729.50390625 393.97265625 735.3212890625V760.0H401.921875V734.345703125C401.921875 724.373046875 396.4296875 719.09765625 388.19140625 719.09765625C382.482421875 719.09765625 378.2548828125 721.6630859375 375.7255859375 727.3720703125L375.689453125 719.603515625H368.1015625V760.0H376.05078125ZM431.52734375 775.970703125C441.861328125 775.970703125 449.7744140625 771.201171875 449.7744140625 760.578125V719.603515625H442.005859375V726.1796875H441.427734375C440.0185546875 723.650390625 437.1640625 719.09765625 429.720703125 719.09765625C420.0009765625 719.09765625 412.73828125 726.7578125 412.73828125 739.6572265625C412.73828125 752.556640625 420.109375 759.3857421875 429.6123046875 759.3857421875C436.9833984375 759.3857421875 439.765625 755.302734375 441.1748046875 752.6650390625H441.861328125V760.5419921875C441.861328125 766.7568359375 437.6337890625 769.5751953125 431.4912109375 769.5751953125C424.9873046875 769.5751953125 422.4580078125 766.359375 421.0126953125 764.046875L414.3642578125 767.1904296875C416.640625 772.068359375 422.1689453125 775.970703125 431.52734375 775.970703125ZM431.455078125 752.7734375C424.517578125 752.7734375 420.8681640625 747.42578125 420.8681640625 739.548828125C420.8681640625 731.8525390625 424.4091796875 725.8544921875 431.455078125 725.8544921875C438.2841796875 725.8544921875 441.8974609375 731.455078125 441.8974609375 739.548828125C441.8974609375 747.8232421875 438.17578125 752.7734375 431.455078125 752.7734375Z%22 class=%22f%22/%3E%3C/svg%3E";
var LOGO_BIG=LOGO;
var CK=COMP.map(function(c){return c.k;});
var CMAP={}; COMP.forEach(function(c){CMAP[c.k]=c;});
var GL={1:'Unsafe situation',2:'Not an unsafe situation',3:'Safe situation',4:'Safe situation',5:'Enhanced safety, effectiveness and efficiency'};
var GS={1:'Unsafe',2:'Not unsafe',3:'Safe',4:'Safe',5:'Enhanced'};
var RES={C:['Competente','ok'],RT:['Requiere entrenamiento adicional','warn'],INC:['Incompleto','bad'],'':['Sin resultado','']};

/* ============ Iconos ============ */
function ic(p,extra){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" '+(extra||'')+'>'+p+'</svg>';}
var I={
 home:ic('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20h5v-6h4v6h5V9.5"/>'),
 eval:ic('<rect x="5" y="3.5" width="14" height="17.5" rx="2.5"/><path d="M9 3.5h6v3H9z"/><path d="m9 13 2 2 4-4.5"/>'),
 people:ic('<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="17" cy="9" r="2.4"/><path d="M15.8 14.3c2.4-.3 4.3 1.3 4.8 4.2"/>'),
 book:ic('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/>'),
 chart:ic('<path d="M4 20V4"/><path d="M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6"/>'),
 spark:ic('<path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.9L12 18.5l-1.8-5.8L4.5 10.8 10.2 9z"/><path d="M19 3v3M17.5 4.5h3"/>'),
 gear:ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
 more:ic('<circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/>'),
 plus:ic('<path d="M12 5v14M5 12h14"/>'),
 chev:ic('<path d="m9 6 6 6-6 6"/>','class="chev"'),
 back:ic('<path d="m15 6-6 6 6 6"/>'),
 x:ic('<path d="M6 6l12 12M18 6 6 18"/>'),
 check:ic('<path d="m5 12.5 4.5 4.5L19 7.5"/>','stroke-width="2.6"'),
 search:ic('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4-4"/>'),
 doc:ic('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
 down:ic('<path d="M12 4v11M7 10.5l5 5 5-5"/><path d="M5 20h14"/>'),
 up:ic('<path d="M12 20V9M7 13.5l5-5 5 5"/><path d="M5 4h14"/>'),
 grid:ic('<rect x="3.5" y="3.5" width="7" height="7" rx="1.8"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.8"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.8"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.8"/>'),
 cam:ic('<path d="M4 8.5h3l1.5-2.5h7L17 8.5h3v11H4z"/><circle cx="12" cy="13.5" r="3.2"/>'),
 cal:ic('<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
 bell:ic('<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>'),
 clock:ic('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
 cloud:ic('<path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.1 4.7 4.7 0 0 0 7 18.5z"/>'),
 pen:ic('<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/>'),
 trash:ic('<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>'),
 send:ic('<path d="M5 12h13M13 6l6 6-6 6"/>','stroke-width="2.2"'),
 sign:ic('<path d="M3 17c3-1 4-9 6-9s0 9 2 9 3-4 4.5-4 1 3 2.5 3H21"/><path d="M3 21h18"/>'),
 alert:ic('<path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5M12 17.2v.1"/>'),
 plane:ic('<path d="M10.5 13.5 3 11l1.5-1.5 8 .5 4-4.5c1-1 2.6-1.3 3.3-.6.7.7.4 2.3-.6 3.3l-4.5 4 .5 8L14 21.5 11.5 14l-3 2.5v3L7 21l-1-3.5L2.5 16.5 4 15h3z"/>')
};

/* ============ Utilidades ============ */
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
function uid(p){return (p||'')+Date.now().toString(36)+Math.random().toString(36).slice(2,7);}
function today(){var d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
var MES=['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
function fdate(s){if(!s)return '—';var p=String(s).split('-');if(p.length<3)return s;return +p[2]+' '+MES[+p[1]-1]+' '+p[0];}
function fdateShort(s){var p=String(s||'').split('-');return p.length<3?s:(+p[2]+' '+MES[+p[1]-1]);}
function ftime(ms){if(!ms)return '—';var d=new Date(ms);return d.getDate()+' '+MES[d.getMonth()]+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');}
function initials(n){return String(n||'?').split(/\s+/).filter(Boolean).slice(0,2).map(function(w){return w[0];}).join('').toUpperCase();}
function avg(a){a=a.filter(function(x){return x>0;});return a.length?a.reduce(function(s,x){return s+x;},0)/a.length:0;}
function f1(x){return x?x.toFixed(1).replace('.',','):'—';}
function gcls(g){return 'gc'+(g?Math.max(1,Math.min(5,Math.round(g))):0);}
function gvar(g){return g?'var(--g'+Math.max(1,Math.min(5,Math.round(g)))+')':'var(--line)';}
function live(coll){var o=S[coll]||{};return Object.keys(o).map(function(k){return o[k];}).filter(function(r){return r&&!r.deleted;});}
function pilot(id){var p=S.trainees[id];return p&&!p.deleted?p:null;}
function pname(id){var p=pilot(id);return p?p.name:'Trainee eliminado';}
function sortByDate(a,b){return (a.date||'').localeCompare(b.date||'')||(a.updatedAt||0)-(b.updatedAt||0);}
function seats(s){return s.mode==='crew'?['cm1','cm2']:['cm1'];}
function pilotSessions(pid){return live('sessions').filter(function(s){return seats(s).some(function(x){return s.pilots[x]===pid;});}).sort(sortByDate);}
function seatOf(s,pid){return seats(s).filter(function(x){return s.pilots[x]===pid;})[0];}
function sessAvg(s,seat){var g=(s.grades||{})[seat]||{};return avg(CK.map(function(k){return g[k]?g[k].g:0;}));}
function graded(s,seat){var g=(s.grades||{})[seat]||{};return CK.filter(function(k){return g[k]&&(g[k].g||g[k].no);}).length;}
function gtxt(e){return !e?'–':e.no?'N/O':(e.g||'–');}
function phaseName(p){var m={EVAL:'Evaluation phase',MT:'Manoeuvres training',SBT:'Scenario-based training',LOFT:'Line oriented flight training',LOE:'Line oriented evaluation','LINE':'Line check'};return m[p]||p;}

/* ============ Almacén local-first + sincronización ============ */
var LS='bitacora-ebt-v1';
var DEF_SETTINGS={instructor:'',instructorId:'',ieRef:'',sbProject:'japjyiccjwnhbfpwqtti',emLastSend:0,emLastCheck:0,pin:'',photo:'',rank:'',fleet:'',quals:'',license:'',
  flightPhases:['Pre-vuelo','Despegue y ascenso','Crucero','Descenso y aproximación','Aterrizaje','Post-vuelo'],operator:'',module:'M1 2S-2026',
  modules:['M6 1S-2026','M1 2S-2026','M2 1S-2027','M3 2S-2027','M4 1S-2028','M5 2S-2028','M6 1S-2029'],
  phases:['EVAL','MT','SBT','LOFT','LOE','LINE'],fleets:['A320','B787'],
  phrases:['Adecuado manejo.','Requiere refuerzo.','Fortaleza destacada.','Mejoró respecto a la sesión anterior.','Aplicó SOP de forma oportuna.','Monitoreo tardío; requirió intervención.','Buena gestión del evento bajo presión.'],
  sims:['FFS A320 #1','FFS A320 #2','FFS B787','FTD A320'],
  debPhrases:['La tripulación gestionó los eventos conforme a SOP y con buena coordinación.','Se identifican oportunidades de mejora en el monitoreo y en la comunicación de desviaciones.','Se recomienda reforzar en el próximo módulo: ','Resultado competente; sin hallazgos que requieran entrenamiento adicional.','El debriefing se realizó de forma facilitada; la tripulación identificó por sí misma las áreas de mejora.']};
var S;
var COLLS=['trainees','sessions','evals','schedule','notices'];
function blank(){return {trainees:{},sessions:{},evals:{},schedule:{},notices:{},members:{},invites:[],org:{},owner:'',me:null,outbox:{},settings:JSON.parse(JSON.stringify(DEF_SETTINGS)),ui:{route:'inicio'},lastSync:0};}
function load(){
  try{var raw=localStorage.getItem(LS);if(raw){var o=JSON.parse(raw);var b=blank();for(var k in b){if(o[k]==null)o[k]=b[k];}for(var j in DEF_SETTINGS){if(o.settings[j]==null)o.settings[j]=DEF_SETTINGS[j];}COLLS.forEach(function(c){var m=o[c]||{};Object.keys(m).forEach(function(k){if(m[k]&&m[k].example){delete m[k];delete o.outbox[c+'/'+k];}});});if(Array.isArray(o.settings.sims))o.settings.sims=o.settings.sims.map(function(x){return String(x).replace(/^CAE Bogot\u00e1 \u00b7 /,'');});return o;}}catch(e){}
  return blank();
}
var persistT=null;
function persist(){clearTimeout(persistT);persistT=setTimeout(function(){try{localStorage.setItem(LS,JSON.stringify(S));}catch(e){toast('No se pudo guardar en este dispositivo: almacenamiento lleno');}},150);}
function put(coll,rec,quiet){rec.updatedAt=Date.now();rec.by=S.settings.instructor;S[coll][rec.id]=rec;S.outbox[coll+'/'+rec.id]=1;persist();scheduleFlush();if(!quiet)render();}
function remove(coll,id){var r=S[coll][id];if(!r)return;r.deleted=true;put(coll,r);}

var ROLE='instructor',ME=null;function realCoord(){return ROLE==='coord';}function isCoord(){return ROLE==='coord'&&!(S&&S.ui&&S.ui.viewAs==='instructor');}function roleLabel(){return isCoord()?'Manager EBT':'Instructor';}
var DB=null, dbState='connecting', flushing=false, flushT=null, unsub=[];
function online(){return navigator.onLine!==false;}
function pending(){return Object.keys(S.outbox).length;}
function scheduleFlush(){clearTimeout(flushT);flushT=setTimeout(flush,700);}
async function flush(){
  if(!DB||!online()||flushing)return;
  var keys=Object.keys(S.outbox);if(!keys.length)return;
  flushing=true;renderSync();
  for(var i=0;i<keys.length;i++){
    var key=keys[i],p=key.split('/'),rec=S[p[0]]&&S[p[0]][p[1]];
    if(!rec){delete S.outbox[key];continue;}
    try{await DB.doc(key).set(JSON.parse(JSON.stringify(rec)));delete S.outbox[key];}
    catch(e){if(e&&(e.code==='not_granted'||e.code==='invalid_argument')){dbState='readonly';}break;}
  }
  S.lastSync=Date.now();flushing=false;persist();renderSync();
  if(Object.keys(S.outbox).length&&dbState==='on')scheduleFlush();
}
function mergeRemote(coll,snap){
  var changed=false;
  snap.docs.forEach(function(d){
    var r=d.data();if(!r||r.example)return;r.id=r.id||d.id;
    var l=S[coll][d.id];
    if(S.outbox[coll+'/'+d.id]&&l&&(l.updatedAt||0)>=(r.updatedAt||0))return;
    if(!l||(r.updatedAt||0)>(l.updatedAt||0)){S[coll][d.id]=r;changed=true;}
  });
  if(changed){S.lastSync=Date.now();persist();softRender();}
  if(coll==='instructors'&&typeof checkInvite==='function')checkInvite();
}
var softT=null;
function softRender(){clearTimeout(softT);softT=setTimeout(function(){var a=document.activeElement;if(a&&(a.tagName==='TEXTAREA'||a.tagName==='INPUT'))return renderSync();render();},250);}
async function connect(){
  try{
    if(!window.claude||!window.claude.use){dbState='off';ROLE='coord';renderSync();render();return;}
    try{var u=await window.claude.use('user');if(u){ROLE=(u.canEdit&&u.canEdit())?'coord':'instructor';try{ME=await u.me();if(ME&&ME.name&&!S.settings.instructor){S.settings.instructor=ME.name;persist();}}catch(e){}}}catch(e){}
    render();
    var db=await window.claude.use('db');
    if(!db){dbState='off';renderSync();return;}
    DB=db;dbState='on';renderSync();
    COLLS.forEach(function(c){
      unsub.push(DB.collection(c).onSnapshot(function(s){mergeRemote(c,s);},function(e){dbState='error';renderSync();}));
    });
    flush();
  }catch(e){dbState='off';renderSync();}
}
function syncInfo(){
  var n=pending();
  if(!online())return {c:'warn',t:'Sin conexión',d:n?n+' cambio'+(n>1?'s':'')+' por subir':'Trabajando en este dispositivo'};
  if(dbState==='connecting')return {c:'',t:'Conectando…',d:'Base de datos compartida'};
  if(dbState==='off')return {c:'',t:'Solo este dispositivo',d:'Abre la app en Claude para sincronizar'};
  if(dbState==='readonly')return {c:'warn',t:'Solo lectura',d:'Tu acceso no permite subir cambios'};
  if(dbState==='error')return {c:'bad',t:'Error de sincronización',d:n+' pendiente'+(n===1?'':'s')};
  if(flushing)return {c:'acc',t:'Sincronizando…',d:n+' en cola'};
  if(n)return {c:'warn',t:n+' cambio'+(n>1?'s':'')+' pendiente'+(n>1?'s':''),d:'Se suben automáticamente'};
  return {c:'ok',t:'Sincronizado',d:S.lastSync?'Última: '+ftime(S.lastSync):'Base de datos al día'};
}
function syncHTML(){var i=syncInfo();var col={ok:'var(--ok)',warn:'var(--warn)',bad:'var(--bad)',acc:'var(--accent)'}[i.c]||'var(--faint)';return '<div class="sync"><span class="dot" style="background:'+col+';flex:none"></span><div style="min-width:0"><div>'+esc(i.t)+'</div><div class="tiny muted" style="font-weight:500">'+esc(i.d)+'</div></div></div>';}
function renderSync(){document.querySelectorAll('[data-sync]').forEach(function(el){el.innerHTML=syncHTML();});var i=syncInfo(),col={ok:'var(--ok)',warn:'var(--warn)',bad:'var(--bad)',acc:'var(--accent)'}[i.c]||'var(--faint)';document.querySelectorAll('[data-sync-pill]').forEach(function(el){el.innerHTML='<span class="dot" style="background:'+col+'"></span>'+esc(i.t);el.title=i.d;});}
window.addEventListener('online',function(){renderSync();flush();});
var rzT=null;window.addEventListener('resize',function(){clearTimeout(rzT);rzT=setTimeout(function(){if(S&&S.ui.route==='evaluar'&&typeof render==='function')render();},200);});
window.addEventListener('offline',renderSync);
/* ============ Supabase: cliente mínimo sin dependencias (auth + REST + funciones) ============ */
var SB={url:EI_CONFIG.url.replace(/\/$/,''),key:EI_CONFIG.key,session:null,refreshing:null};
var SBK='ei-auth-v1';
LS='ei-data-v1';
function sbLoad(){try{SB.session=JSON.parse(localStorage.getItem(SBK)||'null');}catch(e){SB.session=null;}}
function sbStore(){try{if(SB.session)localStorage.setItem(SBK,JSON.stringify(SB.session));else localStorage.removeItem(SBK);}catch(e){}}
function myId(){return SB.session&&SB.session.user?SB.session.user.id:'';}
function myEmail(){return SB.session&&SB.session.user?(SB.session.user.email||''):'';}
function sbError(status,body){var msg=body&&(body.msg||body.message||body.error_description||body.error)||('HTTP '+status);var e=new Error(msg);e.status=status;e.code=body&&(body.code||body.error_code||body.error)||'';e.body=body;return e;}
function isPermErr(e){return e&&(e.status===401||e.status===403||e.code==='42501'||e.code==='23503'||e.code==='23505'||e.code==='23514'||e.code==='22P02');}
async function sbRaw(path,opts){
  opts=opts||{};var h=Object.assign({'apikey':SB.key},opts.headers||{});if(opts.body!=null)h['Content-Type']='application/json';
  if(opts.auth!==false){var t=await sbToken();if(t)h.Authorization='Bearer '+t;}
  var r;try{r=await fetch(SB.url+path,{method:opts.method||'GET',headers:h,body:opts.body!=null?JSON.stringify(opts.body):undefined});}
  catch(e){var ne=new Error('Sin conexión');ne.offline=true;throw ne;}
  var txt=await r.text(),data=null;try{data=txt?JSON.parse(txt):null;}catch(e){data=txt;}
  if(!r.ok)throw sbError(r.status,data);
  return data;
}
function sbSetSession(d){
  if(!d||!d.access_token)return;
  var exp=d.expires_at?d.expires_at*1000:Date.now()+(d.expires_in||3600)*1000;
  SB.session={access_token:d.access_token,refresh_token:d.refresh_token||(SB.session&&SB.session.refresh_token),expires_at:exp,user:d.user||(SB.session&&SB.session.user)||null};
  sbStore();
}
async function sbToken(){
  var s=SB.session;if(!s)return null;
  if(s.expires_at-60000>Date.now())return s.access_token;
  if(!s.refresh_token)return s.access_token;
  if(!SB.refreshing)SB.refreshing=(async function(){
    try{var d=await sbRaw('/auth/v1/token?grant_type=refresh_token',{method:'POST',auth:false,body:{refresh_token:s.refresh_token}});sbSetSession(d);}
    catch(e){if(!e.offline&&(e.status===400||e.status===401)){SB.session=null;sbStore();sbExpired();}}
    finally{SB.refreshing=null;}
  })();
  await SB.refreshing;return SB.session?SB.session.access_token:null;
}
async function sbSignIn(email,password){var d=await sbRaw('/auth/v1/token?grant_type=password',{method:'POST',auth:false,body:{email:email,password:password}});sbSetSession(d);return d;}
async function sbRecover(email){return sbRaw('/auth/v1/recover?redirect_to='+encodeURIComponent(appUrl()),{method:'POST',auth:false,body:{email:email}});}
async function sbSetPassword(pw){var u=await sbRaw('/auth/v1/user',{method:'PUT',body:{password:pw}});if(SB.session){SB.session.user=u;sbStore();}return u;}
async function sbSignOut(){try{await sbRaw('/auth/v1/logout',{method:'POST'});}catch(e){}SB.session=null;sbStore();}
async function sbUser(token){return sbRaw('/auth/v1/user',{auth:false,headers:{Authorization:'Bearer '+token}});}
function appUrl(){return location.origin+location.pathname;}
async function sbSelect(table,q){return sbRaw('/rest/v1/'+table+'?'+(q||'select=*'));}
async function sbUpsert(table,rows){return sbRaw('/rest/v1/'+table+'?on_conflict='+(table==='ei_members'?'user_id':'id'),{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:rows});}
async function sbPatch(table,filter,body){return sbRaw('/rest/v1/'+table+'?'+filter,{method:'PATCH',headers:{Prefer:'return=minimal'},body:body});}
async function sbDelete(table,filter){return sbRaw('/rest/v1/'+table+'?'+filter,{method:'DELETE',headers:{Prefer:'return=minimal'}});}
async function sbRpc(fn,args){return sbRaw('/rest/v1/rpc/'+fn,{method:'POST',body:args||{}});}
async function sbFn(name,body){return sbRaw('/functions/v1/'+name,{method:'POST',body:body||{}});}

/* ============ Identificadores ============ */
function uuid(){if(window.crypto&&crypto.randomUUID)return crypto.randomUUID();var b=new Uint8Array(16);(window.crypto||{getRandomValues:function(a){for(var i=0;i<a.length;i++)a[i]=Math.random()*256|0;return a;}}).getRandomValues(b);b[6]=b[6]&15|64;b[8]=b[8]&63|128;var h=Array.from(b,function(x){return x.toString(16).padStart(2,'0');}).join('');return h.slice(0,8)+'-'+h.slice(8,12)+'-'+h.slice(12,16)+'-'+h.slice(16,20)+'-'+h.slice(20);}
function uid(){return uuid();}
function isUuid(v){return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(v||''));}
function ts(v){var t=Date.parse(v||'');return isNaN(t)?0:t;}
function iso(ms){return ms?new Date(ms).toISOString():null;}

/* ============ Miembros, organización y perfil ============ */
function members(){return S.members||{};}
function memberName(id){var m=members()[id];return m?(m.full_name||m.email||'Instructor'):'';}
function memberByName(n){n=String(n||'').trim().toLowerCase();if(!n)return null;var ms=members();var hit=null;Object.keys(ms).forEach(function(k){var m=ms[k];if(!hit&&((m.full_name||'').toLowerCase()===n||(m.ie_code||'').toLowerCase()===n||(m.email||'').toLowerCase()===n))hit=m;});return hit;}
function isMine(r){return r&&((r.iid&&r.iid===myId())||(!r.iid&&r.instructor&&r.instructor===S.settings.instructor));}
function ORG(k,d){var o=S.org||{};return o[k]==null?d:o[k];}
var ORG_MAP={phrases:'phrases',debPhrases:'debriefPhrases',phases:'phases',fleets:'fleets',modules:'modules',flightPhases:'flightPhases',sims:'sims',module:'currentModule'};
var PROFILE_MAP={instructor:'full_name',instructorId:'ie_code',rank:'rank',fleet:'fleet',quals:'quals',license:'license'};
function applyOrg(cfg){
  S.org=cfg||{};
  Object.keys(ORG_MAP).forEach(function(k){var v=S.org[ORG_MAP[k]];if(v!=null&&(!Array.isArray(v)||v.length))S.settings[k]=JSON.parse(JSON.stringify(v));});
  S.orgSnap=orgFromSettings();applyScale();
}
function orgFromSettings(){var o=JSON.parse(JSON.stringify(S.org||{}));Object.keys(ORG_MAP).forEach(function(k){o[ORG_MAP[k]]=S.settings[k];});return o;}
function profileFromSettings(){var p={};Object.keys(PROFILE_MAP).forEach(function(k){p[PROFILE_MAP[k]]=S.settings[k]||null;});p.full_name=p.full_name||'';return p;}
function applyMember(m){
  S.me=m||null;
  if(!m){ROLE='instructor';return;}
  ROLE=m.role==='manager'?'coord':'instructor';
  Object.keys(PROFILE_MAP).forEach(function(k){var v=m[PROFILE_MAP[k]];if(v!=null&&v!=='')S.settings[k]=v;});
  if(!S.settings.instructor)S.settings.instructor=m.email||myEmail();
  S.profileSnap=JSON.stringify(profileFromSettings());
}
function hexRgb(h){var m=String(h||'').match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);return m?[parseInt(m[1],16),parseInt(m[2],16),parseInt(m[3],16)]:null;}
function applyScale(){
  var sc=ORG('scale',null);if(!sc)return;var css='';
  [1,2,3,4,5].forEach(function(g){var e=sc[g]||sc[String(g)];if(!e)return;if(e.label)GL[g]=e.label;if(e.short)GS[g]=e.short;var rgb=hexRgb(e.color);if(rgb){RGB[g]=rgb;css+='--g'+g+':'+e.color+';';}});
  var st=document.getElementById('ei-scale');if(!st){st=document.createElement('style');st.id='ei-scale';document.head.appendChild(st);}
  st.textContent=css?':root,:root[data-theme="dark"]{'+css+'}@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){'+css+'}}':'';
}

/* ============ Conversión entre la app y las tablas ============ */
var CODEC={
  trainees:{table:'ei_trainees',
    to:function(r){return {id:r.id,full_name:(r.name||'').trim()||'Sin nombre',emp_no:r.emp?String(r.emp).trim():null,rank:r.rank||null,fleet:r.fleet||null,base:r.base||null,notes:r.notes||'',active:!r.deleted};},
    from:function(x){return {id:x.id,name:x.full_name,emp:x.emp_no||'',rank:x.rank||'',fleet:x.fleet||'',base:x.base||'',notes:x.notes||'',deleted:x.active===false,updatedAt:ts(x.updated_at),createdBy:x.created_by||''};}},
  evals:{table:'ei_formats',
    to:function(t){return {id:t.id,name:(t.name||'').trim()||'Plantilla',fleet:t.fleet||null,module:t.module||null,phase:t.phase||null,session_label:t.em&&t.em.session||null,events:t.events||[],target_comps:t.targets||[],notes:t.note||'',source:t.em||null,active:!t.deleted};},
    from:function(x){return {id:x.id,name:x.name,fleet:x.fleet||'',module:x.module||'',phase:x.phase||'',events:x.events||[],targets:x.target_comps||[],note:x.notes||'',em:x.source||null,deleted:x.active===false,updatedAt:ts(x.updated_at)};}},
  sessions:{table:'ei_sessions',
    to:function(s){var d=JSON.parse(JSON.stringify(s));['id','status','date','fleet','module','phase','templateId','mode','pilots','hash','signedAt','updatedAt','by','deleted','iid'].forEach(function(k){delete d[k];});
      var st=s.status==='signed'?(s.deleted?'void':'signed'):'draft';
      return {id:s.id,status:st,session_date:s.date||today(),fleet:s.fleet||null,module:s.module||null,phase:s.phase||null,format_id:isUuid(s.templateId)?s.templateId:null,mode:s.mode==='crew'?'crew':'single',
        cm1:isUuid(s.pilots&&s.pilots.cm1)?s.pilots.cm1:null,cm2:s.mode==='crew'&&isUuid(s.pilots&&s.pilots.cm2)?s.pilots.cm2:null,instructor_id:s.iid||myId(),data:d,hash:s.hash||null,signed_at:iso(s.signedAt)};},
    from:function(x){var s=Object.assign({},x.data||{});s.id=x.id;s.status=x.status==='draft'?'draft':'signed';s.deleted=x.status==='void';s.date=x.session_date;s.fleet=x.fleet||'';s.module=x.module||'';s.phase=x.phase||'';s.templateId=x.format_id||'';s.mode=x.mode;s.pilots={cm1:x.cm1||'',cm2:x.cm2||''};
      s.hash=x.hash||'';s.signedAt=ts(x.signed_at);s.iid=x.instructor_id;s.updatedAt=ts(x.updated_at);s.grades=s.grades||{cm1:{},cm2:{}};s.result=s.result||{};s.sig=s.sig||{};s.events=s.events||[];s.focus=s.focus||{};if(!s.instructor)s.instructor=memberName(x.instructor_id);return s;}},
  schedule:{table:'ei_schedule',
    to:function(a){var iid=a.iid||(memberByName(a.instructor)||{}).user_id||null;return {id:a.id,slot_date:a.date,start_time:a.time||null,end_time:a.end||null,fleet:a.fleet||null,module:a.module||null,phase:a.phase||null,sim:a.sim||null,cm1:isUuid(a.cm1)?a.cm1:null,cm2:isUuid(a.cm2)?a.cm2:null,instructor_id:iid,status:a.status||'scheduled',note:a.note||'',session_id:isUuid(a.sessionId)?a.sessionId:null};},
    from:function(x){return {id:x.id,date:x.slot_date,time:x.start_time||'',end:x.end_time||'',fleet:x.fleet||'',module:x.module||'',phase:x.phase||'',sim:x.sim||'',cm1:x.cm1||'',cm2:x.cm2||'',iid:x.instructor_id||'',instructor:memberName(x.instructor_id),status:x.status,note:x.note||'',sessionId:x.session_id||'',updatedAt:ts(x.updated_at)};}},
  notices:{table:'ei_notices',
    to:function(n){return {id:n.id,kind:n.kind||'general',title:(n.title||'').trim()||'Aviso',body:n.body||'',schedule_id:isUuid(n.scheduleId)?n.scheduleId:null};},
    from:function(x){return {id:x.id,kind:x.kind,title:x.title,body:x.body||'',scheduleId:x.schedule_id||'',ts:ts(x.created_at),by:memberName(x.created_by),authorId:x.created_by||'',updatedAt:ts(x.updated_at)};}}
};
var PUSH_ORDER=['trainees','evals','sessions','schedule','notices'];

/* ============ Sincronización: primero el dispositivo, luego la nube ============ */
var dbState='connecting',flushing=false,flushT=null,pullT=null,lastErr='';
function online(){return navigator.onLine!==false;}
function pending(){return Object.keys(S.outbox||{}).length+(S.orgDirty?1:0)+(S.profileDirty?1:0);}
function scheduleFlush(){clearTimeout(flushT);flushT=setTimeout(function(){flush();},800);}
var _persist0=persist;
persist=function(){_persist0();if(SB.session&&!LOCKED){var o=JSON.stringify(orgFromSettings()),p=JSON.stringify(profileFromSettings());if(isCoord()&&S.orgSnap&&o!==JSON.stringify(S.orgSnap)){S.orgDirty=true;scheduleFlush();}if(S.me&&p!==S.profileSnap){S.profileDirty=true;scheduleFlush();}}};
async function flush(){
  if(!SB.session||!online()||flushing||LOCKED)return;
  if(!pending())return;
  flushing=true;renderSync();
  try{
    var keys=Object.keys(S.outbox).sort(function(a,b){return PUSH_ORDER.indexOf(a.split('/')[0])-PUSH_ORDER.indexOf(b.split('/')[0]);});
    for(var i=0;i<keys.length;i++){
      var key=keys[i],p=key.split('/'),coll=p[0],id=p[1],rec=S[coll]&&S[coll][id],C=CODEC[coll];
      if(!C){delete S.outbox[key];continue;}
      try{
        if(!rec){delete S.outbox[key];continue;}
        if(coll==='sessions'&&rec.deleted&&rec.status!=='signed'){await sbDelete(C.table,'id=eq.'+id);delete S.sessions[id];}
        else if((coll==='schedule'||coll==='notices')&&rec.deleted){await sbDelete(C.table,'id=eq.'+id);delete S[coll][id];}
        else await sbUpsert(C.table,[C.to(rec)]);
        delete S.outbox[key];
      }catch(e){
        if(e.offline)throw e;
        if(isPermErr(e)){delete S.outbox[key];lastErr=permMsg(coll,e);toast(lastErr);S.needPull=true;}
        else{lastErr=e.message;throw e;}
      }
    }
    if(S.orgDirty&&isCoord()){var cfg=orgFromSettings();await sbPatch('ei_settings','id=eq.main',{config:cfg,updated_by:myId()});S.org=cfg;S.orgSnap=cfg;S.orgDirty=false;}
    else S.orgDirty=false;
    if(S.profileDirty&&S.me){var pr=profileFromSettings();await sbPatch('ei_members','user_id=eq.'+myId(),pr);Object.assign(S.me,pr);S.profileSnap=JSON.stringify(pr);S.profileDirty=false;}
    dbState='on';lastErr='';S.lastSync=Date.now();
  }catch(e){dbState=e.offline?'offline':'error';}
  finally{flushing=false;persist0();renderSync();if(S.needPull){S.needPull=false;pull();}else if(pending()&&dbState==='on')scheduleFlush();}
}
function persist0(){_persist0();}
function permMsg(coll,e){
  if(coll==='sessions')return e.code==='42501'?'La evaluación ya estaba firmada en el servidor; se mostró la versión guardada.':'No se pudo guardar la evaluación: '+e.message;
  if(coll==='notices')return 'Tu cuenta no puede publicar ese aviso.';
  if(coll==='schedule')return 'Solo el Manager modifica esa sesión de la agenda.';
  if(coll==='evals')return 'Solo el Manager modifica las plantillas.';
  if(coll==='trainees'&&e.code==='23505')return 'Ya existe un trainee con ese número de empleado.';
  return 'Cambio rechazado por el servidor: '+e.message;
}
async function pull(){
  if(!SB.session||!online())return;
  try{
    var res=await Promise.all([
      sbSelect('ei_members','select=*'),sbSelect('ei_settings','select=*&id=eq.main'),
      sbSelect('ei_trainees','select=*'),sbSelect('ei_formats','select=*'),sbSelect('ei_sessions','select=*&order=session_date.asc'),
      sbSelect('ei_schedule','select=*'),sbSelect('ei_notices','select=*&order=created_at.desc&limit=300'),
      isCoordReal()?sbSelect('ei_invites','select=*&accepted_at=is.null&order=created_at.desc'):Promise.resolve([])
    ]);
    var mem={};res[0].forEach(function(m){mem[m.user_id]=m;});S.members=mem;
    var me=mem[myId()];
    if(!me){dbState='nomember';LOCKED=true;AUTH.mode='noaccess';render();return;}
    if(me.status!=='active'){dbState='nomember';LOCKED=true;AUTH.mode='inactive';render();return;}
    var wasLocked=LOCKED;applyMember(me);
    if(res[1][0])applyOrg(res[1][0].config);
    S.invites=res[7]||[];
    var tables={trainees:res[2],evals:res[3],sessions:res[4],schedule:res[5],notices:res[6]};
    Object.keys(tables).forEach(function(coll){
      var C=CODEC[coll],next={};tables[coll].forEach(function(row){var r=C.from(row);next[r.id]=r;});
      Object.keys(S[coll]||{}).forEach(function(id){if(S.outbox[coll+'/'+id])next[id]=S[coll][id];});
      S[coll]=next;
    });
    dbState='on';S.lastSync=Date.now();lastErr='';
    if(wasLocked&&AUTH.mode!=='setpw'){LOCKED=false;}
    persist0();
    var a=document.activeElement;if(a&&(a.tagName==='TEXTAREA'||a.tagName==='INPUT')&&!LOCKED)renderSync();else render();
    if(pending())flush();
  }catch(e){
    if(e.offline){dbState='offline';}else if(e.status===401){sbExpired();}else{dbState='error';lastErr=e.message;}
    renderSync();
  }
}
function isCoordReal(){var m=S.members&&S.members[myId()];return m?m.role==='manager':ROLE==='coord';}
function realCoord(){return ROLE==='coord';}
async function connect(){
  if(!SB.session){dbState='off';return;}
  dbState=online()?'connecting':'offline';renderSync();
  await pull();
  clearInterval(pullT);pullT=setInterval(function(){if(!document.hidden)pull();},90000);
}
function sbExpired(){if(LOCKED)return;LOCKED=true;AUTH.mode='login';AUTH.err='Tu sesión expiró. Vuelve a ingresar.';AUTH.email=myEmail()||AUTH.email;render();}
document.addEventListener('visibilitychange',function(){if(!document.hidden&&SB.session&&!LOCKED){pull();}});
window.addEventListener('online',function(){if(SB.session)pull();});
function syncInfo(){
  var n=pending();
  if(!online()||dbState==='offline')return {c:'warn',t:'Sin conexión',d:n?n+' cambio'+(n>1?'s':'')+' por subir':'Trabajando en este dispositivo'};
  if(dbState==='connecting')return {c:'',t:'Conectando…',d:'Base de datos EBT'};
  if(dbState==='off')return {c:'',t:'Sin sesión',d:'Inicia sesión para sincronizar'};
  if(dbState==='error')return {c:'bad',t:'Error de sincronización',d:lastErr||(n+' pendiente'+(n===1?'':'s'))};
  if(flushing)return {c:'acc',t:'Sincronizando…',d:n+' en cola'};
  if(n)return {c:'warn',t:n+' cambio'+(n>1?'s':'')+' pendiente'+(n>1?'s':''),d:'Se suben automáticamente'};
  return {c:'ok',t:'Sincronizado',d:S.lastSync?'Última: '+ftime(S.lastSync):'Base de datos al día'};
}
/* ============ Gráficas ============ */
function radar(series){
  var W=340,H=300,cx=170,cy=152,R=108,n=CK.length,out='';
  function pt(i,v){var a=-Math.PI/2+i*2*Math.PI/n,r=R*v/5;return [cx+r*Math.cos(a),cy+r*Math.sin(a)];}
  for(var g=1;g<=5;g++){out+='<polygon points="'+CK.map(function(_,i){return pt(i,g).join(',');}).join(' ')+'" fill="none" stroke="var(--line2)" stroke-width="'+(g===5?1.2:.8)+'"/>';}
  CK.forEach(function(k,i){var e=pt(i,5),l=pt(i,5.9);out+='<line x1="'+cx+'" y1="'+cy+'" x2="'+e[0]+'" y2="'+e[1]+'" stroke="var(--line)"/>';
    out+='<text class="lbl" x="'+l[0]+'" y="'+(l[1]+4)+'" text-anchor="middle" style="font-family:var(--mono);font-size:11px">'+k+'</text>';});
  [2,4].forEach(function(g){var p=pt(0,g);out+='<text x="'+(p[0]+5)+'" y="'+(p[1]+3)+'" style="font-size:9.5px">'+g+'</text>';});
  series.forEach(function(s){
    var pts=CK.map(function(k,i){return pt(i,s.vals[k]||0);});
    out+='<polygon points="'+pts.map(function(p){return p.join(',');}).join(' ')+'" fill="'+s.color+'" fill-opacity=".14" stroke="'+s.color+'" stroke-width="2" stroke-linejoin="round"/>';
    pts.forEach(function(p,i){if(s.vals[CK[i]])out+='<circle cx="'+p[0]+'" cy="'+p[1]+'" r="3.2" fill="'+s.color+'"/>';});
  });
  return '<div class="chart"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Perfil de competencias">'+out+'</svg></div>';
}
function trend(points,color){
  if(!points.length)return '<p class="muted small">Sin sesiones firmadas todavía.</p>';
  var W=460,H=200,L=26,Rr=16,T=14,B=28,iw=W-L-Rr,ih=H-T-B,out='';
  function y(v){return T+ih-(v-1)/4*ih;}
  function x(i){return points.length===1?L+iw/2:L+i*iw/(points.length-1);}
  for(var g=1;g<=5;g++){out+='<line x1="'+L+'" x2="'+(W-Rr)+'" y1="'+y(g)+'" y2="'+y(g)+'" stroke="var(--line)" '+(g===2?'stroke-dasharray="4 4" stroke="var(--line2)"':'')+'/><text x="'+(L-10)+'" y="'+(y(g)+4)+'" text-anchor="end">'+g+'</text>';}
  var d=points.map(function(p,i){return (i?'L':'M')+x(i)+' '+y(p.v);}).join(' ');
  if(points.length>1)out+='<path d="'+d+' L'+x(points.length-1)+' '+(T+ih)+' L'+x(0)+' '+(T+ih)+' Z" fill="'+color+'" fill-opacity=".08"/>';
  out+='<path d="'+d+'" fill="none" stroke="'+color+'" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>';
  var step=Math.ceil(points.length/7);
  points.forEach(function(p,i){var last=i===points.length-1;
    out+='<circle cx="'+x(i)+'" cy="'+y(p.v)+'" r="'+(last?5:3.5)+'" fill="'+(last?color:'var(--surface)')+'" stroke="'+color+'" stroke-width="2"><title>'+esc(p.label+': '+f1(p.v))+'</title></circle>';
    if(i%step===0||last)out+='<text x="'+x(i)+'" y="'+(H-10)+'" text-anchor="middle">'+esc(p.label)+'</text>';
    if(last)out+='<text class="lbl" x="'+x(i)+'" y="'+(y(p.v)-11)+'" text-anchor="middle">'+f1(p.v)+'</text>';});
  return '<div class="chart"><svg viewBox="0 0 '+W+' '+H+'" role="img" aria-label="Tendencia">'+out+'</svg></div>';
}
function hbars(vals,counts,ref){
  return '<div style="display:flex;flex-direction:column;gap:9px">'+CK.map(function(k){var v=vals[k]||0;var rv=ref&&ref[k];
    return '<div style="display:grid;grid-template-columns:44px minmax(0,1fr) 38px;gap:10px;align-items:center" title="'+esc(CMAP[k].es)+'"><span class="code" style="text-align:center">'+k+'</span>'+
    '<div style="height:12px;border-radius:99px;background:var(--line);position:relative"><div style="height:100%;width:'+(v/5*100)+'%;background:'+gvar(v)+';border-radius:99px"></div>'+(rv?'<div title="Grupo '+f1(rv)+'" style="position:absolute;top:-3px;bottom:-3px;left:'+(rv/5*100)+'%;width:2px;background:var(--fg);border-radius:2px"></div>':'')+'</div>'+
    '<span class="num small" style="font-weight:650;text-align:right">'+f1(v)+'</span></div>';}).join('')+'</div>';
}
function dist(sessions){
  var rows=CK.map(function(k){var c=[0,0,0,0,0,0];sessions.forEach(function(s){seats(s).forEach(function(x){var g=s.grades[x]&&s.grades[x][k];if(g&&g.g)c[g.g]++;});});return {k:k,c:c,t:c.reduce(function(a,b){return a+b;},0)};});
  return '<div style="display:flex;flex-direction:column;gap:8px">'+rows.map(function(r){
    return '<div style="display:grid;grid-template-columns:44px minmax(0,1fr) 34px;gap:10px;align-items:center"><span class="code" style="text-align:center">'+r.k+'</span><div style="display:flex;height:14px;border-radius:5px;overflow:hidden;background:var(--line);gap:1px">'+
    [1,2,3,4,5].map(function(g){return r.c[g]?'<div title="Grado '+g+': '+r.c[g]+'" style="width:'+(r.c[g]/r.t*100)+'%;background:var(--g'+g+')"></div>':'';}).join('')+
    '</div><span class="num tiny muted" style="text-align:right">'+r.t+'</span></div>';}).join('')+'</div>'+
    '<div class="legend" style="margin-top:12px">'+[1,2,3,4,5].map(function(g){return '<span><i style="background:var(--g'+g+')"></i>'+g+' · '+GS[g]+'</span>';}).join('')+'</div>';
}
function compAverages(sessions){var v={};CK.forEach(function(k){var a=[];sessions.forEach(function(s){seats(s).forEach(function(x){var g=s.grades[x]&&s.grades[x][k];if(g&&g.g)a.push(g.g);});});v[k]=avg(a);});return v;}
function gradesOf(s,seat){var v={},g=(s.grades||{})[seat]||{};CK.forEach(function(k){v[k]=g[k]?g[k].g:0;});return v;}

/* ============ Vistas ============ */
var NAV=[['inicio','Inicio','home'],['agenda','Agenda','cal'],['evaluar','Evaluar','eval'],['pilotos','Trainees','people'],['biblioteca','Biblioteca EVAL','book'],['informes','Informes','chart'],['instructores','Instructores','people'],['ebtm','Diseño EBT Manager','cloud'],['asistente','Asistente IA','spark'],['ajustes','Ajustes','gear']];
var TABS=[['inicio','Inicio','home'],['agenda','Agenda','cal'],['evaluar','Evaluar','eval'],['pilotos','Trainees','people'],['mas','Más','more']];
function shell(content){
  var r=S.ui.route,act=r==='piloto'?'pilotos':r;
  var drafts=live('sessions').filter(function(s){return s.status==='draft';}).length;
  return '<div class="app"><aside class="side"><div class="brand"><img class="brand-mark" src="'+LOGO+'" alt="" style="object-fit:contain"><div><b>EBT Instructor</b><span><span class="pill '+(isCoord()?'acc':'')+'" style="height:18px;font-size:10.5px;padding:0 7px">'+roleLabel()+'</span> · '+esc(S.settings.module)+'</span></div></div>'+
   NAV.filter(function(n){return isCoord()||(n[0]!=='informes'&&n[0]!=='instructores'&&n[0]!=='ebtm');}).map(function(n){return '<button class="nav'+(act===n[0]?' on':'')+'" data-act="go" data-r="'+n[0]+'">'+I[n[2]]+n[1]+(n[0]==='evaluar'&&drafts?'<span class="badge">'+drafts+'</span>':'')+(n[0]==='agenda'&&unreadNotices()?'<span class="badge">'+unreadNotices()+'</span>':'')+'</button>';}).join('')+
   '<div class="side-foot" data-sync>'+syncHTML()+'</div></aside><main class="main" id="main">'+topbar()+content+'</main>'+
   '<nav class="tabbar">'+TABS.map(function(t){var on=act===t[0]||(t[0]==='mas'&&['biblioteca','informes','ajustes','mas','asistente','ebtm','instructores'].indexOf(act)>=0);var bd=t[0]==='agenda'?unreadNotices():t[0]==='evaluar'?drafts:0;return '<button class="tab'+(on?' on':'')+'" data-act="go" data-r="'+t[0]+'" style="position:relative">'+I[t[2]]+t[1]+(bd?'<span class="badge" style="position:absolute;top:0;right:calc(50% - 22px)">'+bd+'</span>':'')+'</button>';}).join('')+'</nav></div>';
}
function topbar(){
  var st=S.settings,i=syncInfo(),col={ok:'var(--ok)',warn:'var(--warn)',bad:'var(--bad)',acc:'var(--accent)'}[i.c]||'var(--faint)';var n=unreadNotices();
  return '<div class="topbar"><div class="who" style="flex:1">'+(st.photo?'<img src="'+st.photo+'" alt="">':'<span class="avatar">'+initials(st.instructor||'?')+'</span>')+'<span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(st.instructor||'Instructor')+'</span>'+(st.instructorId?'<span class="pill" style="height:20px">'+esc(st.instructorId)+'</span>':'')+(realCoord()?'<span class="seg" style="padding:2px;height:26px"><button class="'+(!S.ui.viewAs?'on':'')+'" data-act="viewAs" data-v="" style="padding:2px 9px;font-size:11.5px">Manager</button><button class="'+(S.ui.viewAs==='instructor'?'on':'')+'" data-act="viewAs" data-v="instructor" style="padding:2px 9px;font-size:11.5px">Instructor</button></span>':'<span class="pill" style="height:20px">'+roleLabel()+'</span>')+'</div>'+
   '<button class="syncpill" data-act="syncNow" data-sync-pill title="'+esc(i.d)+'"><span class="dot" style="background:'+col+'"></span>'+esc(i.t)+'</button>'+
   '<button class="iconbtn" data-act="go" data-r="agenda" aria-label="Avisos">'+I.bell+(n?'<span class="badge">'+n+'</span>':'')+'</button></div>'+
   (realCoord()&&S.ui.viewAs==='instructor'?'<div class="note" style="display:flex;align-items:center;gap:10px;margin:-6px 0 16px;background:var(--warn-soft);border-color:transparent;color:var(--warn)"><b style="flex:1">Estás viendo la app como Instructor.</b><button class="btn sm" data-act="viewAs" data-v="">Volver a Manager</button></div>':'');
}
function head(title,sub,actions){return '<div class="page-head"><div style="min-width:0"><h1>'+title+'</h1>'+(sub?'<p class="sub">'+sub+'</p>':'')+'</div><div class="row">'+(actions||'')+'</div></div>';}
function empty(icon,t,d,btn){return '<div class="empty">'+I[icon]+'<h3>'+t+'</h3><p class="small" style="max-width:420px">'+d+'</p>'+(btn||'')+'</div>';}
function sessRow(s,showCrew){
  var ss=seats(s),av=avg(ss.map(function(x){return sessAvg(s,x);}));
  var crew=ss.map(function(x){return esc(pname(s.pilots[x]));}).join(' · ');
  return '<button class="li" data-act="openSession" data-id="'+s.id+'"><span class="gchip '+gcls(av)+'" style="width:38px;height:38px;border-radius:10px;font-size:14px">'+(av?f1(av):'–')+'</span><div class="grow"><div class="t">'+esc(s.phase)+' · '+esc(s.module)+'</div><div class="small muted" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+fdate(s.date)+' · '+esc(s.fleet)+(showCrew!==false?' · '+crew:'')+'</div></div>'+
    (s.status==='draft'?'<span class="pill warn">Borrador</span>':'<span class="pill ok">'+I.check.replace('<svg','<svg width="11" height="11"')+'Firmada</span>')+(s.example?'<span class="pill">Ejemplo</span>':'')+I.chev+'</button>';
}
function hasData(){return live('trainees').length||live('sessions').length;}

function vInicio(){
  var st=S.settings,all=live('sessions'),signed=all.filter(function(s){return s.status==='signed';});
  var mod=signed.filter(function(s){return s.module===st.module;});
  var drafts=all.filter(function(s){return s.status==='draft';});
  var evaluated={};mod.forEach(function(s){seats(s).forEach(function(x){evaluated[s.pilots[x]]=1;});});
  var alerts=[];var lastBy={};
  signed.slice().sort(sortByDate).forEach(function(s){seats(s).forEach(function(x){lastBy[s.pilots[x]]={s:s,seat:x};});});
  Object.keys(lastBy).forEach(function(pid){var o=lastBy[pid];if(!pilot(pid))return;CK.forEach(function(k){var g=o.s.grades[o.seat][k];if(g&&g.g&&g.g<=2)alerts.push({pid:pid,k:k,g:g.g,s:o.s});});});
  alerts.sort(function(a,b){return a.g-b.g;});
  var h=new Date().getHours(),greet=h<12?'Buenos días':h<19?'Buenas tardes':'Buenas noches';
  var html=head(greet+(st.instructor?', '+esc(st.instructor.split(' ').slice(0,3).join(' ')):''),'<b>'+roleLabel()+'</b> · Módulo en curso: '+esc(st.module)+' · '+fdate(today()),'<button class="btn primary" data-act="newEval">'+I.plus+'Nueva evaluación</button>');
  if(ieBlocked())return html+blockedHTML();
  if(!hasData()){
    return html+'<div class="card">'+empty('eval','Empieza tu bitácora','Registra a tus trainees y crea tu primera evaluación. Todo se guarda en este dispositivo y se sincroniza con la base de datos cuando hay conexión.','<div class="row" style="justify-content:center"><button class="btn primary" data-act="newPilot">'+I.plus+'Agregar trainee</button></div>')+'</div>';
  }
  html+=profileCard();
  html+=backupCard();
  var me=myStats(signed);
  if(isCoord()){html+='<div class="grid g4" style="margin-bottom:16px">'+
   kpi('Sesiones del módulo',mod.length,'firmadas en '+st.module,'','informes')+kpi('Trainees evaluados',Object.keys(evaluated).length,'de '+live('trainees').length+' registrados','','trainees')+
   kpi('Alertas de grado ≤ 2',alerts.length,'en la última sesión de cada trainee',alerts.length?'var(--bad)':'','alerts')+kpi('Borradores abiertos',drafts.length,'de todos los instructores',drafts.length?'var(--warn)':'','evaluar')+'</div>';}
  else{html+='';}
  html+='<div class="eyebrow" style="margin-bottom:8px">Acceso rápido</div><div class="quick" style="margin-bottom:16px">'+[['newEval','','eval','Nueva evaluación','Un trainee o tripulación'],['go','agenda','cal','Agenda','Cronograma y avisos'],['go','pilotos','people','Trainees','Historial y falencias'],['go','biblioteca','book','Biblioteca EVAL','Plantillas por módulo'],['go','informes','chart','Informes','Calibración y exportación'],['go','asistente','spark','Asistente IA','Debriefings y análisis']].filter(function(q){return isCoord()||q[1]!=='informes';}).map(function(q){return '<button data-act="'+q[0]+'"'+(q[1]?' data-r="'+q[1]+'"':'')+'>'+I[q[2]]+'<b>'+q[3]+'</b><span>'+q[4]+'</span></button>';}).join('')+
   '<button class="'+(pending()?'warnq':'')+'" data-act="syncNow">'+I.cloud+'<b>'+(pending()?pending()+' por sincronizar':'Sincronizado')+'</b><span>'+esc(syncInfo().d)+'</span></button></div>';
  html+=inicioAgenda();
  if(drafts.length){html+='<div class="card" style="margin-bottom:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="gchip gc2" style="width:40px;height:40px;border-radius:12px">'+I.pen.replace('<svg','<svg width="20" height="20"')+'</span><div style="flex:1;min-width:200px"><h3>Tienes '+drafts.length+' evaluación'+(drafts.length>1?'es':'')+' sin cerrar</h3><p class="small muted">'+drafts.slice(0,2).map(function(s){return esc(s.phase)+' · '+seats(s).map(function(x){return esc(pname(s.pilots[x]));}).join(' / ');}).join(' — ')+'</p></div><button class="btn" data-act="resume" data-id="'+drafts[0].id+'">Continuar</button></div>';}
  var avgs=compAverages(mod.length?mod:signed);
  html+='<div class="grid '+(isCoord()?'g2':'')+'">'+(isCoord()?'<div class="card"><div class="card-head"><div><h3>Promedio por competencia</h3><p class="small muted">'+(mod.length?esc(st.module):'Todas las sesiones')+' · escala 1–5</p></div></div>'+hbars(avgs)+'</div>':'')+
   '<div class="card" id="alertas"><div class="card-head"><div><h3>Alertas para el próximo módulo</h3><p class="small muted">Competencias con grado 1–2 en la última sesión</p></div></div>'+
   (alerts.length?alerts.slice(0,7).map(function(a){return '<div class="flag"><span class="gchip '+gcls(a.g)+'">'+a.g+'</span><div style="flex:1;min-width:0"><div style="font-weight:600">'+esc(pname(a.pid))+'</div><div class="small muted">'+a.k+' · '+esc(CMAP[a.k].es)+' · '+esc(a.s.phase)+' '+fdateShort(a.s.date)+'</div></div><button class="btn sm" data-act="openPilot" data-id="'+a.pid+'">Ver</button></div>';}).join(''):'<p class="muted small">Sin alertas. Ningún trainee tiene competencias en 1 o 2 en su última sesión.</p>')+'</div></div>';
  var recent=all.filter(function(s){return isCoord()||isMine(s);}).sort(sortByDate).reverse().slice(0,6);
  html+='<div style="margin-top:22px" class="card-head"><h2>'+(isCoord()?'Sesiones recientes':'Mis sesiones recientes')+'</h2>'+(isCoord()?'<button class="btn ghost" data-act="go" data-r="informes">Ver todas</button>':'')+'</div><div class="list">'+recent.map(function(s){return sessRow(s);}).join('')+'</div>';
  return html;
}
function profileCard(){
  var st=S.settings;if(!st.instructor&&!st.photo)return '';
  var quals=(st.quals||'').split(/[,;·]/).map(function(q){return q.trim();}).filter(Boolean);
  return '<div class="card" style="margin-bottom:16px"><div class="profile">'+(st.photo?'<img class="ph" src="'+st.photo+'" alt="Foto">':'<span class="avatar ph">'+initials(st.instructor)+'</span>')+'<div style="flex:1;min-width:200px"><div class="eyebrow">'+esc([st.rank==='CPT'?'Capitán':st.rank==='FO'?'Primer oficial':'',st.fleet?'Flota '+st.fleet:'',roleLabel()].filter(Boolean).join(' · '))+'</div><h2>'+esc(st.instructor)+(st.instructorId?' <span class="pill" style="vertical-align:middle">'+esc(st.instructorId)+'</span>':'')+'</h2>'+(quals.length?'<div class="quals" style="margin-top:6px">'+quals.map(function(q){return '<span class="pill acc">'+esc(q)+'</span>';}).join('')+'</div>':'<p class="small muted">Agrega tus habilitaciones (TRI, SFI, SFE, LTC…) en Ajustes.</p>')+'</div><div style="text-align:right"><div class="eyebrow">Licencia</div><div style="font-weight:600;font-variant-numeric:tabular-nums">'+esc(st.license||'—')+'</div><div class="eyebrow" style="margin-top:8px">Hoy</div><div style="font-weight:600">'+fdate(today())+'</div></div></div></div>';
}
function myWeek(){var t=today(),d=new Date();d.setDate(d.getDate()+7);var lim=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');var me=S.settings.instructor;
  return {next7:live('schedule').filter(function(s){return isMine(s)&&s.date>=t&&s.date<=lim&&s.status!=='cancelled';}).length,drafts:live('sessions').filter(function(s){return s.status==='draft'&&s.instructor===me;}).length};}
function myStats(signed){
  var me=S.settings.instructor,cut=Date.now()-30*864e5,mine=[],all=[],n30=0,s30=0;
  signed.forEach(function(s){var isMe=isMine(s);var recent=(s.signedAt||0)>=cut;seats(s).forEach(function(x){var g=s.grades[x]||{};CK.forEach(function(k){if(g[k]&&g[k].g){all.push(g[k].g);if(isMe){mine.push(g[k].g);if(recent)n30++;}}});if(isMe&&recent)s30++;});});
  return {n:mine.length,n30:n30,s30:s30,mean:avg(mine),group:avg(all)};
}
function cycleProgress(pid){
  var mods=S.settings.modules||[],ss=pilotSessions(pid).filter(function(s){return s.status==='signed';});
  var done={};ss.forEach(function(s){done[s.module]=1;});var nm=mods.filter(function(m){return done[m];}).length;
  var te={};ss.forEach(function(s){(s.events||[]).forEach(function(e){if(e.done)te[String(e.t).trim().toLowerCase()]=1;});});
  var lib={};live('evals').forEach(function(t){(t.events||[]).forEach(function(e){lib[String(e.t).trim().toLowerCase()]=1;});});Object.keys(te).forEach(function(k){lib[k]=1;});
  var last=ss[ss.length-1],ok=0;if(last){var g=last.grades[seatOf(last,pid)];ok=CK.filter(function(k){return g[k]&&g[k].g>=3;}).length;}
  function bar(l,v,t,d){var p=t?Math.round(v/t*100):0;return '<div style="margin-bottom:10px"><div class="row" style="gap:8px;margin-bottom:4px"><span class="small" style="flex:1;font-weight:600">'+l+'</span><span class="small num"><b>'+v+'</b> de '+t+' · '+p+'%</span></div><div class="progress"><div style="width:'+p+'%;background:'+(p>=100?'var(--ok)':p>=50?'var(--accent)':'var(--warn)')+'"></div></div><div class="tiny muted" style="margin-top:3px">'+d+'</div></div>';}
  return '<div class="card"><div class="card-head"><div><h3>Progreso del ciclo EBT</h3><p class="small muted">Ciclo de '+mods.length+' módulos</p></div></div>'+bar('Módulos con sesión firmada',nm,mods.length,mods.filter(function(m){return done[m];}).join(', ')||'Ninguno todavía')+bar('Training elements cubiertos',Object.keys(te).length,Object.keys(lib).length||1,'Eventos completados frente a los de la biblioteca EVAL')+bar('Competencias ≥ 3 en el último módulo',ok,9,last?last.phase+' '+fdate(last.date):'Sin sesiones')+'</div>';
}
function kpi(l,v,d,col,go){return '<div class="card kpi"'+(go?' data-act="kpiGo" data-t="'+go+'" style="cursor:pointer"':'')+'><div class="eyebrow">'+l+'</div><div class="v"'+(col?' style="color:'+col+'"':'')+'>'+v+'</div><div class="d">'+esc(d)+'</div></div>';}

function vPilotos(){
  var q=(S.ui.q||'').toLowerCase(),fl=S.ui.pf||'';
  var ps=live('trainees').filter(function(p){return (!fl||p.fleet===fl)&&(!q||(p.name+' '+p.emp+' '+p.base).toLowerCase().indexOf(q)>=0);}).sort(function(a,b){return a.name.localeCompare(b.name);});
  var html=head('Trainees',live('trainees').length+' registrados','<button class="btn primary" data-act="newPilot">'+I.plus+'Agregar trainee</button>');
  html+='<div class="row" style="margin-bottom:14px"><div class="search" style="flex:1;min-width:220px">'+I.search+'<input class="input" id="q" data-bind="ui.q" placeholder="Buscar por nombre, código o base" value="'+esc(S.ui.q||'')+'"></div><div class="seg">'+['','A320','B787'].map(function(f){return '<button class="'+(fl===f?'on':'')+'" data-act="pf" data-v="'+f+'">'+(f||'Todas')+'</button>';}).join('')+'</div></div>';
  if(!ps.length)return html+'<div class="card">'+empty('people','Sin trainees','Agrega trainees para evaluarlos y llevar su historial.','<button class="btn primary" data-act="newPilot">'+I.plus+'Agregar trainee</button>')+'</div>';
  html+='<div class="list">'+ps.map(function(p){var ss=pilotSessions(p.id).filter(function(s){return s.status==='signed';});var last=ss[ss.length-1];var la=last?sessAvg(last,seatOf(last,p.id)):0;
    var low=last?CK.filter(function(k){var g=last.grades[seatOf(last,p.id)][k];return g&&g.g&&g.g<=2;}):[];
    return '<button class="li" data-act="openPilot" data-id="'+p.id+'"><span class="avatar">'+initials(p.name)+'</span><div class="grow"><div class="t">'+esc(p.name)+'</div><div class="small muted">'+esc(p.rank==='CPT'?'Capitán':'Primer oficial')+' · '+esc(p.fleet)+' · '+esc(p.base||'')+(p.emp?' · #'+esc(p.emp):'')+'</div></div>'+
    (low.length?'<span class="pill bad">'+low.join(' ')+'</span>':'')+(p.example?'<span class="pill">Ejemplo</span>':'')+'<span class="small muted num" style="min-width:64px;text-align:right">'+ss.length+' sesión'+(ss.length===1?'':'es')+'</span><span class="gchip '+gcls(la)+'" style="width:34px">'+(la?f1(la):'–')+'</span>'+I.chev+'</button>';}).join('')+'</div>';
  return html;
}

function vPiloto(){
  var p=pilot(S.ui.pid);if(!p){S.ui.route='pilotos';return vPilotos();}
  var ss=pilotSessions(p.id),signed=ss.filter(function(s){return s.status==='signed';});
  var last=signed[signed.length-1],prev=signed[signed.length-2];
  var html='<button class="btn ghost" data-act="go" data-r="pilotos" style="margin:-6px 0 8px -8px">'+I.back+'Trainees</button>';
  html+=head(esc(p.name),esc(p.rank==='CPT'?'Capitán':'Primer oficial')+' · '+esc(p.fleet)+' · '+esc(p.base||'—')+(p.emp?' · #'+esc(p.emp):'')+(p.example?' · <span class="pill">Ejemplo</span>':''),
   '<button class="btn" data-act="editPilot" data-id="'+p.id+'">'+I.pen+'Editar</button><button class="btn" data-act="pdfPilot" data-id="'+p.id+'">'+I.down+'Historial PDF</button><button class="btn" data-act="askPilot" data-id="'+p.id+'">'+I.spark+'Analizar con IA</button><button class="btn primary" data-act="newEval" data-pid="'+p.id+'">'+I.plus+'Evaluar</button>');
  if(!signed.length){return html+'<div class="card">'+empty('chart','Sin sesiones firmadas','Cuando cierres y firmes una evaluación de este trainee verás aquí su perfil de competencias y su evolución.','<button class="btn primary" data-act="newEval" data-pid="'+p.id+'">'+I.plus+'Evaluar ahora</button>')+'</div>'+(ss.length?'<div class="list" style="margin-top:16px">'+ss.map(function(s){return sessRow(s);}).join('')+'</div>':'');}
  var lv=gradesOf(last,seatOf(last,p.id)),pv=prev?gradesOf(prev,seatOf(prev,p.id)):null;
  var series=[{name:'Última',color:'var(--accent)',vals:lv}];if(pv)series.unshift({name:'Anterior',color:'var(--g3)',vals:pv});
  var pts=signed.map(function(s){return {label:s.phase+' '+fdateShort(s.date),v:sessAvg(s,seatOf(s,p.id))};});
  html+='<div class="grid g2"><div class="card"><div class="card-head"><div><h3>Perfil de competencias</h3><p class="small muted">'+esc(last.phase)+' '+fdate(last.date)+(prev?' comparado con '+esc(prev.phase)+' '+fdate(prev.date):'')+'</p></div></div>'+radar(series)+
   '<div class="legend" style="justify-content:center">'+(pv?'<span><i style="background:var(--g3)"></i>Anterior</span>':'')+'<span><i style="background:var(--accent)"></i>Última sesión</span></div></div>'+
   '<div class="stack"><div class="card"><div class="card-head"><div><h3>Evolución del promedio</h3><p class="small muted">Promedio de las 9 competencias por sesión</p></div></div>'+trend(pts,'var(--accent)')+'</div>'+
   '<div class="card"><h3 style="margin-bottom:10px">Foco sugerido</h3>'+focusList(last,seatOf(last,p.id))+'</div></div></div>';
  html+='<div class="grid g2" style="margin-top:16px">'+attentionCard(p.id)+cycleProgress(p.id)+'</div>';
  var tst=temStats(pilotSessions(p.id).filter(function(s){return s.status==='signed';}),p.id);if(tst.n)html+='<div class="card" style="margin-top:16px"><div class="card-head"><div><h3>TEM · Nivel 3</h3><p class="small muted">Amenazas, errores y estados indeseados registrados en sus sesiones</p></div></div>'+temChart(tst)+'</div>';
  html+='<div class="card" style="margin-top:16px"><div class="card-head"><div><h3>Mapa de calor del historial</h3><p class="small muted">Grado por competencia en cada sesión firmada</p></div></div><div class="scroll-x"><table class="heat"><thead><tr><th></th>'+signed.map(function(s){return '<th>'+esc(s.phase)+'<br><span style="font-weight:500">'+fdateShort(s.date)+'</span></th>';}).join('')+'</tr></thead><tbody>'+
   CK.map(function(k){return '<tr><th class="r" title="'+esc(CMAP[k].es)+'">'+k+'</th>'+signed.map(function(s){var g=s.grades[seatOf(s,p.id)][k];var v=g&&g.g;return '<td style="background:'+gvar(v)+'">'+(v||'')+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div></div>';
  html+='<div style="margin-top:22px" class="card-head"><h2>Historial</h2></div><div class="list">'+ss.slice().reverse().map(function(s){return sessRow(s);}).join('')+'</div>';
  return html;
}
function weaknesses(pid){
  var ss=pilotSessions(pid).filter(function(s){return s.status==='signed';});
  var comp={},obs={},evs={};
  ss.forEach(function(s){var x=seatOf(s,pid),g=s.grades[x]||{};
    CK.forEach(function(k){var e=g[k]||{};
      if(e.g&&e.g<=2){var c=comp[k]||(comp[k]={k:k,n:0,last:'',lastG:0,phase:''});c.n++;if(s.date>=c.last){c.last=s.date;c.lastG=e.g;c.phase=s.phase;}
        (s.events||[]).forEach(function(ev){if((ev.c||[]).indexOf(k)>=0){var o=evs[ev.t]||(evs[ev.t]={t:ev.t,n:0,ks:{},last:''});o.n++;o.ks[k]=1;if(s.date>o.last)o.last=s.date;}});}
      var ob=e.ob||{};Object.keys(ob).forEach(function(q){if(ob[q]<0){var o=obs[k+' '+q]||(obs[k+' '+q]={k:k,o:q,n:0});o.n++;}});});});
  function arr(o){return Object.keys(o).map(function(k){return o[k];});}
  return {sessions:ss.length,comp:arr(comp).sort(function(a,b){return b.n-a.n||a.lastG-b.lastG;}),obs:arr(obs).sort(function(a,b){return b.n-a.n;}),events:arr(evs).sort(function(a,b){return b.n-a.n;})};
}
function attentionCard(pid){
  var w=weaknesses(pid);
  var html='<div class="card"><div class="card-head"><div><h3>Áreas de atención</h3><p class="small muted">Competencias, OB y maniobras con grado 1–2 en el historial firmado</p></div></div>';
  if(!w.comp.length&&!w.obs.length)return html+'<p class="small muted">Sin competencias en grado 1–2 ni OB deficientes en '+w.sessions+' sesión'+(w.sessions===1?'':'es')+' firmada'+(w.sessions===1?'':'s')+'.</p></div>';
  if(w.comp.length)html+='<div class="eyebrow" style="margin-bottom:4px">Competencias</div>'+w.comp.map(function(c){return '<div class="attn"><span class="gchip '+gcls(c.lastG)+'">'+c.lastG+'</span><div style="min-width:0"><b>'+c.k+'</b> <span class="small muted">'+esc(CMAP[c.k].es)+'</span></div><span class="small muted num" style="text-align:right">'+c.n+'× · última '+esc(c.phase)+' '+fdateShort(c.last)+'</span></div>';}).join('')+riskChips(w.comp.map(function(c){return {k:c.k,g:c.lastG};}),true);
  if(w.obs.length)html+='<div class="eyebrow" style="margin:12px 0 6px">OB deficientes recurrentes</div><div class="tags">'+w.obs.slice(0,10).map(function(o){return '<span class="tag" style="color:var(--bad)" title="'+esc(obText(o.k,o.o))+'">OB '+o.o+(o.n>1?' ×'+o.n:'')+'</span>';}).join('')+'</div>';
  if(w.events.length)html+='<div class="eyebrow" style="margin:12px 0 4px">Maniobras y procedimientos por reforzar</div>'+w.events.map(function(e){return '<div class="attn" style="grid-template-columns:minmax(0,1fr) auto"><div style="min-width:0"><div style="font-weight:550">'+esc(e.t)+'</div><div class="tags">'+Object.keys(e.ks).map(function(k){return '<span class="tag" style="color:var(--bad)">'+k+'</span>';}).join('')+'</div></div><span class="small muted num">'+e.n+'× · '+fdateShort(e.last)+'</span></div>';}).join('');
  return html+'</div>';
}
function focusList(s,seat){
  var g=s.grades[seat]||{};
  var f=CK.filter(function(k){return g[k]&&g[k].g&&g[k].g<=2;});
  var negs=[];CK.forEach(function(k){var ob=(g[k]&&g[k].ob)||{};Object.keys(ob).forEach(function(o){if(ob[o]<0)negs.push({k:k,o:o});});});
  if(!f.length&&!negs.length)return '<p class="small muted">Sin competencias en 1–2 ni OB marcados como deficientes en la última sesión.</p>';
  return '<div style="display:flex;flex-direction:column;gap:8px">'+f.map(function(k){return '<div class="row" style="gap:8px"><span class="gchip '+gcls(g[k].g)+'">'+g[k].g+'</span><b>'+k+'</b><span class="small muted">'+esc(CMAP[k].es)+'</span></div>';}).join('')+
   (negs.length?'<div class="small muted" style="margin-top:4px">OB deficientes: '+negs.map(function(n){return '<span class="tag" title="'+esc(obText(n.k,n.o))+'">OB '+n.o+'</span>';}).join(' ')+'</div>':'')+'</div>';
}
function obText(k,o){var r=CMAP[k].ob.filter(function(x){return x[0]===o;})[0];return r?r[1]:'';}

function vBiblioteca(){
  var ts=live('evals').sort(function(a,b){return (a.module+a.fleet+a.phase).localeCompare(b.module+b.fleet+b.phase);});
  var html=head('Biblioteca EVAL','Plantillas de evaluación por módulo, flota y fase. Al evaluar, la plantilla carga los eventos y las competencias asociadas.',isCoord()?'<button class="btn" data-act="importTpl">'+I.up+'Importar JSON</button><button class="btn primary" data-act="newTpl">'+I.plus+'Nueva plantilla</button>':'<span class="pill">Solo lectura · gestiona Coordinación</span>');
  if(!ts.length)return html+'<div class="card">'+empty('book','Sin plantillas','Crea plantillas con los eventos de cada módulo EBT (EVAL, MT, SBT) para reutilizarlas en cada sesión.','<button class="btn primary" data-act="newTpl">'+I.plus+'Nueva plantilla</button>')+'</div>';
  var groups={};ts.forEach(function(t){(groups[t.module]=groups[t.module]||[]).push(t);});
  Object.keys(groups).forEach(function(m){
    html+='<div class="eyebrow" style="margin:18px 0 8px">'+esc(m)+'</div><div class="grid g3">'+groups[m].map(function(t){
      var cs={};(t.events||[]).forEach(function(e){(e.c||[]).forEach(function(c){cs[c]=1;});});
      return '<div class="card" style="display:flex;flex-direction:column;gap:10px"><div class="row" style="gap:6px"><span class="pill acc">'+esc(t.phase)+'</span><span class="pill">'+esc(t.fleet)+'</span>'+(t.example?'<span class="pill">Ejemplo</span>':'')+(t.em?'<span class="pill ok">EBT Manager</span>':'')+'</div><h3>'+esc(t.name)+'</h3>'+
      '<ol class="small" style="margin:0;padding-left:18px;color:var(--muted);display:flex;flex-direction:column;gap:3px">'+(t.events||[]).map(function(e){return '<li>'+esc(e.t)+'</li>';}).join('')+'</ol>'+
      '<div class="tags">'+CK.filter(function(k){return cs[k];}).map(function(k){return '<span class="tag">'+k+'</span>';}).join('')+'</div>'+
      '<div class="row" style="margin-top:auto">'+(isCoord()?'<button class="btn sm" data-act="editTpl" data-id="'+t.id+'">'+I.pen+'Editar</button>':'')+'<button class="btn sm primary" data-act="useTpl" data-id="'+t.id+'">Usar</button></div></div>';}).join('')+'</div>';
  });
  return html;
}

function vInformes(){
  if(!isCoord()){S.ui.route='inicio';return vInicio();}
  var f=S.ui.rf||(S.ui.rf={module:'',fleet:'',phase:''});
  var ss=live('sessions').filter(function(s){return s.status==='signed'&&(!f.module||s.module===f.module)&&(!f.fleet||s.fleet===f.fleet)&&(!f.phase||s.phase===f.phase);}).sort(sortByDate).reverse();
  var mods={};live('sessions').forEach(function(s){mods[s.module]=1;});S.settings.modules.forEach(function(m){mods[m]=1;});
  function sel(id,key,opts,lbl){return '<div class="field" style="min-width:150px;flex:1"><label for="'+id+'">'+lbl+'</label><select class="input" id="'+id+'" data-bind="ui.rf.'+key+'" data-rerender="1"><option value="">Todos</option>'+opts.map(function(o){return '<option'+(f[key]===o?' selected':'')+'>'+esc(o)+'</option>';}).join('')+'</select></div>';}
  var html=head('Informes','Análisis de sesiones firmadas, calibración de instructores y exportación.','<button class="btn" data-act="csv">'+I.down+'CSV</button><button class="btn" data-act="pdfReport">'+I.down+'Informe PDF</button>'+(isCoord()?'<button class="btn" data-act="exportManager">'+I.up+'Para EBT Manager</button>':''));
  html+='<div class="seg" style="margin-bottom:14px"><button class="'+(S.ui.rtab!=='cal'?'on':'')+'" data-act="rtab" data-v="">Resumen</button><button class="'+(S.ui.rtab==='cal'?'on':'')+'" data-act="rtab" data-v="cal">Calibración de instructores</button></div>';
  html+='<div class="card" style="margin-bottom:16px"><div class="row" style="align-items:flex-end">'+sel('rf-m','module',Object.keys(mods).sort(),'Módulo')+sel('rf-f','fleet',S.settings.fleets,'Flota')+sel('rf-p','phase',S.settings.phases,'Fase')+'</div></div>';
  if(!ss.length)return html+'<div class="card">'+empty('chart','Sin sesiones con estos filtros','Cambia los filtros o cierra y firma evaluaciones para ver su análisis.')+'</div>';
  if(S.ui.rtab==='cal')return html+vCalibracion(ss);
  var nP={},rt=0,tot=0;ss.forEach(function(s){seats(s).forEach(function(x){nP[s.pilots[x]]=1;tot++;if(s.result[x]==='RT')rt++;});});
  var av=compAverages(ss),overall=avg(CK.map(function(k){return av[k];}));
  var weakest=CK.slice().filter(function(k){return av[k];}).sort(function(a,b){return av[a]-av[b];})[0];
  html+='<div class="grid g4" style="margin-bottom:16px">'+kpi('Sesiones',ss.length,'firmadas')+kpi('Trainees',Object.keys(nP).length,tot+' evaluaciones individuales')+kpi('Promedio global',f1(overall),'escala 1–5')+kpi('Competencia más baja',weakest||'—',weakest?CMAP[weakest].es+' · '+f1(av[weakest]):'')+'</div>';
  html+='<div class="grid g2" style="margin-bottom:16px"><div class="card"><div class="card-head"><h3>Promedio por competencia</h3></div>'+hbars(av)+'</div><div class="card"><div class="card-head"><h3>Distribución de grados</h3></div>'+dist(ss)+'</div></div>';
  html+='<div class="grid g2" style="margin-bottom:16px">'+riskCard(ss)+'<div class="card"><div class="card-head"><div><h3>TEM · Nivel 3</h3><p class="small muted">Amenazas, errores y estados indeseados por categoría</p></div></div>'+temChart(temStats(ss))+'</div></div>';
  html+='<div class="card" style="margin-bottom:16px"><div class="card-head"><div><h3>Resultado por trainee</h3><p class="small muted">'+(tot-rt)+' competentes · '+rt+' requieren entrenamiento adicional</p></div></div><div class="scroll-x"><table class="tbl"><thead><tr><th>Fecha</th><th>Fase</th><th>Piloto</th><th>Asiento</th><th>Prom.</th><th>Resultado</th></tr></thead><tbody>'+
   ss.map(function(s){return seats(s).map(function(x){var r=RES[s.result[x]||''];return '<tr class="click" data-act="openSession" data-id="'+s.id+'"><td class="num">'+fdate(s.date)+'</td><td>'+esc(s.phase)+'</td><td>'+esc(pname(s.pilots[x]))+'</td><td>'+x.toUpperCase()+'</td><td><span class="gchip '+gcls(sessAvg(s,x))+'" style="width:34px">'+f1(sessAvg(s,x))+'</span></td><td><span class="pill '+r[1]+'">'+r[0]+'</span></td></tr>';}).join('');}).join('')+'</tbody></table></div></div>';
  return html;
}

function vMas(){
  var html=head('Más','');
  return html+'<div class="list">'+[['asistente','Asistente IA','spark','Analiza historiales y redacta debriefings'],['biblioteca','Biblioteca EVAL','book','Plantillas de evaluación por módulo'],['informes','Informes','chart','Análisis, CSV y PDF'],['instructores','Instructores','people','Equipo habilitado y patrón de calificación'],['ebtm','Diseño EBT Manager','cloud','Convierte el diseño de módulos en plantillas'],['ajustes','Ajustes','gear','Instructor, módulos, sincronización y respaldo']].filter(function(n){return isCoord()||(n[0]!=='informes'&&n[0]!=='instructores'&&n[0]!=='ebtm');}).map(function(n){return '<button class="li" data-act="go" data-r="'+n[0]+'"><span class="avatar" style="color:var(--accent)">'+I[n[2]].replace('<svg','<svg width="20" height="20"')+'</span><div class="grow"><div class="t">'+n[1]+'</div><div class="small muted">'+n[3]+'</div></div>'+I.chev+'</button>';}).join('')+'</div><div style="margin-top:16px" data-sync>'+syncHTML()+'</div>';
}

function vAjustes(){
  var st=S.settings;
  function inp(id,key,lbl,ph){return '<div class="field"><label for="'+id+'">'+lbl+'</label><input class="input" id="'+id+'" data-bind="settings.'+key+'" value="'+esc(st[key]||'')+'" placeholder="'+esc(ph||'')+'"></div>';}
  var html=head('Ajustes','Preferencias de este dispositivo y gestión de datos.','<span class="pill '+(isCoord()?'acc':'')+'">'+roleLabel()+'</span>'+(realCoord()?'<div class="seg"><button class="'+(!S.ui.viewAs?'on':'')+'" data-act="viewAs" data-v="">Vista Manager</button><button class="'+(S.ui.viewAs==='instructor'?'on':'')+'" data-act="viewAs" data-v="instructor">Ver como Instructor</button></div>':''));
  html+='<div class="grid g2"><div class="card stack"><h3>Instructor</h3><div class="profile">'+(st.photo?'<img class="ph" src="'+st.photo+'" alt="Foto">':'<span class="avatar ph">'+initials(st.instructor||'?')+'</span>')+'<div class="row"><button class="btn sm" data-act="photo">'+I.cam+'Foto</button>'+(st.photo?'<button class="btn ghost sm" data-act="photoClear">Quitar</button>':'')+'</div></div>'+inp('s-in','instructor','Nombre que aparece en informes y firmas')+inp('s-id','instructorId','Código de instructor','Ej. IE-01')+'<div class="grid g2" style="gap:12px"><div class="field"><label for="s-rk">Cargo</label><select class="input" id="s-rk" data-bind="settings.rank"><option value="">—</option><option value="CPT"'+(st.rank==='CPT'?' selected':'')+'>Capitán</option><option value="FO"'+(st.rank==='FO'?' selected':'')+'>Primer oficial</option></select></div><div class="field"><label for="s-fle">Flota</label><select class="input" id="s-fle" data-bind="settings.fleet"><option value="">—</option>'+st.fleets.map(function(f){return '<option'+(st.fleet===f?' selected':'')+'>'+esc(f)+'</option>';}).join('')+'</select></div></div>'+inp('s-q','quals','Habilitaciones (separadas por coma)','TRI, SFI, SFE, LTC')+inp('s-lic','license','Licencia','Ej. ATPL COL-12345')+inp('s-op','operator','Operador / departamento','Ej. Entrenamiento de vuelo')+'</div>'+accountCard()+formatCard()+
   (isCoord()?'<div class="card stack"><h3>Ciclo EBT</h3><div class="field"><label for="s-mod">Módulo en curso</label><select class="input" id="s-mod" data-bind="settings.module" data-rerender="1">'+st.modules.map(function(m){return '<option'+(st.module===m?' selected':'')+'>'+esc(m)+'</option>';}).join('')+'</select></div>'+
   '<div class="field"><label for="s-mods">Módulos (separados por coma)</label><input class="input" id="s-mods" data-list="modules" value="'+esc(st.modules.join(', '))+'"></div>'+
   '<div class="field"><label for="s-ph">Fases de evaluación (separadas por coma)</label><input class="input" id="s-ph" data-list="phases" value="'+esc(st.phases.join(', '))+'"></div>'+
   '<div class="field"><label for="s-sims">Simuladores (separados por coma)</label><input class="input" id="s-sims" data-list="sims" value="'+esc((st.sims||[]).join(', '))+'"></div>'+
   '<div class="field"><label for="s-fph">Fases de vuelo para plantillas (separadas por coma)</label><input class="input" id="s-fph" data-list="flightPhases" value="'+esc((st.flightPhases||[]).join(', '))+'"></div>'+
   '<div class="field"><label for="s-fl">Flotas</label><input class="input" id="s-fl" data-list="fleets" value="'+esc(st.fleets.join(', '))+'"></div></div>':'')+
   '<div class="card stack"><h3>Frases predefinidas</h3><p class="small muted">Una por línea. Aparecen como botones al calificar y al redactar el debriefing.</p><div class="field"><label for="s-phr">Evidencia por competencia</label><textarea class="input" id="s-phr" data-lines="phrases" style="min-height:120px">'+esc((st.phrases||[]).join('\n'))+'</textarea></div><div class="field"><label for="s-dph">Debriefing</label><textarea class="input" id="s-dph" data-lines="debPhrases" style="min-height:120px">'+esc((st.debPhrases||[]).join('\n'))+'</textarea></div></div>'+
   '<div class="card stack"><h3>Sincronización</h3><div data-sync>'+syncHTML()+'</div><p class="small muted">Los datos se guardan primero en este dispositivo. Con conexión, se suben y descargan de la base de datos compartida de la app. Sin conexión puedes seguir evaluando; los cambios quedan en cola.</p><div class="row"><button class="btn" data-act="syncNow">'+I.cloud+'Sincronizar ahora</button></div></div>'+
   (isCoord()?'<div class="card stack"><h3>Respaldo e integración</h3><p class="small muted">Todo queda guardado en la base de datos. Descarga además una copia en JSON una vez al mes y guárdala fuera de la app.</p><div class="row"><button class="btn" data-act="backup">'+I.down+'Exportar respaldo</button></div><hr class="sep" style="margin:4px 0"><div class="row"><button class="btn" data-act="go" data-r="ebtm">'+I.cloud+'Diseño EBT Manager</button><button class="btn" data-act="go" data-r="instructores">'+I.people+'Equipo de instructores</button></div></div>':'')+'</div>';
  html+='<p class="small muted" style="margin-top:18px;max-width:720px">Rol: '+(isCoord()?'Manager EBT (acceso de edición sobre la app): ves todo, editas cronograma y plantillas, revisas informes y calibración, borras registros.':'Instructor: tu agenda, tus evaluaciones y el historial de los trainees. Informes, calibración, cronograma y plantillas los gestiona el Manager EBT.')+'</p>';
  html+='<p class="small muted" style="margin-top:10px;max-width:720px">Marco de competencias y textos de OB según EASA AMC1 ORO.FC.231 y OACI Doc 9995 (numeración 0–8). Verifica los textos y la escala de calificación contra el EBT Instructor Handbook vigente antes de usar la app en sesiones reales.</p>';
  return html;
}
/* ============ Evaluar ============ */
function cur(){var s=S.sessions[S.ui.cur];return s&&!s.deleted&&s.status==='draft'?s:null;}
function vEvaluar(){
  var s=cur();
  if(!s)return vSetup();
  return S.ui.step===3?vClose(s):vGrade(s);
}
function stepsBar(n,s){
  var lab=['Configuración','Calificación','Cierre y firmas'];
  return '<div class="steps">'+lab.map(function(l,i){var k=i+1;return '<button class="step'+(n===k?' on':'')+(k<n?' done':'')+'" '+(s&&k>1?'data-act="step" data-v="'+k+'"':'')+'><i>'+(k<n?I.check.replace('<svg','<svg width="12" height="12"'):k)+'</i>'+l+'</button>';}).join('')+'</div>';
}
function vSetup(){
  var st=S.settings,u=S.ui.setup||(S.ui.setup={date:today(),module:st.module,fleet:st.fleets[0]||'A320',phase:st.phases[0]||'EVAL',mode:'crew',cm1:'',cm2:'',templateId:''});
  var ps=live('trainees').filter(function(p){return p.fleet===u.fleet;}).sort(function(a,b){return a.name.localeCompare(b.name);});
  var tpls=live('evals').filter(function(t){return t.fleet===u.fleet;});
  function opts(sel,rankHint){return '<option value="">Seleccionar…</option>'+ps.map(function(p){return '<option value="'+p.id+'"'+(sel===p.id?' selected':'')+'>'+esc(p.name)+' · '+(p.rank==='CPT'?'CPT':'FO')+'</option>';}).join('');}
  var drafts=live('sessions').filter(function(x){return x.status==='draft';});
  var html=head('Nueva evaluación','Configura la sesión. Puedes evaluar a un trainee o a la tripulación completa (CM1 y CM2).');
  html+=stepsBar(1);
  if(drafts.length)html+='<div class="note" style="margin-bottom:16px;display:flex;gap:10px;align-items:center;flex-wrap:wrap"><span style="flex:1;min-width:200px">Tienes '+drafts.length+' borrador'+(drafts.length>1?'es':'')+' sin cerrar.</span>'+drafts.slice(0,3).map(function(d){return '<button class="btn sm" data-act="resume" data-id="'+d.id+'">'+esc(d.phase)+' · '+esc(seats(d).map(function(x){return pname(d.pilots[x]).split(' ')[0];}).join('/'))+'</button>';}).join('')+'</div>';
  html+='<div class="grid g2"><div class="card stack"><h3>Sesión</h3><div class="grid g2" style="gap:12px">'+
   '<div class="field"><label for="u-date">Fecha</label><input type="date" class="input" id="u-date" data-bind="ui.setup.date" value="'+esc(u.date)+'"></div>'+
   '<div class="field"><label for="u-mod">Módulo</label><select class="input" id="u-mod" data-bind="ui.setup.module">'+st.modules.map(function(m){return '<option'+(u.module===m?' selected':'')+'>'+esc(m)+'</option>';}).join('')+'</select></div></div>'+
   '<div class="field"><label>Flota</label><div class="seg">'+st.fleets.map(function(f){return '<button class="'+(u.fleet===f?'on':'')+'" data-act="setup" data-k="fleet" data-v="'+esc(f)+'">'+esc(f)+'</button>';}).join('')+'</div></div>'+
   '<div class="field"><label>Fase</label><div class="seg">'+st.phases.map(function(f){return '<button class="'+(u.phase===f?'on':'')+'" data-act="setup" data-k="phase" data-v="'+esc(f)+'" title="'+esc(phaseName(f))+'">'+esc(f==='LINE'?'Line check':f)+'</button>';}).join('')+'</div><span class="tiny muted">'+esc(phaseName(u.phase))+'</span></div>'+
   '<div class="field"><label for="u-tpl">Plantilla de la biblioteca EVAL</label><select class="input" id="u-tpl" data-bind="ui.setup.templateId"><option value="">Sin plantilla (eventos libres)</option>'+tpls.map(function(t){return '<option value="'+t.id+'"'+(u.templateId===t.id?' selected':'')+'>'+esc(t.name)+' · '+esc(t.phase)+'</option>';}).join('')+'</select></div></div>'+
   '<div class="card stack"><h3>Tripulación</h3><div class="field"><label>A quién evalúas</label><div class="seg"><button class="'+(u.mode==='crew'?'on':'')+'" data-act="setup" data-k="mode" data-v="crew">Tripulación · CM1 + CM2</button><button class="'+(u.mode==='single'?'on':'')+'" data-act="setup" data-k="mode" data-v="single">Un piloto</button></div></div>'+
   '<div class="field"><label for="u-cm1">'+(u.mode==='crew'?'CM1 · piloto en el asiento izquierdo':'Trainee evaluado')+'</label><select class="input" id="u-cm1" data-bind="ui.setup.cm1">'+opts(u.cm1)+'</select></div>'+
   (u.mode==='crew'?'<div class="field"><label for="u-cm2">CM2 · piloto en el asiento derecho</label><select class="input" id="u-cm2" data-bind="ui.setup.cm2">'+opts(u.cm2)+'</select></div>':'')+
   (ps.length?'':'<p class="small muted">No hay trainees de '+esc(u.fleet)+' registrados.</p>')+'<div><button class="btn sm" data-act="newPilot">'+I.plus+'Agregar trainee</button></div></div></div>';
  html+='<div class="sticky-bar"><button class="btn primary" data-act="startEval">Comenzar evaluación'+I.chev.replace('class="chev"','width="16" height="16"')+'</button></div>';
  return html;
}
function isWide(){return window.innerWidth>=900;}
function evHistory(pid,title){
  var t=String(title||'').trim().toLowerCase();if(!pid||!t)return null;
  var hits=[];pilotSessions(pid).filter(function(s){return s.status==='signed';}).forEach(function(s){var x=seatOf(s,pid);(s.events||[]).forEach(function(e){if(String(e.t||'').trim().toLowerCase()!==t)return;var g=e.g&&e.g[x];if(!g){var ks=(e.c||[]).map(function(k){var q=s.grades[x][k];return q&&q.g||0;}).filter(Boolean);g=ks.length?Math.min.apply(null,ks):0;}if(g)hits.push({g:g,date:s.date,ie:s.instructor||'',derived:!(e.g&&e.g[x])});});});
  if(!hits.length)return null;hits.sort(function(a,b){return a.date.localeCompare(b.date);});var last=hits[hits.length-1];
  return {last:last.g,avg:avg(hits.map(function(h){return h.g;})),n:hits.length,date:last.date,ie:last.ie,derived:last.derived};
}
function histHTML(h){if(!h)return '<span class="hist">Sin registro previo</span>';return '<span class="hist" title="'+esc((h.ie?h.ie+' · ':'')+fdate(h.date)+(h.derived?' · derivado de competencias':''))+'"><span>Última <b class="gchip '+gcls(h.last)+'" style="width:22px;height:22px;font-size:12px">'+h.last+'</b></span><span>Prom <b>'+f1(h.avg)+'</b></span><span class="num">'+h.n+'×</span></span>';}
function compBlock(s,seat,c){
  var g=s.grades[seat]||(s.grades[seat]={});var r=g[c.k]||{};var ob=r.ob||{};var nOb=Object.keys(ob).filter(function(k){return ob[k];}).length;
  return '<div class="grades6">'+[1,2,3,4,5].map(function(v){return '<button class="gbtn g'+v+(r.g===v?' on':'')+'" data-act="grade" data-seat="'+seat+'" data-k="'+c.k+'" data-v="'+v+'" title="'+GL[v]+'">'+v+'<small>'+GS[v]+'</small></button>';}).join('')+(ORG('allowNO',true)?'<button class="gbtn no'+(r.no?' on':'')+'" data-act="gradeNO" data-seat="'+seat+'" data-k="'+c.k+'" title="No observado en esta sesión">N/O<small>no obs.</small></button>':'')+'</div>'+
    '<details class="disc"'+(S.ui.open&&S.ui.open[seat+c.k]?' open':'')+' data-k="'+seat+c.k+'"><summary>'+I.chev.replace('class="chev"','')+'Observable behaviours'+(nOb?' · '+nOb+' marcado'+(nOb>1?'s':''):'')+'</summary><div class="obs" style="margin-top:10px">'+
    c.ob.map(function(o){var v=ob[o[0]]||0;return '<button class="ob'+(v<0?' neg':v>0?' pos':'')+'" data-act="ob" data-seat="'+seat+'" data-k="'+c.k+'" data-o="'+o[0]+'"><span class="s">'+(v<0?'−':v>0?'+':'')+'</span><span class="k">'+o[0]+'</span><span>'+esc(o[1])+'</span></button>';}).join('')+
    '<p class="tiny muted">Toca una vez para marcar como deficiente (−), dos veces como fortaleza (+), tres para limpiar.</p></div></details>'+
    '<div class="chips mini">'+(S.settings.phrases||[]).map(function(ph){return '<button class="chip" data-act="phrase" data-seat="'+seat+'" data-k="'+c.k+'" data-t="'+esc(ph)+'">'+esc(ph.replace(/\.$/,''))+'</button>';}).join('')+'</div>'+
    '<textarea class="input" id="n-'+seat+'-'+c.k+'" data-sb="grades.'+seat+'.'+c.k+'.note" placeholder="'+(r.no?'Justifica por qué no se observó'+(ORG('requireNoteForNO',true)?' (obligatorio)':''):(r.g&&r.g<=ORG('requireNoteAtOrBelow',2)?'Evidencia observada (obligatoria para este grado)':'Evidencia observada (qué, cuándo, impacto)'))+'" style="min-height:60px">'+esc(r.note||'')+'</textarea>';
}
function evRow(s,e,i,sim,cols){
  var hist=cols.map(function(x){return s.pilots[x]?'<div style="min-width:0"><span class="tiny muted">'+x.toUpperCase()+' · </span>'+histHTML(evHistory(s.pilots[x],e.t))+'</div>':'';}).join('');
  var grade=cols.map(function(x){var v=e.g&&e.g[x]||0;return '<div class="row" style="gap:6px"><span class="tiny muted" style="width:28px">'+x.toUpperCase()+'</span><span class="evgrade">'+[1,2,3,4,5].map(function(n){return '<button class="'+(v===n?'on g'+n:'')+'" style="'+(v===n?'background:var(--g'+n+')':'')+'" data-act="evGrade" data-i="'+i+'" data-seat="'+x+'" data-v="'+n+'">'+n+'</button>';}).join('')+'</span></div>';}).join('');
  return '<div class="ev"><button class="check'+(e.done?' on':'')+'" data-act="evDone" data-i="'+i+'" aria-label="Completado">'+(e.done?I.check:'')+'</button><div style="flex:1;min-width:0"><div class="row" style="gap:8px"><span style="font-weight:550;flex:1;min-width:0">'+esc(e.t)+'</span>'+(sim?'<button class="btn sm'+(e.at?'':' primary')+'" data-act="evStamp" data-i="'+i+'">'+I.clock+(e.at?hhmm(e.at):'Ahora')+'</button>':(e.at?'<span class="pill num">'+hhmm(e.at)+'</span>':''))+'</div><div class="tags">'+(e.c||[]).map(function(c){return '<span class="tag">'+c+'</span>';}).join('')+'</div>'+
    '<div class="row" style="gap:12px;margin-top:6px;align-items:flex-start;flex-wrap:wrap"><div class="stack" style="gap:4px;flex:1;min-width:200px">'+hist+'</div><div class="stack" style="gap:4px">'+grade+'</div></div>'+
    (sim||e.note?'<textarea class="input" id="evn-'+i+'" data-sb="events.'+i+'.note" placeholder="Nota rápida del evento (dicta con el micrófono)" style="min-height:44px;margin-top:6px">'+esc(e.note||'')+'</textarea>':'')+'</div><button class="btn ghost sm" data-act="evDel" data-i="'+i+'" aria-label="Quitar evento">'+I.x+'</button></div>';
}
function vGrade(s){
  var ss=seats(s),wide=s.mode==='crew'&&isWide();
  var seat=S.ui.seat&&ss.indexOf(S.ui.seat)>=0?S.ui.seat:'cm1';S.ui.seat=seat;
  var cols=wide?ss:[seat];
  var total=ss.reduce(function(a,x){return a+graded(s,x);},0),max=ss.length*9;
  var html='<div class="sess-head"><div class="row" style="gap:10px"><div style="flex:1;min-width:0"><div class="eyebrow">'+esc(s.fleet)+' · '+esc(s.phase)+' · '+esc(s.module)+' · '+fdate(s.date)+'</div><h2 style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+ss.map(function(x){return esc(pname(s.pilots[x]));}).join(' · ')+'</h2></div><span class="small muted num" style="white-space:nowrap">'+total+'/'+max+' · '+Math.round(total/max*100)+'%</span><button class="iconbtn hide-sm" data-act="discard" data-id="'+s.id+'" aria-label="Descartar" title="Descartar evaluación">'+I.trash+'</button><button class="btn sm hide-sm" data-act="step" data-v="3">'+I.doc+'Debriefing</button><button class="btn sm primary" data-act="step" data-v="3">Cierre'+I.chev.replace('class="chev"','width="14" height="14"')+'</button></div><div class="progress"><div style="width:'+(total/max*100)+'%"></div></div></div>';
  html+=stepsBar(2,s);
  if(s.mode==='crew'&&!wide){html+='<div class="seg" style="margin-bottom:16px">'+ss.map(function(x){return '<button class="'+(seat===x?'on':'')+'" data-act="seat" data-v="'+x+'">'+x.toUpperCase()+' · '+esc(pname(s.pilots[x]))+' <span class="muted num">'+graded(s,x)+'/9</span></button>';}).join('')+'</div>';}
  var sim=!!S.ui.sim;
  // eventos por fase
  var phases=S.settings.flightPhases||[];var groups={};s.events.forEach(function(e,i){var p=e.phase||'';(groups[p]=groups[p]||[]).push(i);});
  var order=phases.filter(function(p){return groups[p];}).concat(Object.keys(groups).filter(function(p){return phases.indexOf(p)<0;}));
  html+='<div class="card" style="margin-bottom:16px"><div class="card-head"><div><h3>Eventos de la sesión</h3><p class="small muted">'+(sim?'Modo simulador: marca la hora de cada evento y dicta la evidencia con el micrófono del teclado.':'Marca los eventos completados y, si aplica, califícalos. Debajo de cada uno ves el historial del trainee en esa maniobra.')+'</p></div><div class="row">'+(s.startedAt?'<span class="pill acc" id="simclock">'+I.clock.replace('<svg','<svg width="13" height="13"')+simClock(s)+'</span>':'')+'<div class="seg"><button class="'+(!sim?'on':'')+'" data-act="simMode" data-v="">Normal</button><button class="'+(sim?'on':'')+'" data-act="simMode" data-v="1">Simulador</button></div></div></div>'+
   (sim&&!s.startedAt?'<button class="btn primary sm" data-act="simStart" style="margin-bottom:10px">'+I.clock+'Iniciar cronómetro de sesión</button>':'')+
   (s.events.length?order.map(function(p){var idx=groups[p];var done=idx.filter(function(i){return s.events[i].done;}).length;return (p?'<div class="phase-h"><span class="eyebrow">'+esc(p)+'</span><span class="tiny muted num">'+done+'/'+idx.length+'</span><div class="progress"><div style="width:'+(done/idx.length*100)+'%;background:'+(done===idx.length?'var(--ok)':'var(--accent)')+'"></div></div></div>':'')+idx.map(function(i){return evRow(s,s.events[i],i,sim,cols);}).join('');}).join(''):'<p class="small muted" style="margin-bottom:8px">Sin eventos cargados.</p>')+
   '<div class="row" style="margin-top:10px"><button class="btn sm" data-act="newEvent">'+I.plus+'Agregar evento</button></div></div>';
  if(ORG('temEnabled',true))html+=temCard(s,true);
  // competencias
  if(wide)html+='<div class="seat-h">'+ss.map(function(x){return '<div><span class="avatar" style="width:28px;height:28px;font-size:11px">'+initials(pname(s.pilots[x]))+'</span><span class="eyebrow">'+x.toUpperCase()+'</span><span style="flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(pname(s.pilots[x]))+'</span><span class="muted num small">'+graded(s,x)+'/9</span></div>';}).join('')+'</div>';
  html+='<div class="'+(wide?'stack':'grid g2')+'">'+COMP.map(function(c){
    var chips=cols.map(function(x){var r=(s.grades[x]||{})[c.k]||{};return (r.g||r.no)?'<span class="gchip '+(r.no?'gc0':gcls(r.g))+'" '+(r.no?'style="font-size:10px"':'')+'>'+gtxt(r)+'</span>':'';}).join('');
    return '<div class="card comp" id="c-'+c.k+'"'+((s.targets||[]).indexOf(c.k)>=0?' style="box-shadow:inset 0 0 0 1.5px var(--accent)"':'')+'><div class="comp-h"><span class="code">'+c.k+'</span>'+((s.targets||[]).indexOf(c.k)>=0?'<span class="pill acc" style="height:20px;flex:none" title="Competencia objetivo del módulo">Objetivo</span>':'')+'<div style="flex:1;min-width:0"><h3>'+esc(c.es)+'</h3><div class="tiny muted">'+esc(c.en)+'</div></div><span class="row" style="gap:4px">'+chips+'</span></div>'+
      (wide?'<div class="grow-row">'+cols.map(function(x){return '<div class="comp" style="gap:10px">'+compBlock(s,x,c)+'</div>';}).join('')+'</div>':compBlock(s,seat,c))+'</div>';}).join('')+'</div>';
  var nextBtn=wide?'<button class="btn primary" data-act="step" data-v="3">Cierre y firmas'+I.chev.replace('class="chev"','width="16" height="16"')+'</button>':
    s.mode==='crew'&&seat==='cm1'?'<button class="btn primary" data-act="nextSeat" data-v="cm2">Siguiente: CM2 · '+esc(pname(s.pilots.cm2).split(' ')[0])+I.chev.replace('class="chev"','width="16" height="16"')+'</button><button class="btn" data-act="step" data-v="3">Cierre y firmas</button>':
    (s.mode==='crew'?'<button class="btn" data-act="nextSeat" data-v="cm1">'+I.back+'CM1</button>':'')+'<button class="btn primary" data-act="step" data-v="3">Cierre y firmas'+I.chev.replace('class="chev"','width="16" height="16"')+'</button>';
  html+='<div class="sticky-bar" style="align-items:center"><span class="spacer"></span>'+(wide?'':'<button class="btn ghost sm" data-act="discard" data-id="'+s.id+'">Descartar</button>')+'<button class="btn" data-act="saveDraft">Guardar</button>'+nextBtn+'</div>';
  return html;
}
function vClose(s){
  var html=head('Cierre · '+esc(s.phase),fdate(s.date)+' · '+esc(s.module)+' · '+esc(s.fleet));
  html+=stepsBar(3,s);
  html+='<div class="grid '+(s.mode==='crew'?'g2':'')+'" style="margin-bottom:16px">'+seats(s).map(function(x){var av=sessAvg(s,x),r=s.result[x]||'';
    var missing=CK.filter(function(k){var q=s.grades[x][k];return !(q&&(q.g||q.no));});
    return '<div class="card stack"><div class="row"><span class="avatar">'+initials(pname(s.pilots[x]))+'</span><div style="flex:1;min-width:0"><div class="eyebrow">'+x.toUpperCase()+'</div><h3>'+esc(pname(s.pilots[x]))+'</h3></div><span class="gchip '+gcls(av)+'" style="width:44px;height:34px;font-size:15px">'+f1(av)+'</span></div>'+
     (missing.length?'<div class="pill bad" style="align-self:flex-start">Faltan: '+missing.join(' ')+'</div>':'')+
     '<div style="display:grid;grid-template-columns:repeat(9,1fr);gap:4px">'+CK.map(function(k){var q=s.grades[x][k]||{};var v=q.g;return '<div style="text-align:center"><div class="tiny muted" style="font-family:var(--mono)">'+k+'</div><span class="gchip '+(q.no?'gc0':gcls(v))+'" style="width:100%;'+(q.no?'font-size:10px':'')+'">'+(q.no?'N/O':(v||'·'))+'</span></div>';}).join('')+'</div>'+
     '<div class="field"><label>Resultado</label><div class="seg full">'+['C','RT','INC'].map(function(k){return '<button class="'+(r===k?'on':'')+'" data-act="result" data-seat="'+x+'" data-v="'+k+'" title="'+RES[k][0]+'">'+({C:'Competente',RT:'Entrenamiento adicional',INC:'Incompleto'})[k]+'</button>';}).join('')+'</div></div>'+
     '<div><div class="eyebrow" style="margin-bottom:6px">Foco sugerido</div>'+focusList(s,x)+'</div></div>';}).join('')+'</div>';
  html+='<div class="card stack" style="margin-bottom:16px"><div class="row"><h3 style="flex:1">Debriefing y recomendaciones</h3>'+(s.mode==='crew'?'<div class="seg"><button class="'+(s.debriefMode!=='each'?'on':'')+'" data-act="debMode" data-v="joint">Uno conjunto</button><button class="'+(s.debriefMode==='each'?'on':'')+'" data-act="debMode" data-v="each">Uno por trainee</button></div>':'')+'</div>'+
    debTargets(s).map(function(t){return '<div class="stack" style="gap:8px"><div class="row">'+(t.label?'<div class="eyebrow" style="flex:1">'+esc(t.label)+'</div>':'<span class="spacer"></span>')+'<button class="btn sm" data-act="aiDebrief" data-t="'+t.key+'">'+I.spark+'Redactar con IA</button></div>'+
      '<div class="chips mini">'+(S.settings.debPhrases||[]).map(function(ph){return '<button class="chip" data-act="debPhrase" data-t="'+t.key+'" data-txt="'+esc(ph)+'">'+esc(ph.length>58?ph.slice(0,56)+'…':ph.replace(/[.:]\s*$/,''))+'</button>';}).join('')+'</div>'+
      '<textarea class="input" id="deb-'+t.key+'" data-sb="'+t.path+'" style="min-height:120px" placeholder="Hallazgos principales, OB observados, acuerdos y training focus para el próximo módulo.">'+esc(t.val)+'</textarea></div>';}).join('')+'</div>';
  html=html.slice(0,-'</div>'.length)+aiNote(s)+'</div>';
  var who=[['inst','Instructor · '+S.settings.instructor]].concat(seats(s).map(function(x){return [x,x.toUpperCase()+' · '+pname(s.pilots[x])];}));
  html+='<div class="card"><div class="card-head"><div><h3>Firmas</h3><p class="small muted">Firma con el dedo o el Apple Pencil. La firma del instructor es obligatoria.</p></div></div><div class="grid '+(who.length>1?'g'+Math.min(who.length,3):'')+'">'+who.map(function(w){return '<div class="field"><div class="row"><label style="flex:1">'+esc(w[1])+'</label><button class="btn ghost sm" data-act="sigClear" data-k="'+w[0]+'">Borrar</button></div><div class="sigbox"><span class="line"></span><canvas data-sig="'+w[0]+'" id="sig-'+w[0]+'"></canvas>'+(s.sig[w[0]]?'':'<span class="ph">Firma aquí</span>')+'</div></div>';}).join('')+'</div></div>';
  html+='<div class="sticky-bar"><button class="btn" data-act="step" data-v="2">Volver a calificar</button><button class="btn" data-act="saveDraft">Guardar borrador</button><button class="btn primary" data-act="finalize">'+I.sign+'Firmar y cerrar</button></div>';
  return html;
}

function debTargets(s){
  if(s.mode==='crew'&&s.debriefMode==='each'){s.debriefBy=s.debriefBy||{cm1:'',cm2:''};return seats(s).map(function(x){return {key:x,label:x.toUpperCase()+' · '+pname(s.pilots[x]),path:'debriefBy.'+x,val:s.debriefBy[x]||''};});}
  return [{key:'joint',label:'',path:'debrief',val:s.debrief||''}];
}
/* ============ Firma ============ */
function mountSigs(){
  document.querySelectorAll('canvas[data-sig]').forEach(function(cv){
    var s=cur();if(!s)return;var key=cv.dataset.sig,dpr=window.devicePixelRatio||1,w=cv.clientWidth,h=cv.clientHeight;
    cv.width=w*dpr;cv.height=h*dpr;var ctx=cv.getContext('2d');ctx.scale(dpr,dpr);ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=2.2;ctx.strokeStyle='#14141a';
    if(s.sig[key]){var im=new Image();im.onload=function(){var r=Math.min(w/im.width,h/im.height);ctx.drawImage(im,(w-im.width*r)/2,(h-im.height*r)/2,im.width*r,im.height*r);};im.src=s.sig[key];}
    var drawing=false,last=null,dirty=false;
    function pos(e){var b=cv.getBoundingClientRect();return [e.clientX-b.left,e.clientY-b.top];}
    cv.addEventListener('pointerdown',function(e){drawing=true;last=pos(e);cv.setPointerCapture(e.pointerId);var ph=cv.parentNode.querySelector('.ph');if(ph)ph.remove();e.preventDefault();});
    cv.addEventListener('pointermove',function(e){if(!drawing)return;var p=pos(e);ctx.lineWidth=e.pressure&&e.pointerType==='pen'?1.2+e.pressure*2.4:2.2;ctx.beginPath();ctx.moveTo(last[0],last[1]);ctx.lineTo(p[0],p[1]);ctx.stroke();last=p;dirty=true;e.preventDefault();});
    function end(){if(!drawing)return;drawing=false;if(!dirty)return;
      var out=document.createElement('canvas'),sc=Math.min(1,480/w);out.width=Math.round(w*sc);out.height=Math.round(h*sc);var o=out.getContext('2d');o.fillStyle='#fff';o.fillRect(0,0,out.width,out.height);o.drawImage(cv,0,0,out.width,out.height);
      var s2=cur();if(s2){s2.sig[key]=out.toDataURL('image/jpeg',.82);put('sessions',s2,true);}}
    cv.addEventListener('pointerup',end);cv.addEventListener('pointercancel',end);
  });
}

/* ============ Hojas (modales) ============ */
function sheetHTML(){
  var sh=S.ui.sheet;if(!sh)return '';
  var body='',title='',narrow=false,actions='';
  if(sh.type==='session'){var s=S.sessions[sh.id];if(!s){S.ui.sheet=null;return '';}title='Sesión '+esc(s.phase);body=sessionDetail(s);
    actions='<button class="btn sm" data-act="pdfSession" data-id="'+s.id+'">'+I.down+'PDF</button>';}
  else if(sh.type==='pilot'){title=sh.id?'Editar trainee':'Nuevo trainee';narrow=true;body=pilotForm();actions='<button class="btn sm primary" data-act="savePilot">Guardar</button>';}
  else if(sh.type==='tpl'){title=sh.id?'Editar plantilla':'Nueva plantilla';body=tplForm();actions='<button class="btn sm primary" data-act="saveTpl">Guardar</button>';}
  else if(sh.type==='event'){title='Nuevo evento';narrow=true;var f=S.ui.form;body='<div class="stack"><div class="field"><label for="ev-t">Maniobra, procedimiento o escenario</label><input class="input" id="ev-t" data-fb="t" value="'+esc(f.t||'')+'" placeholder="Ej. Rejected takeoff" autofocus></div><div class="field"><label for="ev-ph">Fase de vuelo</label><select class="input" id="ev-ph" data-fb="phase"><option value="">Sin fase</option>'+(S.settings.flightPhases||[]).map(function(p){return '<option'+(f.phase===p?' selected':'')+'>'+esc(p)+'</option>';}).join('')+'</select></div><div class="field"><label>Competencias que expone</label><div class="tags">'+CK.map(function(k){return '<button class="tag'+((f.c||[]).indexOf(k)>=0?' on':'')+'" data-act="evTag" data-k="'+k+'">'+k+'</button>';}).join('')+'</div></div><div class="row" style="justify-content:flex-end"><button class="btn" data-act="closeSheet">Cancelar</button><button class="btn primary" data-act="evAddSheet">'+I.plus+'Agregar</button></div></div>';}
  else if(sh.type==='slot'){var sl=S.schedule[sh.id];if(!sl){S.ui.sheet=null;return '';}title='Sesión programada';body=slotDetail(sl);actions=sl.status!=='cancelled'&&!sl.sessionId?'<button class="btn sm primary" data-act="startFromSlot" data-id="'+sl.id+'">Iniciar</button>':'';}
  else if(sh.type==='slotForm'){title=sh.id?'Editar sesión programada':'Programar sesión';body=slotForm();actions='<button class="btn sm primary" data-act="saveSlot">Guardar</button>';}
  else if(sh.type==='notice'){title='Nuevo aviso';narrow=true;body=noticeForm();actions='<button class="btn sm primary" data-act="saveNotice">Publicar</button>';}
  else if(sh.type==='confirm'){title=esc(sh.title||'Confirmar');narrow=true;body='<p style="margin-bottom:18px">'+esc(sh.msg)+'</p><div class="row" style="justify-content:flex-end"><button class="btn" data-act="closeSheet">Cancelar</button><button class="btn primary" data-act="confirmYes" style="background:var(--bad)">'+esc(sh.yes||'Eliminar')+'</button></div>';}
  if(!body&&typeof sheetExtra==='function'){var x=sheetExtra(sh);if(!x){S.ui.sheet=null;return '';}title=x.title;body=x.body;narrow=!!x.narrow;actions=x.actions||'';}
  return '<div class="scrim" data-act="scrim"><div class="sheet'+(narrow?' narrow':'')+'" role="dialog" aria-modal="true" id="sheet"><div class="sheet-h"><button class="btn ghost sm" data-act="closeSheet" aria-label="Cerrar">'+I.x+'</button><h2>'+title+'</h2><div style="min-width:36px;display:flex;justify-content:flex-end">'+actions+'</div></div><div class="sheet-b">'+body+'</div></div></div>';
}
function sessionDetail(s){
  var t=s.templateId&&S.evals[s.templateId];
  var html='<div class="row" style="margin-bottom:14px">'+(s.status==='signed'?'<span class="pill ok">Firmada '+ftime(s.signedAt)+'</span>':'<span class="pill warn">Borrador</span>')+(s.example?'<span class="pill">Ejemplo</span>':'')+'<span class="spacer"></span>'+
   (s.status==='draft'?'<button class="btn sm primary" data-act="resume" data-id="'+s.id+'">Continuar</button>':'')+'<button class="btn sm" data-act="askSession" data-id="'+s.id+'">'+I.spark+'Analizar con IA</button></div>';
  html+='<div class="card" style="margin-bottom:14px"><dl class="kv"><dt>Fecha</dt><dd>'+fdate(s.date)+'</dd><dt>Módulo</dt><dd>'+esc(s.module)+'</dd><dt>Flota · fase</dt><dd>'+esc(s.fleet)+' · '+esc(s.phase)+' <span class="muted small">('+esc(phaseName(s.phase))+')</span></dd>'+(t?'<dt>Plantilla</dt><dd>'+esc(t.name)+'</dd>':'')+'<dt>Instructor</dt><dd>'+esc(s.instructor||'')+'</dd>'+(s.slotId&&S.schedule[s.slotId]?'<dt>Agenda</dt><dd><button class="btn ghost sm" data-act="openSlot" data-id="'+s.slotId+'" style="height:auto">'+esc(S.schedule[s.slotId].sim||'Sesión programada')+' · '+esc(S.schedule[s.slotId].time||'')+'</button></dd>':'')+(s.hash?'<dt>Sello</dt><dd class="num" style="font-family:var(--mono);font-size:12px">'+esc(s.hash)+'</dd>':'')+'</dl></div>';
  seats(s).forEach(function(x){var r=RES[s.result[x]||''],g=s.grades[x]||{};
    html+='<div class="card" style="margin-bottom:14px"><div class="row" style="margin-bottom:10px"><span class="avatar">'+initials(pname(s.pilots[x]))+'</span><div style="flex:1;min-width:0"><div class="eyebrow">'+x.toUpperCase()+'</div><h3>'+esc(pname(s.pilots[x]))+'</h3></div><span class="pill '+r[1]+'">'+r[0]+'</span><span class="gchip '+gcls(sessAvg(s,x))+'" style="width:40px">'+f1(sessAvg(s,x))+'</span></div><div class="scroll-x"><table class="tbl"><tbody>'+
    CK.map(function(k){var e=g[k]||{},ob=e.ob||{};var obs=Object.keys(ob).filter(function(o){return ob[o];}).map(function(o){return '<span class="tag" style="'+(ob[o]<0?'color:var(--bad)':'color:var(--ok)')+'" title="'+esc(obText(k,o))+'">'+(ob[o]<0?'−':'+')+o+'</span>';}).join(' ');
      return '<tr><td style="width:50px"><span class="code">'+k+'</span></td><td style="width:40px"><span class="gchip '+(e.no?'gc0':gcls(e.g))+'" '+(e.no?'style="font-size:10px"':'')+'>'+gtxt(e)+'</span></td><td><div class="small">'+esc(CMAP[k].es)+'</div>'+(obs?'<div class="tags">'+obs+'</div>':'')+(e.note?'<div class="small muted" style="margin-top:4px">'+esc(e.note)+'</div>':'')+'</td></tr>';}).join('')+'</tbody></table></div></div>';});
  if(s.events&&s.events.length)html+='<div class="card" style="margin-bottom:14px"><h3 style="margin-bottom:6px">Eventos</h3>'+s.events.map(function(e){return '<div class="ev"><span class="check'+(e.done?' on':'')+'" style="cursor:default">'+(e.done?I.check:'')+'</span><div style="min-width:0"><div>'+(e.at?'<span class="pill num" style="margin-right:6px">'+hhmm(e.at)+'</span>':'')+esc(e.t)+'</div><div class="tags">'+(e.c||[]).map(function(c){return '<span class="tag">'+c+'</span>';}).join('')+'</div>'+(e.note?'<div class="small muted" style="margin-top:3px">'+esc(e.note)+'</div>':'')+(e.g&&(e.g.cm1||e.g.cm2)?'<div class="row" style="gap:6px;margin-top:4px">'+seats(s).map(function(x){return e.g[x]?'<span class="tiny muted">'+x.toUpperCase()+'</span><span class="gchip '+gcls(e.g[x])+'" style="width:22px;height:22px;font-size:12px">'+e.g[x]+'</span>':'';}).join('')+'</div>':'')+'</div></div>';}).join('')+'</div>';
  if(temList(s).length)html+=temCard(s,false).replace('margin-bottom:16px','margin-bottom:14px');
  debTargets(s).forEach(function(t){if(t.val)html+='<div class="card" style="margin-bottom:14px"><h3 style="margin-bottom:6px">Debriefing'+(t.label?' · '+esc(t.label):'')+'</h3><p style="white-space:pre-wrap">'+esc(t.val)+'</p></div>';});
  var who=[['inst','Instructor']].concat(seats(s).map(function(x){return [x,x.toUpperCase()];}));
  html+='<div class="card" style="margin-bottom:14px"><h3 style="margin-bottom:10px">Firmas</h3><div class="grid g3">'+who.map(function(w){return '<div><div class="tiny muted" style="margin-bottom:4px">'+w[1]+'</div>'+(s.sig[w[0]]?'<img class="sigimg" alt="Firma '+w[1]+'" src="'+s.sig[w[0]]+'">':'<div class="sigimg" style="display:grid;place-items:center;color:var(--faint);font-size:12px">'+(s.example?'Ejemplo sin firma':'Sin firma')+'</div>')+'</div>';}).join('')+'</div></div>';
  if(isCoord()||(s.status==='draft'&&isMine(s)))html+='<div class="row"><button class="btn danger sm" data-act="delSession" data-id="'+s.id+'">'+I.trash+'Eliminar sesión</button></div>';
  return html;
}
function pilotForm(){
  var f=S.ui.form;
  function inp(id,k,l,ph){return '<div class="field"><label for="'+id+'">'+l+'</label><input class="input" id="'+id+'" data-fb="'+k+'" value="'+esc(f[k]||'')+'" placeholder="'+esc(ph||'')+'"></div>';}
  return '<div class="stack">'+inp('pf-n','name','Nombre completo','Nombre y apellido')+'<div class="grid g2" style="gap:12px">'+inp('pf-e','emp','Código de empleado')+inp('pf-b','base','Base','BOG')+'</div>'+
   '<div class="field"><label>Cargo</label><div class="seg"><button class="'+(f.rank==='CPT'?'on':'')+'" data-act="form" data-k="rank" data-v="CPT">Capitán</button><button class="'+(f.rank==='FO'?'on':'')+'" data-act="form" data-k="rank" data-v="FO">Primer oficial</button></div></div>'+
   '<div class="field"><label>Flota</label><div class="seg">'+S.settings.fleets.map(function(x){return '<button class="'+(f.fleet===x?'on':'')+'" data-act="form" data-k="fleet" data-v="'+esc(x)+'">'+esc(x)+'</button>';}).join('')+'</div></div>'+
   (f.id&&isCoord()?'<hr class="sep"><button class="btn danger sm" data-act="delPilot" data-id="'+f.id+'" style="align-self:flex-start">'+I.trash+'Eliminar piloto</button>':'')+'</div>';
}
function tplForm(){
  var f=S.ui.form,st=S.settings;
  return '<div class="stack"><div class="field"><label for="tf-n">Nombre</label><input class="input" id="tf-n" data-fb="name" value="'+esc(f.name||'')+'" placeholder="EVAL A320 · Módulo 2"></div>'+
   '<div class="grid g3" style="gap:12px"><div class="field"><label for="tf-m">Módulo</label><select class="input" id="tf-m" data-fb="module">'+st.modules.map(function(m){return '<option'+(f.module===m?' selected':'')+'>'+esc(m)+'</option>';}).join('')+'</select></div>'+
   '<div class="field"><label for="tf-f">Flota</label><select class="input" id="tf-f" data-fb="fleet">'+st.fleets.map(function(m){return '<option'+(f.fleet===m?' selected':'')+'>'+esc(m)+'</option>';}).join('')+'</select></div>'+
   '<div class="field"><label for="tf-p">Fase</label><select class="input" id="tf-p" data-fb="phase">'+st.phases.map(function(m){return '<option'+(f.phase===m?' selected':'')+'>'+esc(m)+'</option>';}).join('')+'</select></div></div>'+
   '<div class="field"><label for="tf-note">Notas</label><input class="input" id="tf-note" data-fb="note" value="'+esc(f.note||'')+'" placeholder="Referencia: FCTS, Handbook, matriz del módulo"></div>'+
   '<div class="eyebrow" style="margin-top:6px">Eventos y competencias expuestas</div>'+
   (f.events||[]).map(function(e,i){return '<div class="card" style="padding:12px 14px;box-shadow:inset 0 0 0 1px var(--line)"><div class="row"><input class="input" id="tf-e'+i+'" data-fe="'+i+'" value="'+esc(e.t)+'" placeholder="Descripción del evento" style="flex:1;min-width:180px"><select class="input" id="tf-ph'+i+'" data-fep="'+i+'" style="width:auto;max-width:180px"><option value="">Sin fase</option>'+(S.settings.flightPhases||[]).map(function(p){return '<option'+(e.phase===p?' selected':'')+'>'+esc(p)+'</option>';}).join('')+'</select><button class="btn ghost sm" data-act="tplEvDel" data-i="'+i+'" aria-label="Quitar">'+I.x+'</button></div><div class="tags" style="margin-top:8px">'+CK.map(function(k){return '<button class="tag'+((e.c||[]).indexOf(k)>=0?' on':'')+'" data-act="tplEvC" data-i="'+i+'" data-k="'+k+'">'+k+'</button>';}).join('')+'</div></div>';}).join('')+
   '<button class="btn sm" data-act="tplEvAdd" style="align-self:flex-start">'+I.plus+'Agregar evento</button>'+
   (f.id?'<hr class="sep"><button class="btn danger sm" data-act="delTpl" data-id="'+f.id+'" style="align-self:flex-start">'+I.trash+'Eliminar plantilla</button>':'')+'</div>';
}
/* ============ Agenda y avisos ============ */
var SLOT_ST={scheduled:['Programada',''],confirmed:['Confirmada','ok'],rescheduled:['Reprogramada','warn'],cancelled:['Cancelada','bad'],done:['Realizada','acc']};
var NOTE_K={cae:['Simulador','acc'],cambio:['Cambio de horario','warn'],cancelacion:['Cancelación','bad'],general:['General','']};
var DOW=['dom','lun','mar','mié','jue','vie','sáb'],MESL=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
function dow(s){var p=s.split('-');return DOW[new Date(+p[0],+p[1]-1,+p[2]).getDay()];}
function monthKey(s){return String(s||'').slice(0,7);}
function unreadNotices(){var seen=S.ui.seenNotices||0;return live('notices').filter(function(n){return (n.ts||0)>seen;}).length;}
function slotPilots(sl){return [sl.cm1,sl.cm2].filter(Boolean);}
function slotName(id){if(!id)return '';var p=pilot(id);return p?p.name:id;}
function slotCrew(sl){return slotPilots(sl).map(function(x){return esc(slotName(x));}).join(' · ')||'<span class="muted">Sin tripulación asignada</span>';}
function slotsOf(month){return live('schedule').filter(function(s){return !month||monthKey(s.date)===month;}).sort(function(a,b){return (a.date+a.time).localeCompare(b.date+b.time);});}
function slotRow(sl){
  var st=SLOT_ST[sl.status]||SLOT_ST.scheduled,mine=isMine(sl);
  return '<button class="li" data-act="openSlot" data-id="'+sl.id+'"'+(sl.status==='cancelled'?' style="opacity:.6"':'')+'><div style="width:52px;flex:none;text-align:center"><div class="num" style="font-weight:700;font-size:15px">'+esc(sl.time||'—')+'</div><div class="tiny muted num">'+esc(sl.end||'')+'</div></div><div class="grow"><div class="t"><span class="pill acc" style="height:20px;margin-right:6px">'+esc(sl.phase)+'</span>'+slotCrew(sl)+'</div><div class="small muted" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(sl.sim||'Simulador por asignar')+' · '+esc(sl.fleet)+(sl.instructor?' · '+esc(sl.instructor):'')+'</div></div>'+(mine?'<span class="pill">Tuya</span>':'')+(sl.sessionId?'<span class="pill ok">Evaluada</span>':'<span class="pill '+st[1]+'">'+st[0]+'</span>')+I.chev+'</button>';
}
function noticeRow(n,compact){
  var k=NOTE_K[n.kind]||NOTE_K.general,isNew=(n.ts||0)>(S.ui.seenNotices||0);
  return '<div class="flag" style="flex-direction:column;align-items:stretch;gap:4px"><div class="row" style="gap:8px"><span class="pill '+k[1]+'" style="flex:none">'+k[0]+'</span><div style="flex:1;min-width:0;font-weight:600">'+(isNew?'<span class="dot" style="display:inline-block;background:var(--accent);margin-right:6px;vertical-align:middle"></span>':'')+esc(n.title)+'</div></div>'+(compact?'':'<div class="small" style="white-space:pre-wrap">'+esc(n.body||'')+'</div>')+
   '<div class="row" style="gap:8px"><span class="tiny muted" style="flex:1;min-width:0">'+ftime(n.ts)+(n.by?' · '+esc(n.by):'')+'</span>'+(n.scheduleId&&S.schedule[n.scheduleId]?'<button class="btn ghost sm" data-act="openSlot" data-id="'+n.scheduleId+'">Ver sesión</button>':'')+(compact||!(isCoord()||n.by===S.settings.instructor)?'':'<button class="btn ghost sm" data-act="delNotice" data-id="'+n.id+'" aria-label="Eliminar aviso" style="color:var(--muted)">'+I.x+'</button>')+'</div></div>';
}
function inicioAgenda(){
  var t=today(),up=live('schedule').filter(function(s){return s.date>=t&&s.status!=='cancelled';}).sort(function(a,b){return (a.date+a.time).localeCompare(b.date+b.time);}).slice(0,4);
  var ns=live('notices').sort(function(a,b){return (b.ts||0)-(a.ts||0);}).slice(0,3);
  if(!up.length&&!ns.length)return '';
  var byDay={};up.forEach(function(s){(byDay[s.date]=byDay[s.date]||[]).push(s);});
  return '<div class="grid g2" style="margin-bottom:16px"><div class="card" style="padding:0;overflow:hidden"><div class="card-head" style="padding:16px 20px 6px;margin:0"><div><h3>Próximas sesiones</h3><p class="small muted">'+(up.length?(up[0].date===t?'Hoy':'Siguiente: '+dow(up[0].date)+' '+fdate(up[0].date)):'Nada programado')+'</p></div><button class="btn ghost sm" data-act="go" data-r="agenda">Agenda</button></div>'+
   (up.length?Object.keys(byDay).map(function(d){return '<div class="eyebrow" style="padding:8px 20px 2px">'+(d===t?'Hoy · ':'')+dow(d)+' '+fdate(d)+'</div>'+byDay[d].map(slotRow).join('');}).join(''):'<p class="small muted" style="padding:0 20px 16px">Importa el cronograma del mes o programa una sesión.</p>')+'</div>'+
   '<div class="card"><div class="card-head"><div><h3>Avisos</h3><p class="small muted">'+(unreadNotices()?unreadNotices()+' sin leer':'Al día')+'</p></div><button class="btn ghost sm" data-act="go" data-r="agenda">Ver todos</button></div>'+(ns.length?ns.map(function(n){return noticeRow(n,true);}).join(''):'<p class="small muted">Sin avisos.</p>')+'</div></div>';
}
function vAgenda(){
  var m=S.ui.month||(S.ui.month=today().slice(0,7));var p=m.split('-'),y=+p[0],mo=+p[1];
  function shift(d){var dt=new Date(y,mo-1+d,1);return dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0');}
  var ss=slotsOf(m),t=today();
  var html=head('Agenda','Cronograma de simulador y avisos.',(isCoord()?'<button class="btn" data-act="importSched">'+I.up+'Importar cronograma</button>':'')+(isCoord()?'<button class="btn" data-act="newNotice">'+I.bell+'Aviso</button>':'')+(isCoord()?'<button class="btn primary" data-act="newSlot">'+I.plus+'Programar</button>':''));
  var ns=live('notices').sort(function(a,b){return (b.ts||0)-(a.ts||0);});
  html+='<div class="card" style="margin-bottom:16px"><div class="card-head"><div><h3>Avisos</h3><p class="small muted">Cambios de horario, cancelaciones e información de simulador</p></div>'+(unreadNotices()?'<button class="btn sm" data-act="markRead">Marcar leídos</button>':'')+'</div>'+(ns.length?ns.slice(0,S.ui.allNotices?999:5).map(function(n){return noticeRow(n);}).join('')+(ns.length>5&&!S.ui.allNotices?'<button class="btn ghost sm" data-act="allNotices" style="margin-top:8px">Ver los '+ns.length+' avisos</button>':''):'<p class="small muted">Sin avisos todavía.</p>')+'</div>';
  html+='<div class="row" style="margin-bottom:12px"><button class="btn sm" data-act="month" data-v="'+shift(-1)+'">'+I.back+'</button><h2 style="min-width:190px;text-align:center">'+MESL[mo-1]+' '+y+'</h2><button class="btn sm" data-act="month" data-v="'+shift(1)+'">'+I.chev.replace('class="chev"','')+'</button>'+(m!==t.slice(0,7)?'<button class="btn ghost sm" data-act="month" data-v="'+t.slice(0,7)+'">Hoy</button>':'')+'<span class="spacer"></span><div class="seg"><button class="'+(!S.ui.onlyMine?'on':'')+'" data-act="onlyMine" data-v="">Todas</button><button class="'+(S.ui.onlyMine?'on':'')+'" data-act="onlyMine" data-v="1">Mis sesiones</button></div></div>';
  if(S.ui.onlyMine==null)S.ui.onlyMine=!isCoord();
  if(S.ui.onlyMine)ss=ss.filter(function(s){return isMine(s);});
  var n=ss.filter(function(s){return s.status!=='cancelled';}).length,c=ss.length-n;
  html+='<p class="small muted" style="margin-bottom:10px">'+n+' sesión'+(n===1?'':'es')+(c?' · '+c+' cancelada'+(c===1?'':'s'):'')+' · '+ss.filter(function(s){return s.sessionId;}).length+' evaluada'+(ss.filter(function(s){return s.sessionId;}).length===1?'':'s')+'</p>';
  if(!ss.length)return html+'<div class="card">'+empty('cal','Sin sesiones en '+MESL[mo-1],'Importa el cronograma mensual (CSV o JSON con fecha, hora, fase, módulo, flota, CM1, CM2, instructor y simulador) o programa una sesión manualmente.',isCoord()?'<div class="row" style="justify-content:center"><button class="btn" data-act="importSched">'+I.up+'Importar cronograma</button><button class="btn primary" data-act="newSlot">'+I.plus+'Programar sesión</button></div>':'')+'</div>';
  var byDay={};ss.forEach(function(s){(byDay[s.date]=byDay[s.date]||[]).push(s);});
  html+=Object.keys(byDay).sort().map(function(d){var past=d<t;return '<div class="eyebrow" style="margin:14px 0 6px;'+(past?'opacity:.6':'')+(d===t?'color:var(--accent)':'')+'">'+(d===t?'Hoy · ':'')+dow(d)+' '+fdate(d)+'</div><div class="list"'+(past?' style="opacity:.75"':'')+'>'+byDay[d].map(slotRow).join('')+'</div>';}).join('');
  return html;
}
function prepCard(pid){
  var p=pilot(pid);if(!p)return '<div class="note">Trainee «'+esc(pid)+'» no está registrado. Agrégalo en Trainees para ver su historial.</div>';
  var ss=pilotSessions(pid).filter(function(s){return s.status==='signed';}),last=ss[ss.length-1],w=weaknesses(pid);
  var html='<div class="card" style="padding:14px 16px"><div class="row" style="margin-bottom:8px"><span class="avatar">'+initials(p.name)+'</span><div style="flex:1;min-width:0"><div style="font-weight:600">'+esc(p.name)+'</div><div class="small muted">'+esc(p.rank==='CPT'?'Capitán':'Primer oficial')+' · '+esc(p.fleet)+' · '+ss.length+' sesión'+(ss.length===1?'':'es')+(last?' · última '+esc(last.phase)+' '+fdateShort(last.date)+' ('+f1(sessAvg(last,seatOf(last,pid)))+')':'')+'</div></div><button class="btn sm" data-act="openPilot" data-id="'+pid+'">Perfil</button></div>';
  if(!last)return html+'<p class="small muted">Sin historial firmado.</p></div>';
  html+='<div style="display:grid;grid-template-columns:repeat(9,1fr);gap:4px;margin-bottom:10px">'+CK.map(function(k){var v=last.grades[seatOf(last,pid)][k];v=v&&v.g;return '<div style="text-align:center"><div class="tiny muted" style="font-family:var(--mono)">'+k+'</div><span class="gchip '+gcls(v)+'" style="width:100%">'+(v||'·')+'</span></div>';}).join('')+'</div>';
  if(w.comp.length||w.obs.length||w.events.length){html+='<div class="eyebrow" style="margin-bottom:4px">Atención</div><div class="small">'+(w.comp.length?'<div><b>Competencias en 1–2:</b> '+w.comp.map(function(c){return c.k+' ('+c.n+'×)';}).join(', ')+'</div>':'')+(w.obs.length?'<div><b>OB deficientes:</b> '+w.obs.slice(0,6).map(function(o){return 'OB '+o.o;}).join(', ')+'</div>':'')+(w.events.length?'<div><b>Reforzar:</b> '+w.events.slice(0,3).map(function(e){return esc(e.t);}).join('; ')+'</div>':'')+'</div>';}
  else html+='<p class="small muted">Sin falencias registradas en el historial.</p>';
  return html+'</div>';
}
function slotDetail(sl){
  var st=SLOT_ST[sl.status]||SLOT_ST.scheduled;
  var html='<div class="row" style="margin-bottom:14px"><span class="pill '+st[1]+'">'+st[0]+'</span>'+(sl.sessionId?'<span class="pill ok">Evaluada</span>':'')+(sl.example?'<span class="pill">Ejemplo</span>':'')+'<span class="spacer"></span>'+(isCoord()?'<button class="btn sm" data-act="editSlot" data-id="'+sl.id+'">'+I.pen+'Editar</button>':'')+'</div>';
  html+='<div class="card" style="margin-bottom:14px"><dl class="kv"><dt>Fecha</dt><dd>'+dow(sl.date)+' '+fdate(sl.date)+' · '+esc(sl.time||'')+(sl.end?'–'+esc(sl.end):'')+'</dd><dt>Sesión</dt><dd>'+esc(sl.phase)+' <span class="muted small">('+esc(phaseName(sl.phase))+')</span> · '+esc(sl.module)+' · '+esc(sl.fleet)+'</dd><dt>Simulador</dt><dd>'+esc(sl.sim||'Por asignar')+'</dd><dt>Instructor</dt><dd>'+esc(sl.instructor||'Por asignar')+'</dd>'+(sl.note?'<dt>Nota</dt><dd style="font-weight:500">'+esc(sl.note)+'</dd>':'')+'</dl></div>';
  if(sl.sessionId&&S.sessions[sl.sessionId])html+='<button class="btn" data-act="openSession" data-id="'+sl.sessionId+'" style="margin-bottom:14px">'+I.doc+'Ver evaluación</button>';
  html+='<div class="eyebrow" style="margin-bottom:8px">Preparación · trainees a evaluar</div><div class="stack" style="gap:10px;margin-bottom:14px">'+(slotPilots(sl).length?slotPilots(sl).map(prepCard).join(''):'<p class="small muted">Sin tripulación asignada.</p>')+'</div>';
  var ns=live('notices').filter(function(n){return n.scheduleId===sl.id;});if(ns.length)html+='<div class="card" style="margin-bottom:14px"><h3 style="margin-bottom:4px">Avisos de esta sesión</h3>'+ns.map(function(n){return noticeRow(n,true);}).join('')+'</div>';
  if(isCoord())html+='<div class="eyebrow" style="margin-bottom:8px">Estado</div><div class="row" style="margin-bottom:14px">'+['confirmed','rescheduled','cancelled','scheduled'].filter(function(k){return k!==sl.status;}).map(function(k){return '<button class="btn sm'+(k==='cancelled'?' danger':'')+'" data-act="slotStatus" data-id="'+sl.id+'" data-v="'+k+'">'+SLOT_ST[k][0]+'</button>';}).join('')+'</div>';
  if(isCoord())html+='<div class="row"><button class="btn danger sm" data-act="delSlot" data-id="'+sl.id+'">'+I.trash+'Eliminar</button></div>';
  return html;
}
function slotForm(){
  var f=S.ui.form,st=S.settings,ps=live('trainees').filter(function(p){return p.fleet===f.fleet;}).sort(function(a,b){return a.name.localeCompare(b.name);});
  function sel(id,k,opts,blank){return '<select class="input" id="'+id+'" data-fb="'+k+'"'+(k==='fleet'?' data-rerender="1"':'')+'>'+(blank?'<option value="">'+blank+'</option>':'')+opts.map(function(o){var v=typeof o==='string'?o:o[0],l=typeof o==='string'?o:o[1];return '<option value="'+esc(v)+'"'+(f[k]===v?' selected':'')+'>'+esc(l)+'</option>';}).join('')+'</select>';}
  var popts=ps.map(function(p){return [p.id,p.name+' · '+(p.rank==='CPT'?'CPT':'FO')];});
  return '<div class="stack"><div class="grid g3" style="gap:12px"><div class="field"><label for="sf-d">Fecha</label><input type="date" class="input" id="sf-d" data-fb="date" value="'+esc(f.date||'')+'"></div><div class="field"><label for="sf-t">Inicio</label><input type="time" class="input" id="sf-t" data-fb="time" value="'+esc(f.time||'')+'"></div><div class="field"><label for="sf-e">Fin</label><input type="time" class="input" id="sf-e" data-fb="end" value="'+esc(f.end||'')+'"></div></div>'+
   '<div class="grid g3" style="gap:12px"><div class="field"><label for="sf-m">Módulo</label>'+sel('sf-m','module',st.modules)+'</div><div class="field"><label for="sf-f">Flota</label>'+sel('sf-f','fleet',st.fleets)+'</div><div class="field"><label for="sf-p">Fase</label>'+sel('sf-p','phase',st.phases)+'</div></div>'+
   '<div class="field"><label for="sf-s">Simulador</label>'+sel('sf-s','sim',st.sims||[],'Por asignar')+'</div>'+
   '<div class="grid g2" style="gap:12px"><div class="field"><label for="sf-1">CM1</label>'+sel('sf-1','cm1',popts,'Sin asignar')+'</div><div class="field"><label for="sf-2">CM2</label>'+sel('sf-2','cm2',popts,'Sin asignar')+'</div></div>'+
   '<div class="field"><label for="sf-i">Instructor</label>'+sel('sf-i','iid',Object.keys(members()).map(function(k){var m=members()[k];return [k,(m.full_name||m.email)+(m.ie_code?' · '+m.ie_code:'')];}).filter(function(o){return members()[o[0]].status==='active';}),'Por asignar')+'</div>'+
   '<div class="field"><label for="sf-n">Nota</label><input class="input" id="sf-n" data-fb="note" value="'+esc(f.note||'')+'" placeholder="Ej. refuerzo WLM; cambio de simulador"></div></div>';
}
function noticeForm(){
  var f=S.ui.form,sl=slotsOf('').filter(function(s){return s.date>=today();});
  return '<div class="stack"><div class="field"><label>Tipo</label><div class="seg full">'+Object.keys(NOTE_K).map(function(k){return '<button class="'+(f.kind===k?'on':'')+'" data-act="form" data-k="kind" data-v="'+k+'">'+NOTE_K[k][0]+'</button>';}).join('')+'</div></div>'+
   '<div class="field"><label for="nf-t">Título</label><input class="input" id="nf-t" data-fb="title" value="'+esc(f.title||'')+'" placeholder="Ej. FFS A320 #2 fuera de servicio el 10 oct"></div>'+
   '<div class="field"><label for="nf-b">Detalle</label><textarea class="input" id="nf-b" data-fb="body" style="min-height:90px">'+esc(f.body||'')+'</textarea></div>'+
   '<div class="field"><label for="nf-s">Sesión relacionada (opcional)</label><select class="input" id="nf-s" data-fb="scheduleId"><option value="">Ninguna</option>'+sl.map(function(s){return '<option value="'+s.id+'"'+(f.scheduleId===s.id?' selected':'')+'>'+esc(fdate(s.date)+' '+(s.time||'')+' · '+s.phase+' · '+slotPilots(s).map(function(x){return slotName(x).split(' ')[0];}).join('/'))+'</option>';}).join('')+'</select></div></div>';
}
function addNotice(kind,title,body,scheduleId){put('notices',{id:uid('n'),ts:Date.now(),kind:kind,title:title,body:body||'',scheduleId:scheduleId||'',by:S.settings.instructor},true);}
function matchPilot(txt,fleet){txt=String(txt||'').trim();if(!txt)return '';var low=txt.toLowerCase();var ps=live('trainees');var hit=ps.filter(function(p){return p.id===txt||(p.emp&&p.emp===txt)||p.name.toLowerCase()===low;})[0]||ps.filter(function(p){return p.name.toLowerCase().indexOf(low)>=0||low.indexOf(p.name.toLowerCase())>=0;})[0];return hit?hit.id:'';}
function importSchedule(text,name){
  var rows=[];
  try{
    if(/^\s*[\[{]/.test(text)){var o=JSON.parse(text);rows=Array.isArray(o)?o:(o.schedule?(Array.isArray(o.schedule)?o.schedule:Object.keys(o.schedule).map(function(k){return o.schedule[k];})):[o]);}
    else{var lines=text.split(/\r?\n/).filter(function(l){return l.trim();});var sep=(lines[0].match(/;/g)||[]).length>=(lines[0].match(/,/g)||[]).length?';':',';
      var hd=lines[0].split(sep).map(function(h){return h.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');});
      rows=lines.slice(1).map(function(l){var c=l.split(sep);var r={};hd.forEach(function(h,i){r[h]=(c[i]||'').trim().replace(/^"|"$/g,'');});return r;});}
  }catch(e){toast('No se pudo leer el archivo');return;}
  function pick(r,keys){for(var i=0;i<keys.length;i++){if(r[keys[i]]!=null&&r[keys[i]]!=='')return r[keys[i]];}return '';}
  var n=0;rows.forEach(function(r){
    var date=pick(r,['date','fecha']);if(!date)return;if(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)){var p=date.split('/');date=p[2]+'-'+p[1].padStart(2,'0')+'-'+p[0].padStart(2,'0');}
    var fleet=pick(r,['fleet','flota'])||S.settings.fleets[0];
    var rec={id:r.id||uid('a'),date:date,time:pick(r,['time','hora','inicio']),end:pick(r,['end','fin','hora fin']),module:pick(r,['module','modulo'])||S.settings.module,fleet:fleet,phase:(pick(r,['phase','fase'])||'EVAL').toUpperCase(),sim:pick(r,['sim','simulador','ffs']),cm1:matchPilot(pick(r,['cm1','piloto1','capitan','cpt']),fleet),cm2:matchPilot(pick(r,['cm2','piloto2','primer oficial','fo']),fleet),instructor:pick(r,['instructor','ie']),status:r.status||'scheduled',note:pick(r,['note','nota','observaciones']),sessionId:''};var im=memberByName(rec.instructor);rec.iid=im?im.user_id:'';rec.instructor=im?memberName(im.user_id):rec.instructor;var miss=[];if(!rec.cm1&&pick(r,['cm1','piloto1','capitan','cpt']))miss.push('CM1 '+pick(r,['cm1','piloto1','capitan','cpt']));if(!rec.cm2&&pick(r,['cm2','piloto2','primer oficial','fo']))miss.push('CM2 '+pick(r,['cm2','piloto2','primer oficial','fo']));if(miss.length)rec.note=(rec.note?rec.note+' · ':'')+'No registrado: '+miss.join(', ');if(!isUuid(rec.id))rec.id=uid('a');
    var ex=S.schedule[rec.id];if(ex){rec.sessionId=ex.sessionId;rec.status=ex.status;}put('schedule',rec,true);n++;});
  if(n){addNotice('cae','Cronograma importado','Se cargaron '+n+' sesiones desde '+(name||'archivo')+'.','');var first=rows.map(function(r){return r.date||r.fecha||'';}).filter(Boolean).sort()[0];if(first)S.ui.month=monthKey(first);}
  render();toast(n?n+' sesiones importadas':'No se encontraron filas con fecha');
}
var AGENDA_ACT={
  month:function(el){S.ui.month=el.dataset.v;render();window.scrollTo(0,0);},
  onlyMine:function(el){S.ui.onlyMine=!!el.dataset.v;render();},
  allNotices:function(){S.ui.allNotices=true;render();},
  markRead:function(){S.ui.seenNotices=Date.now();persist();render();},
  openSlot:function(el){openSheet({type:'slot',id:el.dataset.id});},
  newSlot:function(){S.ui.form={date:today(),time:'08:00',end:'12:00',module:S.settings.module,fleet:S.settings.fleets[0],phase:S.settings.phases[0],sim:'',cm1:'',cm2:'',iid:myId(),note:''};openSheet({type:'slotForm'});},
  editSlot:function(el){S.ui.form=JSON.parse(JSON.stringify(S.schedule[el.dataset.id]));openSheet({type:'slotForm',id:el.dataset.id});},
  saveSlot:function(){var f=S.ui.form;if(!f.date)return toast('Indica la fecha');if(f.cm1&&f.cm1===f.cm2)return toast('CM1 y CM2 deben ser distintos');var isNew=!f.id;var prev=f.id&&S.schedule[f.id];var r=Object.assign({},f,{id:f.id||uid('a'),status:f.status||'scheduled',sessionId:f.sessionId||'',instructor:memberName(f.iid)});
    if(prev&&(prev.date!==r.date||prev.time!==r.time||prev.sim!==r.sim)){if(prev.date!==r.date||prev.time!==r.time)r.status='rescheduled';addNotice('cambio','Sesión '+r.phase+' '+(slotPilots(r).map(function(x){return slotName(x).split(' ')[0];}).join('/')||'')+' reprogramada','Antes: '+fdate(prev.date)+' '+(prev.time||'')+' · '+(prev.sim||'')+'\nAhora: '+fdate(r.date)+' '+(r.time||'')+' · '+(r.sim||''),r.id);}
    put('schedule',r,true);S.ui.sheet=null;S.ui.month=monthKey(r.date);render();toast(isNew?'Sesión programada':'Sesión actualizada');},
  slotStatus:function(el){var sl=S.schedule[el.dataset.id];var v=el.dataset.v;sl.status=v;put('schedule',sl,true);
    if(v==='cancelled')addNotice('cancelacion','Cancelada: '+sl.phase+' '+fdate(sl.date)+' '+(sl.time||''),slotPilots(sl).map(slotName).join(' / ')+' · '+(sl.sim||''),sl.id);
    render();toast('Estado: '+SLOT_ST[v][0]);},
  delSlot:function(el){openSheet({type:'confirm',title:'Eliminar sesión programada',msg:'Se quitará del cronograma para todos los instructores.',act:'delSlotYes',id:el.dataset.id});},
  startFromSlot:function(el){var sl=S.schedule[el.dataset.id];S.ui.cur=null;S.ui.setup=null;vSetup();Object.assign(S.ui.setup,{date:sl.date,module:sl.module,fleet:sl.fleet,phase:sl.phase,mode:sl.cm2?'crew':'single',cm1:pilot(sl.cm1)?sl.cm1:'',cm2:pilot(sl.cm2)?sl.cm2:'',slotId:sl.id});
    var t=live('evals').filter(function(e){return e.fleet===sl.fleet&&e.phase===sl.phase&&e.module===sl.module;})[0]||live('evals').filter(function(e){return e.fleet===sl.fleet&&e.phase===sl.phase;})[0];if(t)S.ui.setup.templateId=t.id;go('evaluar');},
  newNotice:function(){S.ui.form={kind:'general',title:'',body:'',scheduleId:''};openSheet({type:'notice'});},
  saveNotice:function(){var f=S.ui.form;if(!f.title||!f.title.trim())return toast('Escribe el título del aviso');addNotice(f.kind,f.title.trim(),f.body,f.scheduleId);S.ui.sheet=null;render();toast('Aviso publicado');},
  delNotice:function(el){remove('notices',el.dataset.id);}
};
/* ============ Calibración de instructores ============ */
function hhmm(ms){var d=new Date(ms);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0');}
function simClock(s){if(!s.startedAt)return '';var m=Math.max(0,Math.round((Date.now()-s.startedAt)/60000));return hhmm(s.startedAt)+' · '+Math.floor(m/60)+'h '+String(m%60).padStart(2,'0')+'m';}
setInterval(function(){var el=document.getElementById('simclock'),s=typeof cur==='function'&&cur();if(el&&s&&s.startedAt){el.lastChild.nodeValue=simClock(s);}},30000);
function stats(arr){var n=arr.length;if(!n)return {n:0,mean:0,sd:0,p45:0,p12:0};var m=arr.reduce(function(a,b){return a+b;},0)/n;var v=arr.reduce(function(a,b){return a+(b-m)*(b-m);},0)/n;return {n:n,mean:m,sd:Math.sqrt(v),p45:arr.filter(function(x){return x>=4;}).length/n,p12:arr.filter(function(x){return x<=2;}).length/n};}
function calib(ss){
  var by={},all=[];
  ss.forEach(function(s){var ie=s.instructor||'Sin instructor';var o=by[ie]||(by[ie]={ie:ie,g:[],sessions:0,comp:{}});o.sessions++;
    seats(s).forEach(function(x){var g=s.grades[x]||{};CK.forEach(function(k){if(g[k]&&g[k].g){o.g.push(g[k].g);all.push(g[k].g);(o.comp[k]=o.comp[k]||[]).push(g[k].g);}});});});
  var G=stats(all);
  var rows=Object.keys(by).map(function(ie){var o=by[ie],st=stats(o.g);var d=st.mean-G.mean;var flags=[];
    if(st.n<18)flags.push(['Pocas sesiones','']);
    if(d>0.5)flags.push(['Tendencia leniente','warn']);if(d<-0.5)flags.push(['Tendencia severa','warn']);
    if(st.n>=18&&st.sd<0.45)flags.push(['Poca dispersión','warn']);
    if(st.n>=18&&st.p12===0&&G.p12>0.08)flags.push(['Nunca califica 1–2','']);
    var dist=[0,0,0,0,0,0];o.g.forEach(function(v){dist[v]++;});
    return {ie:ie,sessions:o.sessions,st:st,d:d,flags:flags,dist:dist,comp:o.comp};}).sort(function(a,b){return b.st.n-a.st.n;});
  return {G:G,rows:rows,groupComp:compAverages(ss)};
}
function vCalibracion(ss){
  var c=calib(ss),G=c.G;
  var html='<div class="grid g4" style="margin-bottom:16px">'+kpi('Instructores',c.rows.length,'con sesiones firmadas en el filtro')+kpi('Promedio del grupo',f1(G.mean),'desv. '+f1(G.sd))+kpi('% grados 4–5',Math.round(G.p45*100)+'%','del total de calificaciones')+kpi('% grados 1–2',Math.round(G.p12*100)+'%',G.n+' calificaciones',G.p12>0.2?'var(--warn)':'')+'</div>';
  html+='<div class="card" style="margin-bottom:16px"><div class="card-head"><div><h3>Concordancia entre instructores</h3><p class="small muted">Desviación del promedio de cada instructor frente al grupo. Se marcan tendencias leniente o severa (±0,5) y poca dispersión (todos los grados iguales).</p></div></div><div class="scroll-x"><table class="tbl"><thead><tr><th>Instructor</th><th>Sesiones</th><th>Calif.</th><th>Promedio</th><th>vs. grupo</th><th>Distribución</th><th>% 4–5</th><th>% 1–2</th><th>Señales</th></tr></thead><tbody>'+
   c.rows.map(function(r){var dc=Math.abs(r.d)>0.5?'var(--warn)':'var(--muted)';var tot=r.st.n||1;
     return '<tr><td style="font-weight:600;white-space:nowrap">'+esc(r.ie)+'</td><td class="num">'+r.sessions+'</td><td class="num">'+r.st.n+'</td><td><span class="gchip '+gcls(r.st.mean)+'" style="width:36px">'+f1(r.st.mean)+'</span></td><td class="num" style="color:'+dc+';font-weight:600">'+(r.d>=0?'+':'')+f1(Math.abs(r.d)<0.05?0:r.d).replace('—','0,0')+'</td>'+
     '<td style="min-width:140px"><div style="display:flex;height:12px;border-radius:4px;overflow:hidden;gap:1px;background:var(--line)">'+[1,2,3,4,5].map(function(g){return r.dist[g]?'<div title="'+g+': '+r.dist[g]+'" style="width:'+(r.dist[g]/tot*100)+'%;background:var(--g'+g+')"></div>':'';}).join('')+'</div></td>'+
     '<td class="num">'+Math.round(r.st.p45*100)+'%</td><td class="num">'+Math.round(r.st.p12*100)+'%</td><td>'+(r.flags.length?r.flags.map(function(f){return '<span class="pill '+f[1]+'" style="margin:1px 2px 1px 0">'+f[0]+'</span>';}).join(''):'<span class="pill ok">En rango</span>')+'</td></tr>';}).join('')+'</tbody></table></div>'+
   '<div class="legend" style="margin-top:12px">'+[1,2,3,4,5].map(function(g){return '<span><i style="background:var(--g'+g+')"></i>'+g+'</span>';}).join('')+'</div></div>';
  html+='<div class="card"><div class="card-head"><div><h3>Promedio por competencia e instructor</h3><p class="small muted">Celdas con color según el grado; resalta dónde un instructor se separa del grupo en una competencia</p></div></div><div class="scroll-x"><table class="heat"><thead><tr><th class="r">Instructor</th>'+CK.map(function(k){return '<th>'+k+'</th>';}).join('')+'</tr></thead><tbody><tr><th class="r" style="font-family:var(--font)">Grupo</th>'+CK.map(function(k){var v=c.groupComp[k];return '<td style="background:'+gvar(v)+'">'+f1(v)+'</td>';}).join('')+'</tr>'+
   c.rows.map(function(r){return '<tr><th class="r" style="font-family:var(--font);white-space:nowrap">'+esc(r.ie.split(' · ')[0])+'</th>'+CK.map(function(k){var v=r.comp[k]?avg(r.comp[k]):0;var off=v&&Math.abs(v-c.groupComp[k])>0.6;return '<td style="background:'+gvar(v)+';'+(off?'outline:2px solid var(--fg);outline-offset:-2px':'')+'" title="'+(off?'Se separa del grupo':'')+'">'+(v?f1(v):'')+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div><p class="tiny muted" style="margin-top:8px">Recuadro: diferencia mayor a 0,6 frente al promedio del grupo en esa competencia. Útil para la reunión de estandarización de IE.</p></div>';
  return html;
}
/* ============ Exportación para EBT Manager ============ */
function exportManager(){
  var f=S.ui.rf||{};var ss=live('sessions').filter(function(s){return s.status==='signed'&&(!f.module||s.module===f.module)&&(!f.fleet||s.fleet===f.fleet)&&(!f.phase||s.phase===f.phase);});
  if(!ss.length)return toast('No hay sesiones firmadas con estos filtros');
  var comp={},te={},rt=[];
  CK.forEach(function(k){comp[k]={competency:k,name:CMAP[k].en,grades:[],lowOB:{}};});
  ss.forEach(function(s){seats(s).forEach(function(x){var g=s.grades[x]||{};var lowK=[];
    CK.forEach(function(k){var e=g[k]||{};if(e.g){comp[k].grades.push(e.g);if(e.g<=2)lowK.push(k);}var ob=e.ob||{};Object.keys(ob).forEach(function(o){if(ob[o]<0)comp[k].lowOB[o]=(comp[k].lowOB[o]||0)+1;});});
    if(s.result[x]==='RT')rt.push({pilot:pname(s.pilots[x]),fleet:s.fleet,phase:s.phase,date:s.date,competencies:lowK});
    (s.events||[]).forEach(function(ev){var o=te[ev.t]||(te[ev.t]={trainingElement:ev.t,competencies:ev.c||[],exposures:0,lowPerformance:0,fleets:{}});o.exposures++;o.fleets[s.fleet]=1;if((ev.c||[]).some(function(k){return lowK.indexOf(k)>=0;}))o.lowPerformance++;});});});
  var out={source:'EBT Instructor',generatedAt:new Date().toISOString(),filter:{module:f.module||'all',fleet:f.fleet||'all',phase:f.phase||'all'},sessions:ss.length,evaluations:ss.reduce(function(a,s){return a+seats(s).length;},0),
    competencies:CK.map(function(k){var c=comp[k],st=stats(c.grades);return {competency:k,name:c.name,n:st.n,avg:+st.mean.toFixed(2),pctLow:+(st.p12*100).toFixed(1),pctHigh:+(st.p45*100).toFixed(1),deficientOB:Object.keys(c.lowOB).sort(function(a,b){return c.lowOB[b]-c.lowOB[a];}).map(function(o){return {ob:o,count:c.lowOB[o]};})};}).sort(function(a,b){return a.avg-b.avg;}),
    trainingElements:Object.keys(te).map(function(k){var o=te[k];return {trainingElement:o.trainingElement,competencies:o.competencies,fleets:Object.keys(o.fleets),exposures:o.exposures,lowPerformance:o.lowPerformance,lowRate:+(o.lowPerformance/o.exposures*100).toFixed(1)};}).sort(function(a,b){return b.lowRate-a.lowRate;}),
    additionalTraining:rt,
    recommendation:'Priorizar en el próximo módulo las competencias con mayor pctLow y los training elements con mayor lowRate; mantener los elementos obligatorios (Engine Failure, AUPRTA).'};
  saveFile('ebt-manager-'+slug(f.module||'todos')+'-'+slug(f.fleet||'todas')+'.json',JSON.stringify(out,null,1));
}
/* ============ Bloqueo con PIN ============ */
var LOCKED=false,pinBuf='';
function lockHTML(){
  return '<div class="scrim" style="background:var(--bg);z-index:200;align-items:center" id="lock"><div style="width:min(320px,100%);text-align:center"><img class="brand-mark" src="'+LOGO_BIG+'" alt="" style="margin:0 auto 14px;width:96px;height:96px;object-fit:contain"><h2>EBT Instructor</h2><p class="small muted" style="margin:6px 0 18px">Ingresa tu PIN</p><div class="row" style="justify-content:center;gap:10px;margin-bottom:18px">'+[0,1,2,3,4,5].slice(0,Math.max(4,(S.settings.pin||'').length)).map(function(i){return '<span style="width:14px;height:14px;border-radius:50%;border:1.5px solid var(--line2);background:'+(i<pinBuf.length?'var(--fg)':'transparent')+'"></span>';}).join('')+'</div>'+
   '<div style="display:grid;grid-template-columns:repeat(3,72px);gap:12px;justify-content:center">'+['1','2','3','4','5','6','7','8','9','','0','⌫'].map(function(k){return k===''?'<span></span>':'<button class="btn" data-act="pinKey" data-k="'+k+'" style="height:72px;border-radius:50%;font-size:22px;font-weight:600">'+k+'</button>';}).join('')+'</div><p class="tiny muted" style="margin-top:18px" id="pinmsg"></p></div></div>';
}
function lockIfNeeded(){if(S.settings.pin&&!LOCKED){LOCKED=true;pinBuf='';render();}}
document.addEventListener('visibilitychange',function(){if(document.hidden)lockIfNeeded();});
var ROLE_ACT={
  rtab:function(el){S.ui.rtab=el.dataset.v;render();},
  exportManager:exportManager,
  simMode:function(el){S.ui.sim=!!el.dataset.v;render();},
  simStart:function(){var s=cur();s.startedAt=Date.now();put('sessions',s);},
  evStamp:function(el){var s=cur();var e=s.events[+el.dataset.i];e.at=e.at?0:Date.now();if(!s.startedAt&&e.at)s.startedAt=e.at;put('sessions',s);},
  pinKey:function(el){var k=el.dataset.k;if(k==='⌫')pinBuf=pinBuf.slice(0,-1);else if(pinBuf.length<6)pinBuf+=k;
    if(pinBuf.length>=(S.settings.pin||'').length){if(pinBuf===S.settings.pin){LOCKED=false;pinBuf='';render();return;}pinBuf='';render();var m=document.getElementById('pinmsg');if(m)m.textContent='PIN incorrecto';return;}render();}
};
/* ============ Instructores (Manager) ============ */
function ieStats(ie,ss){
  var mine=ss.filter(function(s){return (s.instructor||'Sin instructor')===ie;}).sort(sortByDate);
  var g=[],comp={},dist=[0,0,0,0,0,0],flat=0,evals=0,obN=0,notes=0,byS=[];
  mine.forEach(function(s){seats(s).forEach(function(x){var gg=s.grades[x]||{};var vals=[];evals++;
    CK.forEach(function(k){var e=gg[k]||{};if(e.g){g.push(e.g);vals.push(e.g);dist[e.g]++;(comp[k]=comp[k]||[]).push(e.g);}if(e.ob)obN+=Object.keys(e.ob).filter(function(o){return e.ob[o];}).length;if(e.note)notes++;});
    if(vals.length>=9&&vals.every(function(v){return v===vals[0];}))flat++;});
    byS.push({label:s.phase+' '+fdateShort(s.date),v:avg(seats(s).map(function(x){return sessAvg(s,x);}))});});
  var st=stats(g);var mode=0,mc=0;for(var i=1;i<=5;i++)if(dist[i]>mc){mc=dist[i];mode=i;}
  return {ie:ie,sessions:mine.length,evals:evals,st:st,dist:dist,mode:mode,modeShare:st.n?mc/st.n:0,flat:flat,flatShare:evals?flat/evals:0,comp:comp,obPer:evals?obN/evals:0,notesPer:evals?notes/evals:0,trend:byS,last:mine[mine.length-1]};
}
function ieFlags(r,G){
  var f=[],d=r.st.mean-G.mean;
  if(r.st.n<18)f.push(['Pocas sesiones','','Menos de 2 sesiones completas; las señales aún no son concluyentes.']);
  if(r.st.n>=18&&(d>0.5||r.st.p45>=0.85))f.push(['Posible complacencia','warn','Promedio '+(d>0?'+':'')+f1(d)+' frente al grupo y '+Math.round(r.st.p45*100)+'% de grados 4–5.']);
  if(r.st.n>=18&&(d<-0.5||r.st.p12>=0.35))f.push(['Posible severidad','warn','Promedio '+f1(d)+' frente al grupo y '+Math.round(r.st.p12*100)+'% de grados 1–2.']);
  if(r.st.n>=18&&(r.modeShare>=0.7||r.st.sd<0.45))f.push(['Monotonía','bad','El grado '+r.mode+' representa el '+Math.round(r.modeShare*100)+'% de sus calificaciones (desv. '+f1(r.st.sd)+').']);
  if(r.flatShare>=0.5&&r.evals>=2)f.push(['Misma nota en las 9','bad','En el '+Math.round(r.flatShare*100)+'% de sus evaluaciones puso el mismo grado en todas las competencias.']);
  if(r.st.n>=18&&r.obPer<1)f.push(['Pocos OB marcados','','Marca menos de un OB por evaluación; la calificación queda sin evidencia.']);
  return f;
}
function histo(dist,mode){var tot=dist.reduce(function(a,b){return a+b;},0)||1,mx=Math.max.apply(null,dist)||1;
  return '<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px;align-items:end;height:120px">'+[1,2,3,4,5].map(function(g){var h=dist[g]/mx*100;return '<div style="display:flex;flex-direction:column;align-items:center;justify-content:flex-end;height:100%;gap:4px"><span class="tiny num" style="font-weight:700;color:'+(g===mode?'var(--fg)':'var(--muted)')+'">'+Math.round(dist[g]/tot*100)+'%</span><div style="width:100%;height:'+Math.max(2,h)+'%;border-radius:6px 6px 2px 2px;background:var(--g'+g+');'+(g===mode?'outline:2px solid var(--fg);outline-offset:2px':'')+'"></div><span class="tiny muted num">'+g+'</span></div>';}).join('')+'</div>';}
function vInstructores(){
  if(!isCoord()){S.ui.route='inicio';return vInicio();}
  var ss=live('sessions').filter(function(s){return s.status==='signed';});
  var names={};ss.forEach(function(s){names[s.instructor||'Sin instructor']=1;});
  var all=[];ss.forEach(function(s){seats(s).forEach(function(x){CK.forEach(function(k){var e=s.grades[x][k];if(e&&e.g)all.push(e.g);});});});var G=stats(all);
  var rows=Object.keys(names).map(function(ie){return ieStats(ie,ss);}).sort(function(a,b){return b.st.n-a.st.n;});
  if(S.ui.ie&&names[S.ui.ie])return vInstructor(ieStats(S.ui.ie,ss),G,rows);
  var html=head('Instructores','Equipo habilitado y cómo califica cada instructor: promedio, nota más repetida y señales de complacencia, severidad o monotonía.');
  html+=teamCard();
  if(!rows.length)return html+'<div class="card">'+empty('people','Sin sesiones firmadas','Cuando los instructores firmen evaluaciones verás aquí su patrón de calificación.')+'</div>';
  html+='<div class="grid g4" style="margin-bottom:16px">'+kpi('Instructores',rows.length,'con sesiones firmadas')+kpi('Promedio del grupo',f1(G.mean),'desv. '+f1(G.sd)+' · '+G.n+' calificaciones')+kpi('Con señales',rows.filter(function(r){return ieFlags(r,G).some(function(f){return f[1];});}).length,'complacencia, severidad o monotonía',rows.some(function(r){return ieFlags(r,G).some(function(f){return f[1]==='bad';});})?'var(--bad)':'')+kpi('Nota más común',(function(){var d=[0,0,0,0,0,0];all.forEach(function(v){d[v]++;});var m=0,c=0;for(var i=1;i<=5;i++)if(d[i]>c){c=d[i];m=i;}return m||'—';})(),'en todo el grupo')+'</div>';
  html+='<div class="grid g3">'+rows.map(function(r){var fl=ieFlags(r,G),d=r.st.mean-G.mean;
    return '<button class="card" data-act="openIE" data-ie="'+esc(r.ie)+'" style="text-align:left;cursor:pointer;border:0;display:flex;flex-direction:column;gap:10px"><div class="row"><span class="avatar">'+initials(r.ie.split(' · ').pop())+'</span><div style="flex:1;min-width:0"><div style="font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(r.ie)+'</div><div class="small muted">'+r.sessions+' sesión'+(r.sessions===1?'':'es')+' · '+r.evals+' evaluaciones</div></div><span class="gchip '+gcls(r.st.mean)+'" style="width:42px;height:32px;font-size:14px">'+f1(r.st.mean)+'</span></div>'+
     '<div class="row" style="gap:14px"><div><div class="tiny muted">vs. grupo</div><div class="num" style="font-weight:700;color:'+(Math.abs(d)>0.5?'var(--warn)':'var(--fg)')+'">'+(d>=0?'+':'')+f1(Math.abs(d)<0.05?0:d).replace('—','0,0')+'</div></div><div><div class="tiny muted">Nota más repetida</div><div class="row" style="gap:6px"><span class="gchip '+gcls(r.mode)+'">'+(r.mode||'–')+'</span><span class="small num muted">'+Math.round(r.modeShare*100)+'%</span></div></div><div><div class="tiny muted">Desviación</div><div class="num" style="font-weight:700">'+f1(r.st.sd)+'</div></div></div>'+
     '<div style="display:flex;height:10px;border-radius:5px;overflow:hidden;gap:1px;background:var(--line)">'+[1,2,3,4,5].map(function(g){return r.dist[g]?'<div style="width:'+(r.dist[g]/(r.st.n||1)*100)+'%;background:var(--g'+g+')"></div>':'';}).join('')+'</div>'+
     '<div class="row" style="gap:4px">'+(fl.length?fl.map(function(f){return '<span class="pill '+f[1]+'">'+f[0]+'</span>';}).join(''):'<span class="pill ok">En rango</span>')+'</div></button>';}).join('')+'</div>';
  html+='<p class="small muted" style="margin-top:16px;max-width:760px">Complacencia: promedio 0,5 por encima del grupo o 85 % de grados 4–5. Severidad: promedio 0,5 por debajo o 35 % de grados 1–2. Monotonía: una misma nota en el 70 % de las calificaciones o desviación menor a 0,45. Las señales se calculan a partir de 18 calificaciones (dos evaluaciones completas).</p>';
  return html;
}
function vInstructor(r,G,rows){
  var fl=ieFlags(r,G),d=r.st.mean-G.mean;var gc=compAverages(live('sessions').filter(function(s){return s.status==='signed';}));
  var mine={};CK.forEach(function(k){mine[k]=r.comp[k]?avg(r.comp[k]):0;});
  var html='<button class="btn ghost" data-act="closeIE" style="margin:-6px 0 8px -8px">'+I.back+'Instructores</button>';
  html+=head(esc(r.ie),r.sessions+' sesiones firmadas · '+r.evals+' evaluaciones · '+r.st.n+' calificaciones','<button class="btn" data-act="pdfIE" data-ie="'+esc(r.ie)+'">'+I.down+'PDF</button>');
  html+='<div class="grid g4" style="margin-bottom:16px">'+kpi('Promedio',f1(r.st.mean),'grupo '+f1(G.mean)+' · '+(d>=0?'+':'')+f1(Math.abs(d)<0.05?0:d).replace('—','0,0'),Math.abs(d)>0.5?'var(--warn)':'')+kpi('Nota más repetida',r.mode||'—',Math.round(r.modeShare*100)+'% de sus calificaciones',r.modeShare>=0.7?'var(--bad)':'')+kpi('Desviación',f1(r.st.sd),r.st.sd<0.45?'poca variación entre notas':'variación normal',r.st.sd<0.45&&r.st.n>=18?'var(--bad)':'')+kpi('Misma nota en las 9',Math.round(r.flatShare*100)+'%','de sus evaluaciones',r.flatShare>=0.5?'var(--bad)':'')+'</div>';
  html+='<div class="card" style="margin-bottom:16px"><div class="card-head"><div><h3>Señales</h3><p class="small muted">Lectura automática del patrón de calificación</p></div></div>'+(fl.length?fl.map(function(f){return '<div class="flag"><span class="pill '+f[1]+'" style="flex:none">'+f[0]+'</span><span class="small">'+esc(f[2])+'</span></div>';}).join(''):'<p class="small muted">En rango: su promedio, dispersión y uso de la escala son coherentes con el grupo.</p>')+'</div>';
  html+='<div class="grid g2" style="margin-bottom:16px"><div class="card"><div class="card-head"><div><h3>Distribución de notas</h3><p class="small muted">Qué tanto usa cada grado de la escala · recuadro: la más repetida</p></div></div>'+histo(r.dist,r.mode)+'</div>'+
   '<div class="card"><div class="card-head"><div><h3>Evolución del promedio</h3><p class="small muted">Promedio otorgado en cada sesión firmada</p></div></div>'+trend(r.trend,'var(--accent)')+'</div></div>';
  html+='<div class="grid g2" style="margin-bottom:16px"><div class="card"><div class="card-head"><div><h3>Por competencia frente al grupo</h3><p class="small muted">Barra: este instructor · línea: promedio del grupo</p></div></div>'+hbars(mine,null,gc)+'</div>'+
   '<div class="card"><div class="card-head"><div><h3>Evidencia que deja</h3><p class="small muted">Por evaluación individual</p></div></div><dl class="kv"><dt>OB marcados</dt><dd>'+r.obPer.toFixed(1).replace('.',',')+' por evaluación</dd><dt>Competencias con nota escrita</dt><dd>'+r.notesPer.toFixed(1).replace('.',',')+' de 9</dd><dt>% grados 4–5</dt><dd>'+Math.round(r.st.p45*100)+'% <span class="muted small">(grupo '+Math.round(G.p45*100)+'%)</span></dd><dt>% grados 1–2</dt><dd>'+Math.round(r.st.p12*100)+'% <span class="muted small">(grupo '+Math.round(G.p12*100)+'%)</span></dd><dt>Última sesión</dt><dd>'+(r.last?esc(r.last.phase)+' · '+fdate(r.last.date):'—')+'</dd></dl></div></div>';
  html+='<div class="card"><div class="card-head"><div><h3>Comparación con los demás instructores</h3></div></div><div class="scroll-x"><table class="tbl"><thead><tr><th>Instructor</th><th>Calif.</th><th>Promedio</th><th>Más repetida</th><th>Desv.</th><th>% 4–5</th><th>% 1–2</th></tr></thead><tbody>'+rows.map(function(o){return '<tr class="click" data-act="openIE" data-ie="'+esc(o.ie)+'"'+(o.ie===r.ie?' style="font-weight:700"':'')+'><td>'+esc(o.ie)+'</td><td class="num">'+o.st.n+'</td><td><span class="gchip '+gcls(o.st.mean)+'" style="width:36px">'+f1(o.st.mean)+'</span></td><td><span class="gchip '+gcls(o.mode)+'">'+(o.mode||'–')+'</span> <span class="tiny muted num">'+Math.round(o.modeShare*100)+'%</span></td><td class="num">'+f1(o.st.sd)+'</td><td class="num">'+Math.round(o.st.p45*100)+'%</td><td class="num">'+Math.round(o.st.p12*100)+'%</td></tr>';}).join('')+'</tbody></table></div></div>';
  return html;
}
async function pdfIE(ie){
  if(!hasPDF()){toast('El PDF necesita conexión la primera vez que se abre la app');return;}
  var ss=live('sessions').filter(function(s){return s.status==='signed';});var all=[];ss.forEach(function(s){seats(s).forEach(function(x){CK.forEach(function(k){var e=s.grades[x][k];if(e&&e.g)all.push(e.g);});});});var G=stats(all);
  var r=ieStats(ie,ss),fl=ieFlags(r,G);
  var doc=pdfBase('Patrón de calificación del instructor',ie+' · '+r.sessions+' sesiones · '+r.st.n+' calificaciones');
  var y=T(doc,{startY:30,body:[['Promedio',f1(r.st.mean)+' (grupo '+f1(G.mean)+')','Nota más repetida',r.mode+' · '+Math.round(r.modeShare*100)+'%'],['Desviación',f1(r.st.sd),'Misma nota en las 9',Math.round(r.flatShare*100)+'% de evaluaciones'],['% grados 4–5',Math.round(r.st.p45*100)+'% (grupo '+Math.round(G.p45*100)+'%)','% grados 1–2',Math.round(r.st.p12*100)+'% (grupo '+Math.round(G.p12*100)+'%)']],columnStyles:{0:{textColor:[108,108,115],cellWidth:30},2:{textColor:[108,108,115],cellWidth:36}}});
  pdfH(doc,'Señales',y+10);y=pdfPara(doc,fl.length?fl.map(function(f){return '• '+f[0]+': '+f[2];}).join('\n'):'• En rango: promedio, dispersión y uso de la escala coherentes con el grupo.',y+16);
  doc.setFontSize(8);doc.setTextColor.apply(doc,PDFC.mu);doc.text('Distribución de notas (%)',16,y+8);
  var tot=r.st.n||1;[1,2,3,4,5].forEach(function(g,i){var x=16+i*36,h=r.dist[g]/tot*40;var c=RGB[g];doc.setFillColor(c[0],c[1],c[2]);doc.rect(x,y+54-h,28,h,'F');doc.setTextColor.apply(doc,PDFC.fg);doc.setFontSize(8);doc.text(String(g),x+14,y+60,{align:'center'});doc.text(Math.round(r.dist[g]/tot*100)+'%',x+14,y+52-h,{align:'center'});});
  y+=66;var mine={};CK.forEach(function(k){mine[k]=r.comp[k]?avg(r.comp[k]):0;});var gc=compAverages(ss);
  doc.setFontSize(8);doc.setTextColor.apply(doc,PDFC.mu);doc.text('Por competencia (barra: instructor · línea: grupo)',16,y);y=pdfBars(doc,16,y+4,178,mine,gc)+6;
  if(r.trend.length>1){doc.setFontSize(8);doc.setTextColor.apply(doc,PDFC.mu);doc.text('Evolución del promedio por sesión',16,y+4);pdfTrend(doc,16,y+8,178,44,r.trend,PDFC.acc);}
  pdfFoot(doc);await saveFile('instructor-'+slug(ie)+'.pdf',doc.output('blob'));
}
var IE_ACT={openIE:function(el){S.ui.ie=el.dataset.ie;go('instructores');},closeIE:function(){S.ui.ie='';go('instructores');},pdfIE:function(el){pdfIE(el.dataset.ie);},
  kpiGo:function(el){var t=el.dataset.t;if(t==='alerts'){var a=document.getElementById('alertas');if(a){a.scrollIntoView({behavior:'smooth',block:'start'});a.style.outline='2px solid var(--accent)';setTimeout(function(){a.style.outline='';},1600);}}else go(t);}};
/* ============ Asistente IA ============ */
var SAMPLE=null,sampleReady=false,aiBusy=false,aiCtl=null;
var PRE='Eres el asistente de un instructor de EBT (Evidence-Based Training) de pilotos de línea aérea. Marco: 9 competencias OACI Doc 9995 / EASA AMC1 ORO.FC.231 con numeración de OB 0–8 (KNO 0, APK 1, COM 2, FPA 3, FPM 4, LTW 5, PSD 6, SAW 7, WLM 8). Escala de calificación 1–5 (1 No satisfactorio, 2 Mínimo aceptable, 3 Adecuado, 4 Bueno, 5 Ejemplar). Fases: EVAL, MT, SBT, LOFT, LOE, Line check.\nReglas: responde en español claro y conciso; conserva la terminología técnica en inglés (EBT, OB, EVAL, MT, SBT, TEM, debriefing); usa solo los datos del contexto y no inventes calificaciones, eventos ni personas; cita los OB por código (p. ej. OB 7.2); si falta información, dilo. Sin markdown pesado: usa párrafos cortos y viñetas simples con "•".';
function ctxText(ctx){
  if(ctx&&ctx.indexOf('p:')===0){var p=pilot(ctx.slice(2));if(!p)return '';
    var ss=pilotSessions(p.id).filter(function(s){return s.status==='signed';});
    var w=weaknesses(p.id);
    var fal=(w.comp.length?'Competencias con grado 1–2: '+w.comp.map(function(c){return c.k+' ('+c.n+' vez/veces, última '+c.phase+' '+c.last+' grado '+c.lastG+')';}).join('; ')+'. ':'Sin competencias en grado 1–2. ')+
      (w.obs.length?'OB deficientes recurrentes: '+w.obs.map(function(o){return 'OB '+o.o+' ×'+o.n;}).join(', ')+'. ':'')+
      (w.events.length?'Maniobras/procedimientos asociados a bajo desempeño: '+w.events.map(function(e){return e.t+' ['+Object.keys(e.ks).join(' ')+'] ×'+e.n;}).join('; ')+'.':'');
    return 'TRAINEE: '+p.name+' · '+(p.rank==='CPT'?'Capitán':'Primer oficial')+' · flota '+p.fleet+'\nFALENCIAS DETECTADAS: '+fal+'\nHISTORIAL ('+ss.length+' sesiones firmadas):\n'+ss.map(function(s){return sessText(s,seatOf(s,p.id));}).join('\n');}
  if(ctx&&ctx.indexOf('s:')===0){var s=S.sessions[ctx.slice(2)];if(!s)return '';return 'SESIÓN:\n'+seats(s).map(function(x){return sessText(s,x);}).join('\n')+debTargets(s).filter(function(t){return t.val;}).map(function(t){return '\nDebriefing registrado'+(t.label?' ('+t.label+')':'')+': '+t.val;}).join('');}
  if(!isCoord())return 'Sin contexto seleccionado. Pide al instructor que elija un trainee o una sesión.';
  var ss2=live('sessions').filter(function(s){return s.status==='signed'&&s.module===S.settings.module;});
  var av=compAverages(ss2);
  return 'RESUMEN DEL MÓDULO '+S.settings.module+': '+ss2.length+' sesiones firmadas. Promedios por competencia: '+CK.map(function(k){return k+' '+(av[k]?av[k].toFixed(2):'s/d');}).join(', ')+'.\nTrainees registrados: '+live('trainees').length+'.';
}
function sessText(s,x){
  var g=s.grades[x]||{};
  return '- '+s.date+' '+s.module+' '+s.phase+' ('+s.fleet+') '+x.toUpperCase()+' '+pname(s.pilots[x])+': '+CK.map(function(k){var e=g[k]||{};var ob=e.ob||{};var o=Object.keys(ob).filter(function(q){return ob[q];}).map(function(q){return (ob[q]<0?'−':'+')+q;});return k+'='+(e.no?'N/O':(e.g||'s/d'))+(o.length?' ['+o.join(' ')+']':'')+(e.note?' «'+e.note+'»':'');}).join('; ')+'. Resultado: '+(RES[s.result[x]||''][0])+(s.events&&s.events.length?'. Eventos: '+s.events.map(function(e){return e.t+(e.done?'':' (no completado)')+(e.g&&e.g[x]?' grado '+e.g[x]:'')+(e.at?' ['+hhmm(e.at)+']':'')+(e.note?' «'+e.note+'»':'');}).join(' | '):'');
}
function vAsistente(){
  var ctx=S.ui.aiCtx||'',chat=S.ui.chat||(S.ui.chat=[]);
  var ps=live('trainees').sort(function(a,b){return a.name.localeCompare(b.name);});
  var ss=live('sessions').sort(sortByDate).reverse().slice(0,15);
  var html=head('Asistente IA','Analiza historiales, redacta debriefings y prepara el training focus del próximo módulo.');
  html+='<div class="row" style="margin-bottom:14px"><div class="field" style="flex:1;min-width:240px"><label for="ai-ctx">Contexto</label><select class="input" id="ai-ctx" data-bind="ui.aiCtx" data-rerender="1" data-resetchat="1">'+(isCoord()?'<option value="">Módulo en curso ('+esc(S.settings.module)+')</option>':'<option value="">Elige un trainee o una sesión</option>')+'<optgroup label="Trainees">'+ps.map(function(p){return '<option value="p:'+p.id+'"'+(ctx==='p:'+p.id?' selected':'')+'>'+esc(p.name)+'</option>';}).join('')+'</optgroup><optgroup label="Sesiones">'+ss.map(function(s){return '<option value="s:'+s.id+'"'+(ctx==='s:'+s.id?' selected':'')+'>'+esc(s.phase+' '+fdate(s.date)+' · '+seats(s).map(function(x){return pname(s.pilots[x]).split(' ')[0];}).join('/'))+'</option>';}).join('')+'</optgroup></select></div>'+(chat.length?'<button class="btn" data-act="aiClear" style="align-self:flex-end">Nueva conversación</button>':'')+'</div>';
  if(sampleReady&&!SAMPLE)html+='<div class="note" style="margin-bottom:14px">El asistente funciona cuando la app se abre en Claude con conexión. Sin conexión, el resto de la app sigue disponible.</div>';
  var quick=ctx.indexOf('p:')===0?['Resume la evolución de este trainee','¿Qué training focus recomiendas para el próximo módulo?','Identifica patrones en los OB deficientes']:ctx.indexOf('s:')===0?['Redacta un debriefing facilitado para esta sesión','¿Las calificaciones son coherentes con los OB y notas?','Sugiere preguntas de facilitación para el debriefing']:['¿Qué competencias están más débiles en el módulo?','Propón prioridades para el próximo módulo','Explica la diferencia entre EVAL, MT y SBT'];
  html+='<div class="chat" id="chat">'+(chat.length?chat.map(function(m,i){return '<div class="msg '+(m.role==='user'?'u':'a')+'" id="m'+i+'">'+esc(m.content)+'</div>';}).join(''):'<div class="card" style="text-align:center;padding:28px"><div style="color:var(--accent);display:inline-block">'+I.spark.replace('<svg','<svg width="34" height="34"')+'</div><h3 style="margin:8px 0 4px">¿En qué te ayudo?</h3><p class="small muted" style="margin-bottom:16px">El asistente lee solo el contexto que elijas arriba.</p><div class="chips" style="justify-content:center">'+quick.map(function(q){return '<button class="chip" data-act="aiQuick" data-q="'+esc(q)+'">'+esc(q)+'</button>';}).join('')+'</div></div>')+'</div>';
  html+='<div class="composer"><textarea class="input" id="ai-in" rows="1" placeholder="Pregunta al asistente…"></textarea><button class="btn primary" data-act="aiSend" id="ai-send" style="height:44px;width:44px;padding:0" aria-label="Enviar"'+(aiBusy?' disabled':'')+'>'+I.send+'</button></div>';
  return html;
}
async function getSample(){if(!sampleReady){try{SAMPLE=window.claude&&window.claude.use?await window.claude.use('sample'):null;}catch(e){SAMPLE=null;}sampleReady=true;}return SAMPLE;}
function aiErr(e){var c=e&&e.code;return c==='not_granted'?'El asistente no tiene permiso en esta vista.':c==='rate_limited'?'Demasiadas consultas seguidas. Intenta en un minuto.':c==='cancelled'?'Consulta cancelada.':'No se pudo consultar al asistente'+(online()?'.':': no hay conexión.');}
async function aiAsk(q){
  q=(q||'').trim();if(!q||aiBusy)return;
  var sm=await getSample();var chat=S.ui.chat||(S.ui.chat=[]);
  chat.push({role:'user',content:q});
  if(!sm){chat.push({role:'assistant',content:'El asistente se activa cuando abres la app en Claude con conexión a internet.'});render();return;}
  chat.push({role:'assistant',content:'Pensando…'});aiBusy=true;render();scrollChat();
  var idx=chat.length-1;
  var turns=chat.slice(0,-1).map(function(m,i){return {role:m.role,content:i===0?PRE+'\n\nCONTEXTO:\n'+ctxText(S.ui.aiCtx)+'\n\nSOLICITUD DEL INSTRUCTOR: '+m.content:m.content};});
  try{aiCtl=new AbortController();
    var r=await sm(turns,{cache:false,signal:aiCtl.signal,onText:function(u){chat[idx].content=u.text;var el=document.getElementById('m'+idx);if(el)el.textContent=u.text;scrollChat();}});
    chat[idx].content=r.text;
  }catch(e){chat[idx].content=(e&&e.text?e.text+'\n\n':'')+aiErr(e);}
  aiBusy=false;if(chat.length>40)chat.splice(0,chat.length-40);persist();render();scrollChat();
}
function scrollChat(){var m=document.getElementById('main');var c=document.getElementById('chat');if(c&&c.lastElementChild)c.lastElementChild.scrollIntoView({block:'end',behavior:'smooth'});}
async function aiDebrief(key,btn){
  var s=cur();if(!s)return;var sm=await getSample();
  if(!sm){toast('El asistente requiere abrir la app en Claude con conexión');return;}
  var t=debTargets(s).filter(function(x){return x.key===key;})[0]||debTargets(s)[0];
  var ta=document.getElementById('deb-'+t.key);if(btn){btn.disabled=true;btn.lastChild.textContent='Redactando…';}
  var scope=t.key==='joint'?seats(s):[t.key];
  var prompt=PRE+'\n\nCONTEXTO:\n'+scope.map(function(x){return sessText(s,x);}).join('\n')+(t.val?'\nNotas actuales del instructor: '+t.val:'')+'\n\nSOLICITUD: Redacta el texto de debriefing y recomendaciones '+(t.key==='joint'?'para la tripulación completa':'individual para '+t.key.toUpperCase()+' ('+pname(s.pilots[t.key])+')')+' (máx. 220 palabras). Estructura: 1) Fortalezas observadas con OB, 2) Áreas de mejora con OB y evidencia, 3) Training focus para el próximo módulo. Integra las notas actuales del instructor si las hay. Solo el texto, sin títulos de markdown.';
  try{var r=await sm(prompt,{cache:false,onText:function(u){if(ta)ta.value=u.text;}});setPath(s,t.path,r.text);(s.aiDraft=s.aiDraft||{})[t.key]=Date.now();put('sessions',s,true);toast('Borrador de IA listo. Revísalo: tú eres el autor del registro');}
  catch(e){toast(aiErr(e));}
  if(btn){btn.disabled=false;btn.lastChild.textContent='Redactar con IA';}
}

/* ============ Exportación ============ */
async function saveFile(name,data){
  try{
    var dl=window.claude&&window.claude.use?await window.claude.use('downloads'):null;
    if(dl){await dl.save({filename:name,data:data});toast('Archivo listo: '+name);return;}
    var type=/\.pdf$/i.test(name)?'application/pdf':/\.csv$/i.test(name)?'text/csv':'application/json';
    var blob=data instanceof Blob?data:new Blob([data],{type:type});
    var file=null;try{file=new File([blob],name,{type:type});}catch(e){}
    if(file&&navigator.canShare&&navigator.canShare({files:[file]})&&/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent)&&'ontouchend' in document){try{await navigator.share({files:[file],title:name});return;}catch(e){if(e&&e.name==='AbortError')return;}}
    var url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(url);a.remove();},4000);toast('Descargado: '+name);
  }catch(e){if(e&&e.code==='declined')return;toast('No se pudo guardar el archivo');}
}
function slug(s){return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^\w]+/g,'-').replace(/^-|-$/g,'');}
function hasPDF(){return !!(window.jspdf&&window.jspdf.jsPDF&&window.jspdf.jsPDF.API&&window.jspdf.jsPDF.API.autoTable);}
function loadLibs(){if(hasPDF())return;function add(src,cb){var sc=document.createElement('script');sc.src=src;sc.onload=cb||null;document.head.appendChild(sc);}
  if(!(window.jspdf&&window.jspdf.jsPDF))add('https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js',function(){add('https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js');});
  else add('https://cdn.jsdelivr.net/npm/jspdf-autotable@3.8.2/dist/jspdf.plugin.autotable.min.js');}
var RGB={1:[210,59,50],2:[229,138,31],3:[124,198,142],4:[61,166,97],5:[22,121,74]};
function pdfBase(title,sub){
  var doc=new window.jspdf.jsPDF({unit:'mm',format:'a4'});
  doc.setFillColor(215,38,61);doc.rect(0,0,210,3,'F');
  doc.setFont('helvetica','bold');doc.setFontSize(17);doc.setTextColor(28,28,31);doc.text(title,16,18);
  doc.setFont('helvetica','normal');doc.setFontSize(9.5);doc.setTextColor(108,108,115);doc.text(sub,16,24);
  doc.text((S.settings.operator||ORG('orgName',''))?(S.settings.operator||ORG('orgName',''))+' · EBT Instructor':'EBT Instructor',194,18,{align:'right'});
  return doc;
}
function pdfFoot(doc,id){
  var n=doc.getNumberOfPages();for(var i=1;i<=n;i++){doc.setPage(i);doc.setFontSize(8);doc.setTextColor(150,150,155);doc.text('Generado '+new Date().toLocaleString('es-CO')+(id?' · ID '+id:''),16,289);doc.text('Página '+i+' de '+n,194,289,{align:'right'});}
}
function gradeCell(data,idx){if(data.section==='body'&&idx.indexOf(data.column.index)>=0){var v=parseInt(data.cell.raw,10);if(v>=1&&v<=5){data.cell.styles.fillColor=RGB[v];data.cell.styles.textColor=[255,255,255];data.cell.styles.fontStyle='bold';data.cell.styles.halign='center';}}}
var TBL={theme:'plain',styles:{fontSize:8.6,cellPadding:2.2,lineColor:[228,228,232],lineWidth:.2,textColor:[40,40,45]},headStyles:{fillColor:[245,245,247],textColor:[90,90,96],fontStyle:'bold',fontSize:7.8},margin:{left:16,right:16}};
function T(doc,o){doc.autoTable(Object.assign({},TBL,o));return doc.lastAutoTable.finalY;}
/* --- dibujo de gráficas en PDF --- */
var PDFC={fg:[28,28,31],mu:[108,108,115],ln:[225,225,230],acc:[215,38,61],g3:[158,163,173]};
function pdfBars(doc,x,y,w,vals,prev){
  var rowH=6.2,lw=12,vw=10,bw=w-lw-vw-4;
  CK.forEach(function(k,i){var yy=y+i*rowH,v=vals[k]||0;
    doc.setFont('helvetica','bold');doc.setFontSize(7.5);doc.setTextColor.apply(doc,PDFC.fg);doc.text(k,x,yy+3.4);
    doc.setFillColor(238,238,242);doc.roundedRect(x+lw,yy+0.6,bw,3.6,1.8,1.8,'F');
    if(v){var c=RGB[Math.max(1,Math.min(5,Math.round(v)))];doc.setFillColor(c[0],c[1],c[2]);doc.roundedRect(x+lw,yy+0.6,bw*v/5,3.6,1.8,1.8,'F');}
    if(prev&&prev[k]){doc.setDrawColor(70,70,75);doc.setLineWidth(.5);var px=x+lw+bw*prev[k]/5;doc.line(px,yy-0.2,px,yy+5);}
    doc.setFont('helvetica','normal');doc.setFontSize(7.5);doc.setTextColor.apply(doc,PDFC.mu);doc.text(v?f1(v):'–',x+w,yy+3.4,{align:'right'});});
  return y+CK.length*rowH;
}
function pdfRadar(doc,cx,cy,R,series){
  var n=CK.length;function pt(i,v){var a=-Math.PI/2+i*2*Math.PI/n,r=R*v/5;return [cx+r*Math.cos(a),cy+r*Math.sin(a)];}
  doc.setLineWidth(.2);doc.setDrawColor.apply(doc,PDFC.ln);
  for(var g=1;g<=5;g++){for(var i=0;i<n;i++){var p1=pt(i,g),p2=pt((i+1)%n,g);doc.line(p1[0],p1[1],p2[0],p2[1]);}}
  for(var i=0;i<n;i++){var e=pt(i,5);doc.line(cx,cy,e[0],e[1]);var l=pt(i,6);doc.setFont('helvetica','bold');doc.setFontSize(6.5);doc.setTextColor.apply(doc,PDFC.fg);doc.text(CK[i],l[0],l[1]+1,{align:'center'});}
  series.forEach(function(sr){var pts=CK.map(function(k,i){return pt(i,sr.vals[k]||0);});var c=sr.color;
    var segs=[];for(var i=1;i<pts.length;i++)segs.push([pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]]);
    doc.setDrawColor(c[0],c[1],c[2]);doc.setFillColor(c[0],c[1],c[2]);doc.setLineWidth(.6);
    try{doc.setGState(new doc.GState({opacity:.18}));doc.lines(segs,pts[0][0],pts[0][1],[1,1],'F',true);doc.setGState(new doc.GState({opacity:1}));}catch(e){}
    doc.lines(segs,pts[0][0],pts[0][1],[1,1],'S',true);
    pts.forEach(function(p,i){if(sr.vals[CK[i]])doc.circle(p[0],p[1],.8,'F');});});
}
function pdfTrend(doc,x,y,w,h,points,color){
  var L=7,B=7,iw=w-L-2,ih=h-B-3;function Y(v){return y+3+ih-(v-1)/4*ih;}function X(i){return points.length===1?x+L+iw/2:x+L+i*iw/(points.length-1);}
  doc.setLineWidth(.2);for(var g=1;g<=5;g++){doc.setDrawColor.apply(doc,PDFC.ln);doc.line(x+L,Y(g),x+w,Y(g));doc.setFontSize(6.5);doc.setTextColor.apply(doc,PDFC.mu);doc.text(String(g),x+L-2,Y(g)+1,{align:'right'});}
  var c=color;doc.setDrawColor(c[0],c[1],c[2]);doc.setFillColor(c[0],c[1],c[2]);doc.setLineWidth(.7);
  for(var i=1;i<points.length;i++)doc.line(X(i-1),Y(points[i-1].v),X(i),Y(points[i].v));
  var step=Math.ceil(points.length/8);
  points.forEach(function(p,i){doc.circle(X(i),Y(p.v),.9,'F');if(i%step===0||i===points.length-1){doc.setFontSize(6);doc.setTextColor.apply(doc,PDFC.mu);doc.text(p.label,X(i),y+h,{align:'center'});}
    if(i===points.length-1){doc.setFont('helvetica','bold');doc.setFontSize(7);doc.setTextColor.apply(doc,PDFC.fg);doc.text(f1(p.v),X(i),Y(p.v)-2.2,{align:'center'});doc.setFont('helvetica','normal');}});
}
function pdfH(doc,txt,y){doc.setFont('helvetica','bold');doc.setFontSize(11);doc.setTextColor.apply(doc,PDFC.fg);doc.text(txt,16,y);doc.setFont('helvetica','normal');}
function pdfPara(doc,txt,y,w){doc.setFontSize(9);doc.setTextColor(50,50,55);var lines=doc.splitTextToSize(txt,w||178);lines.forEach(function(l){if(y>282){doc.addPage();y=16;}doc.text(l,16,y);y+=4.3;});return y;}
function pdfLegend(doc,x,y,items){items.forEach(function(it){doc.setFillColor(it.c[0],it.c[1],it.c[2]);doc.roundedRect(x,y-2.2,3,3,.6,.6,'F');doc.setFontSize(7);doc.setTextColor.apply(doc,PDFC.mu);doc.text(it.t,x+4.5,y);x+=4.5+doc.getTextWidth(it.t)+5;});}

async function pdfSession(id){
  var s=S.sessions[id];if(!s)return;
  if(!hasPDF()){toast('El PDF necesita conexión la primera vez que se abre la app');return;}
  var doc=pdfBase('Informe de evaluación EBT',s.phase+' · '+phaseName(s.phase)+' · '+s.module+' · '+s.fleet);
  var y=T(doc,{startY:30,body:[['Fecha',fdate(s.date),'Instructor',(s.instructor||'')+(S.settings.instructorId?' ('+S.settings.instructorId+')':'')],['Modalidad',s.mode==='crew'?'Tripulación (CM1 + CM2)':'Un piloto','Estado',s.status==='signed'?'Firmada '+ftime(s.signedAt):'Borrador'],['Plantilla',(s.templateId&&S.evals[s.templateId]?S.evals[s.templateId].name:'—'),'Sello',s.hash||'—']],columnStyles:{0:{textColor:[108,108,115],cellWidth:24},2:{textColor:[108,108,115],cellWidth:22}}});
  seats(s).forEach(function(x,si){
    var p=pilot(s.pilots[x])||{},g=s.grades[x]||{};
    if(si>0||y>120){doc.addPage();y=12;}
    doc.setFont('helvetica','bold');doc.setFontSize(12.5);doc.setTextColor.apply(doc,PDFC.fg);doc.text(x.toUpperCase()+' · '+pname(s.pilots[x])+(p.emp?'  #'+p.emp:''),16,y+9);
    doc.setFont('helvetica','normal');doc.setFontSize(9);doc.setTextColor.apply(doc,PDFC.mu);
    doc.text('Resultado: '+RES[s.result[x]||''][0]+'   ·   Promedio: '+f1(sessAvg(s,x)),194,y+9,{align:'right'});
    // gráficas: radar (última vs anterior) + barras
    var hist=pilotSessions(s.pilots[x]).filter(function(q){return q.status==='signed'&&q.id!==s.id&&q.date<=s.date;});var prev=hist[hist.length-1];
    var vals=gradesOf(s,x),pv=prev?gradesOf(prev,seatOf(prev,s.pilots[x])):null;
    var series=[];if(pv)series.push({vals:pv,color:PDFC.g3});series.push({vals:vals,color:PDFC.acc});
    doc.setFontSize(8);doc.setTextColor.apply(doc,PDFC.mu);doc.text('Perfil de competencias'+(prev?' vs. '+prev.phase+' '+fdateShort(prev.date):''),16,y+17);doc.text('Grado por competencia'+(pv?' (línea: sesión anterior)':''),104,y+17);
    pdfRadar(doc,52,y+50,25,series);pdfBars(doc,104,y+21,90,vals,pv);
    var leg=[{c:PDFC.acc,t:'Esta sesión'}];if(pv)leg.unshift({c:PDFC.g3,t:'Anterior'});pdfLegend(doc,20,y+84,leg);
    y=T(doc,{startY:y+90,head:[['Comp.','Competencia','Grado','OB observados','Evidencia']],body:CK.map(function(k){var e=g[k]||{},ob=e.ob||{};return [k,CMAP[k].es,gtxt(e),Object.keys(ob).filter(function(o){return ob[o];}).map(function(o){return (ob[o]<0?'(-) ':'(+) ')+o;}).join('  '),e.note||''];}),
      columnStyles:{0:{cellWidth:13,fontStyle:'bold'},1:{cellWidth:52},2:{cellWidth:13},3:{cellWidth:30}},didParseCell:function(d){gradeCell(d,[2]);}});
  });
  if(s.events&&s.events.length){if(y>250){doc.addPage();y=16;}y=T(doc,{startY:y+6,head:[['Hora','Evento','Competencias','Grado','Nota']],body:s.events.map(function(e){return [e.at?hhmm(e.at):'',(e.phase?e.phase+' · ':'')+e.t,(e.c||[]).join(' '),seats(s).map(function(x){return e.g&&e.g[x]?x.toUpperCase()+' '+e.g[x]:'';}).filter(Boolean).join(' / ')||(e.done?'Hecho':'—'),e.note||''];}),columnStyles:{0:{cellWidth:14},2:{cellWidth:26},3:{cellWidth:22}}});}
  if(temList(s).length){if(y>230){doc.addPage();y=16;}y=T(doc,{startY:y+6,head:[['TEM','Categoría','Qué pasó','Quién','Competencias','Gestión']],body:temList(s).map(function(it){return [TEM_T[it.type].n,it.cat,it.txt||'',it.seat&&it.seat!=='crew'?it.seat.toUpperCase():'Tripulación',(it.c||[]).join(' '),TEM_MGMT[it.mgmt]?TEM_MGMT[it.mgmt][0]:''];}),columnStyles:{0:{cellWidth:22,fontStyle:'bold'},1:{cellWidth:32},3:{cellWidth:20},4:{cellWidth:26},5:{cellWidth:24}}});}
  debTargets(s).forEach(function(t){if(!t.val)return;if(y>240){doc.addPage();y=16;}pdfH(doc,'Debriefing y recomendaciones'+(t.label?' · '+t.label:''),y+10);y=pdfPara(doc,t.val,y+16);if(s.aiDraft&&s.aiDraft[t.key])y=pdfPara(doc,'Borrador propuesto por IA; revisado y firmado por el instructor, autor del registro.',y+2);});
  var who=[['inst','Instructor',s.instructor||'']].concat(seats(s).map(function(x){return [x,x.toUpperCase(),pname(s.pilots[x])];}));
  if(y>240){doc.addPage();y=16;}y+=8;var w=(178-(who.length-1)*6)/who.length;
  who.forEach(function(v,i){var x0=16+i*(w+6);if(s.sig[v[0]]){try{doc.addImage(s.sig[v[0]],'JPEG',x0,y,w,w*0.31);}catch(e){}}doc.setDrawColor(180,180,186);doc.setLineWidth(.3);doc.line(x0,y+w*0.31+2,x0+w,y+w*0.31+2);doc.setFontSize(8.4);doc.setTextColor(90,90,96);doc.text(v[1]+' · '+v[2],x0,y+w*0.31+6.5);});
  pdfFoot(doc,s.id);
  await saveFile('evaluacion-'+slug(s.phase+'-'+s.date+'-'+seats(s).map(function(x){return pname(s.pilots[x]).split(' ')[0];}).join('-'))+'.pdf',doc.output('blob'));
}
async function pdfPilot(pid){
  var p=pilot(pid);if(!p)return;var ss=pilotSessions(pid).filter(function(s){return s.status==='signed';});
  if(!hasPDF()){toast('El PDF necesita conexión la primera vez que se abre la app');return;}
  var doc=pdfBase('Historial de entrenamiento EBT',p.name+' · '+(p.rank==='CPT'?'Capitán':'Primer oficial')+' · '+p.fleet+(p.emp?' · #'+p.emp:''));
  if(!ss.length){pdfH(doc,'Sin sesiones firmadas',40);pdfFoot(doc,p.id);await saveFile('historial-'+slug(p.name)+'.pdf',doc.output('blob'));return;}
  var last=ss[ss.length-1],prev=ss[ss.length-2],lx=seatOf(last,pid);
  var lv=gradesOf(last,lx),pv=prev?gradesOf(prev,seatOf(prev,pid)):null;
  var all=compAverages(ss.map(function(s){var c=JSON.parse(JSON.stringify(s));c.mode='single';c.pilots={cm1:pid};c.grades={cm1:s.grades[seatOf(s,pid)]};return c;}));
  var rt=ss.filter(function(s){return s.result[seatOf(s,pid)]==='RT';}).length;
  // resumen
  var y=T(doc,{startY:30,body:[['Sesiones firmadas',String(ss.length),'Última sesión',last.phase+' · '+fdate(last.date)+' · promedio '+f1(sessAvg(last,lx))],['Promedio histórico',f1(avg(CK.map(function(k){return all[k];}))),'Entrenamiento adicional',rt+' de '+ss.length],['Módulos',Array.from(new Set(ss.map(function(s){return s.module;}))).join(', '),'Instructor del informe',S.settings.instructor]],columnStyles:{0:{textColor:[108,108,115],cellWidth:34},2:{textColor:[108,108,115],cellWidth:38}}});
  doc.setFontSize(8);doc.setTextColor.apply(doc,PDFC.mu);doc.text('Evolución del promedio por sesión',16,y+9);doc.text('Perfil: última sesión'+(prev?' vs. anterior':''),118,y+9);
  pdfTrend(doc,16,y+12,92,46,ss.map(function(s){return {label:s.phase+' '+fdateShort(s.date),v:sessAvg(s,seatOf(s,pid))};}),PDFC.acc);
  var series=[];if(pv)series.push({vals:pv,color:PDFC.g3});series.push({vals:lv,color:PDFC.acc});pdfRadar(doc,158,y+36,22,series);
  var leg=[{c:PDFC.acc,t:last.phase+' '+fdateShort(last.date)}];if(prev)leg.unshift({c:PDFC.g3,t:prev.phase+' '+fdateShort(prev.date)});pdfLegend(doc,122,y+64,leg);
  y+=70;doc.setFontSize(8);doc.setTextColor.apply(doc,PDFC.mu);doc.text('Promedio histórico por competencia (línea: última sesión)',16,y);
  y=pdfBars(doc,16,y+4,178,all,lv)+4;
  y=T(doc,{startY:y+4,head:[['Fecha','Fase','Módulo'].concat(CK).concat(['Prom.','Resultado'])],body:ss.map(function(s){var x=seatOf(s,pid),g=s.grades[x];return [fdateShort(s.date)+' '+String(s.date).slice(2,4),s.phase,s.module].concat(CK.map(function(k){return g[k]&&g[k].g||'';})).concat([f1(sessAvg(s,x)),RES[s.result[x]||''][0]]);}),
    styles:Object.assign({},TBL.styles,{fontSize:7.4,cellPadding:1.7}),didParseCell:function(d){gradeCell(d,[3,4,5,6,7,8,9,10,11]);}});
  // áreas de atención
  var w=weaknesses(pid);
  if(y>225){doc.addPage();y=10;}
  pdfH(doc,'Áreas de atención',y+10);y+=13;
  if(!w.comp.length&&!w.obs.length){y=pdfPara(doc,'Sin competencias en grado 1–2 ni OB deficientes en el historial firmado.',y+4);}
  else{
    if(w.comp.length)y=T(doc,{startY:y+2,head:[['Comp.','Competencia','Veces en 1–2','Última vez','Grado']],body:w.comp.map(function(c){return [c.k,CMAP[c.k].es,String(c.n),c.phase+' '+fdate(c.last),String(c.lastG)];}),columnStyles:{0:{cellWidth:14,fontStyle:'bold'},2:{cellWidth:24,halign:'center'},4:{cellWidth:14}},didParseCell:function(d){gradeCell(d,[4]);}});
    if(w.obs.length){y=T(doc,{startY:y+4,head:[['OB deficiente','Descripción','Veces']],body:w.obs.map(function(o){return [o.k+' · OB '+o.o,obText(o.k,o.o),String(o.n)];}),columnStyles:{0:{cellWidth:28,fontStyle:'bold'},2:{cellWidth:14,halign:'center'}}});}
    if(w.events.length){y=T(doc,{startY:y+4,head:[['Maniobra / procedimiento por reforzar','Competencias en 1–2','Veces','Última']],body:w.events.map(function(e){return [e.t,Object.keys(e.ks).join(' '),String(e.n),fdate(e.last)];}),columnStyles:{1:{cellWidth:34},2:{cellWidth:14,halign:'center'},3:{cellWidth:26}}});}
  }
  var g=last.grades[lx];var f=CK.filter(function(k){return g[k]&&g[k].g&&g[k].g<=2;});
  if(y>250){doc.addPage();y=10;}
  pdfH(doc,'Foco sugerido para el próximo módulo',y+10);
  y=pdfPara(doc,(f.length?f.map(function(k){return '• '+k+' · '+CMAP[k].es+' (grado '+g[k].g+' en '+last.phase+' '+fdate(last.date)+')';}).join('\n'):'• Sin competencias en grado 1–2 en la última sesión.')+(w.events.length?'\n• Repetir en simulador: '+w.events.slice(0,3).map(function(e){return e.t;}).join('; ')+'.':''),y+16);
  debTargets(last).forEach(function(t){if(!t.val)return;if(y>240){doc.addPage();y=10;}pdfH(doc,'Último debriefing registrado ('+last.phase+' '+fdate(last.date)+')',y+8);y=pdfPara(doc,t.val,y+14);});
  pdfFoot(doc,p.id);await saveFile('historial-'+slug(p.name)+'.pdf',doc.output('blob'));
}
async function pdfReport(){
  if(!hasPDF()){toast('El PDF necesita conexión la primera vez que se abre la app');return;}
  var f=S.ui.rf||{};var ss=live('sessions').filter(function(s){return s.status==='signed'&&(!f.module||s.module===f.module)&&(!f.fleet||s.fleet===f.fleet)&&(!f.phase||s.phase===f.phase);}).sort(sortByDate);
  if(!ss.length){toast('No hay sesiones con estos filtros');return;}
  var av=compAverages(ss);
  var doc=pdfBase('Informe consolidado EBT',[f.module||'Todos los módulos',f.fleet||'Todas las flotas',f.phase||'Todas las fases'].join(' · ')+' · '+ss.length+' sesiones');
  var y=T(doc,{startY:30,head:[['Código','Competencia','Promedio']],body:CK.map(function(k){return [k,CMAP[k].es,f1(av[k])];}),columnStyles:{0:{cellWidth:18,fontStyle:'bold'},2:{cellWidth:24,halign:'center'}},didParseCell:function(d){if(d.section==='body'&&d.column.index===2){var v=Math.round(av[CK[d.row.index]]);if(v){d.cell.styles.fillColor=RGB[v];d.cell.styles.textColor=[255,255,255];d.cell.styles.fontStyle='bold';}}}});
  var rows=[];ss.forEach(function(s){seats(s).forEach(function(x){rows.push([fdate(s.date),s.phase,s.fleet,pname(s.pilots[x]),x.toUpperCase(),f1(sessAvg(s,x)),RES[s.result[x]||''][0]]);});});
  T(doc,{startY:y+8,head:[['Fecha','Fase','Flota','Piloto','Asiento','Prom.','Resultado']],body:rows});
  pdfFoot(doc);await saveFile('informe-ebt-'+slug(f.module||'general')+'.pdf',doc.output('blob'));
}
function htmlExport(title,body){return '<!doctype html><html lang="es"><head><meta charset="utf-8"><title>'+esc(title)+'</title><style>body{font-family:-apple-system,Helvetica,Arial,sans-serif;max-width:820px;margin:32px auto;padding:0 16px;color:#1c1c1f}img{max-width:220px}button{display:none}.tag,.pill,.code{font-size:11px;margin-right:4px}.gchip{display:inline-block;min-width:22px;text-align:center;border-radius:5px;background:#eee;font-weight:700}table{border-collapse:collapse;width:100%}td{border-bottom:1px solid #eee;padding:6px}</style></head><body><h1>'+esc(title)+'</h1>'+body+'</body></html>';}
function csv(){
  var rows=[['fecha','modulo','flota','fase','asiento','piloto','codigo','cargo'].concat(CK).concat(['promedio','resultado','estado','instructor','id_sesion'])];
  live('sessions').sort(sortByDate).forEach(function(s){seats(s).forEach(function(x){var p=pilot(s.pilots[x])||{};var g=s.grades[x]||{};rows.push([s.date,s.module,s.fleet,s.phase,x.toUpperCase(),p.name||'',p.emp||'',p.rank||''].concat(CK.map(function(k){return g[k]?(g[k].no?'N/O':(g[k].g||'')):'';})).concat([sessAvg(s,x).toFixed(2),RES[s.result[x]||''][0],s.status,s.instructor||'',s.id]));});});
  var txt='\ufeff'+rows.map(function(r){return r.map(function(v){v=String(v);return /[",;\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v;}).join(';');}).join('\n');
  saveFile('ebt-instructor-'+today()+'.csv',txt);
}
function backup(){var o={app:'ebt-instructor',version:1,exportedAt:new Date().toISOString(),trainees:S.trainees,sessions:S.sessions,instructors:S.instructors,evals:S.evals,schedule:S.schedule,notices:S.notices};saveFile('ebt-instructor-respaldo-'+today()+'.json',JSON.stringify(o,null,1));}
function pickFileText(cb){var i=document.createElement('input');i.type='file';i.accept='.csv,.json,text/csv,application/json';i.onchange=function(){var f=i.files[0];if(!f)return;var r=new FileReader();r.onload=function(){cb(r.result,f.name);};r.readAsText(f);};i.click();}
function pickFile(cb){var i=document.createElement('input');i.type='file';i.accept='application/json,.json';i.onchange=function(){var f=i.files[0];if(!f)return;var r=new FileReader();r.onload=function(){try{cb(JSON.parse(r.result));}catch(e){toast('El archivo no es un JSON válido');}};r.readAsText(f);};i.click();}
function mergeIn(o){var n=0;COLLS.forEach(function(c){var src=o[c]||{};(Array.isArray(src)?src:Object.keys(src).map(function(k){return src[k];})).forEach(function(r){if(!r||!r.id)return;var l=S[c][r.id];if(!l||(r.updatedAt||0)>(l.updatedAt||0)){S[c][r.id]=r;S.outbox[c+'/'+r.id]=1;n++;}});});persist();scheduleFlush();render();toast(n+' registros importados');}
function importTpl(o){var arr=Array.isArray(o)?o:o.evals?(Array.isArray(o.evals)?o.evals:Object.keys(o.evals).map(function(k){return o.evals[k];})):[o];var n=0;
  arr.forEach(function(t){if(!t||!t.name)return;var rec={id:t.id||uid('t'),name:t.name,module:t.module||S.settings.module,fleet:t.fleet||'A320',phase:t.phase||'EVAL',note:t.note||'',events:(t.events||[]).map(function(e){return typeof e==='string'?{t:e,c:[]}:{t:e.t||e.name||'',c:(e.c||e.competencies||[]).filter(function(k){return CMAP[k];})};})};put('evals',rec,true);n++;});render();toast(n+' plantilla'+(n===1?'':'s')+' importada'+(n===1?'':'s'));}
function loadDemo(){var d=demoData();['trainees','sessions','evals','schedule','notices'].forEach(function(c){Object.keys(d[c]).forEach(function(k){if(!S[c][k]||S[c][k].deleted){S[c][k]=d[c][k];S[c][k].deleted=false;S[c][k].updatedAt=Date.now();S.outbox[c+'/'+k]=1;}});});persist();scheduleFlush();render();toast('Datos de ejemplo cargados');}
function clearDemo(){var n=0;['trainees','sessions','evals','schedule','notices'].forEach(function(c){live(c).forEach(function(r){if(r.example){r.deleted=true;r.updatedAt=Date.now();S.outbox[c+'/'+r.id]=1;n++;}});});persist();scheduleFlush();render();toast(n+' registros de ejemplo eliminados');}

async function sealHash(s){
  var o=JSON.parse(JSON.stringify(s));delete o.sig;delete o.hash;delete o.updatedAt;delete o.by;
  var txt=JSON.stringify(o)+Object.keys(s.sig).map(function(k){return (s.sig[k]||'').length;}).join(',');
  try{var b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(txt));return Array.from(new Uint8Array(b)).slice(0,10).map(function(x){return x.toString(16).padStart(2,'0');}).join('').toUpperCase().match(/.{4}/g).join('-');}
  catch(e){var h=0;for(var i=0;i<txt.length;i++){h=(h*31+txt.charCodeAt(i))|0;}return 'H'+(h>>>0).toString(16).toUpperCase();}
}

/* ============ Acciones ============ */
function toast(m){var t=document.createElement('div');t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(function(){t.remove();},2600);}
function go(r){if(r==='trainees')r='pilotos';S.ui.route=r;S.ui.sheet=null;persist();render();window.scrollTo(0,0);}
function openSheet(o){S.ui.sheet=o;render();}
var ACT={
  go:function(el){go(el.dataset.r);},
  newEval:function(el){var u=S.ui.setup=null;vSetup();if(el.dataset.pid){var p=pilot(el.dataset.pid);if(p){S.ui.setup.fleet=p.fleet;S.ui.setup.cm1=p.id;}}S.ui.cur=null;go('evaluar');},
  resume:function(el){S.ui.cur=el.dataset.id;S.ui.step=2;S.ui.seat='cm1';go('evaluar');},
  setup:function(el){var u=S.ui.setup;u[el.dataset.k]=el.dataset.v;if(el.dataset.k==='fleet'){u.cm1='';u.cm2='';u.templateId='';}persist();render();},
  startEval:function(){var u=S.ui.setup;
    if(!u.cm1)return toast('Selecciona el trainee'+(u.mode==='crew'?' CM1':''));
    if(u.mode==='crew'&&!u.cm2)return toast('Selecciona el piloto CM2');
    if(u.mode==='crew'&&u.cm1===u.cm2)return toast('CM1 y CM2 deben ser trainees distintos');
    var t=u.templateId&&S.evals[u.templateId];
    var s={id:uid('s'),date:u.date||today(),module:u.module,fleet:u.fleet,phase:u.phase,mode:u.mode,templateId:u.templateId||'',events:t?(t.events||[]).map(function(e){return {t:e.t,c:(e.c||[]).slice(),phase:e.phase||'',done:false,g:{}};}):[],
      slotId:u.slotId||'',pilots:{cm1:u.cm1,cm2:u.mode==='crew'?u.cm2:''},grades:{cm1:{},cm2:{}},result:{cm1:'',cm2:''},debrief:'',focus:{cm1:[],cm2:[]},sig:{inst:'',cm1:'',cm2:''},status:'draft',instructor:S.settings.instructor,iid:myId(),targets:t&&t.targets?t.targets.slice():[]};
    S.ui.cur=s.id;S.ui.step=2;S.ui.seat='cm1';S.ui.setup=null;S.ui.open={};put('sessions',s,true);render();window.scrollTo(0,0);},
  step:function(el){var v=+el.dataset.v;if(v===1){return;}S.ui.step=v;persist();render();window.scrollTo(0,0);},
  seat:function(el){S.ui.seat=el.dataset.v;persist();render();},
  grade:function(el){var s=cur(),seat=el.dataset.seat||S.ui.seat,k=el.dataset.k,v=+el.dataset.v;var g=s.grades[seat][k]||(s.grades[seat][k]={g:0,ob:{},note:''});g.g=g.g===v?0:v;g.no=false;put('sessions',s);},
  gradeNO:function(el){var s=cur(),seat=el.dataset.seat||S.ui.seat,k=el.dataset.k;var g=s.grades[seat][k]||(s.grades[seat][k]={g:0,ob:{},note:''});g.no=!g.no;if(g.no)g.g=0;put('sessions',s);},
  evGrade:function(el){var s=cur();var e=s.events[+el.dataset.i];e.g=e.g||{};var x=el.dataset.seat,v=+el.dataset.v;e.g[x]=e.g[x]===v?0:v;if(e.g[x]&&!e.done)e.done=true;put('sessions',s);},
  ob:function(el){var s=cur(),seat=el.dataset.seat||S.ui.seat,k=el.dataset.k,o=el.dataset.o;var g=s.grades[seat][k]||(s.grades[seat][k]={g:0,ob:{},note:''});g.ob=g.ob||{};var v=g.ob[o]||0;g.ob[o]=v===0?-1:v<0?1:0;if(!g.ob[o])delete g.ob[o];(S.ui.open=S.ui.open||{})[seat+k]=true;put('sessions',s);},
  evDone:function(el){var s=cur();var e=s.events[+el.dataset.i];e.done=!e.done;put('sessions',s);},
  evDel:function(el){var s=cur();s.events.splice(+el.dataset.i,1);put('sessions',s);},
  newEvent:function(){S.ui.form={t:'',c:[],phase:''};openSheet({type:'event'});},
  evTag:function(el){var c=S.ui.form.c,k=el.dataset.k,i=c.indexOf(k);if(i>=0)c.splice(i,1);else c.push(k);render();},
  evAddSheet:function(){var s=cur(),f=S.ui.form;var t=(f.t||'').trim();if(!t)return toast('Escribe el nombre del evento');s.events.push({t:t,c:f.c.slice(),phase:f.phase||'',done:false,g:{}});S.ui.sheet=null;put('sessions',s);toast('Evento agregado');},
  nextSeat:function(el){S.ui.seat=el.dataset.v;persist();render();window.scrollTo(0,0);toast('Calificando '+el.dataset.v.toUpperCase()+' · '+pname(cur().pilots[el.dataset.v]));},
  phrase:function(el){var s=cur(),seat=el.dataset.seat||S.ui.seat,k=el.dataset.k;var g=s.grades[seat][k]||(s.grades[seat][k]={g:0,ob:{},note:''});g.note=(g.note?g.note.replace(/\s*$/,'')+' ':'')+el.dataset.t;put('sessions',s,true);var ta=document.getElementById('n-'+seat+'-'+k);if(ta){ta.value=g.note;ta.focus();}},
  debMode:function(el){var s=cur();s.debriefMode=el.dataset.v;put('sessions',s);},
  debPhrase:function(el){var s=cur();var t=debTargets(s).filter(function(x){return x.key===el.dataset.t;})[0];if(!t)return;var v=(t.val?t.val.replace(/\s*$/,'')+' ':'')+el.dataset.txt;setPath(s,t.path,v);put('sessions',s,true);var ta=document.getElementById('deb-'+t.key);if(ta){ta.value=v;ta.focus();}},
  result:function(el){var s=cur();s.result[el.dataset.seat]=el.dataset.v;put('sessions',s);},
  saveDraft:function(){var s=cur();if(s){put('sessions',s,true);toast('Borrador guardado'+(DB&&online()?'':' en este dispositivo'));}},
  discard:function(el){openSheet({type:'confirm',title:'Descartar evaluación',msg:'Se eliminará este borrador y sus calificaciones. Esta acción no se puede deshacer.',yes:'Descartar',act:'discardYes',id:el.dataset.id});},
  sigClear:function(el){var s=cur();if(!s)return;s.sig[el.dataset.k]='';put('sessions',s);},
  aiDebrief:function(el){aiDebrief(el.dataset.t,el);},
  finalize:async function(){var s=cur();if(!s)return;
    var miss=seats(s).filter(function(x){return graded(s,x)<9;});if(miss.length)return toast('Faltan competencias por calificar en '+miss.map(function(x){return x.toUpperCase();}).join(' y '));
    var nr=seats(s).filter(function(x){return !s.result[x];});if(nr.length)return toast('Elige el resultado de '+nr.map(function(x){return x.toUpperCase();}).join(' y '));
    var nm=ORG('requireNoteForNO',true)?noMissing(s):[];if(nm.length)return toast('Justifica el N/O (no observado) en: '+nm.join(', '));
    var lim=+ORG('requireNoteAtOrBelow',2)||0,nl=[];if(lim)seats(s).forEach(function(x){CK.forEach(function(k){var e=(s.grades[x]||{})[k];if(e&&e.g&&e.g<=lim&&!(e.note||'').trim())nl.push(x.toUpperCase()+' '+k);});});if(nl.length)return toast('Escribe la evidencia de los grados '+(lim===1?'1':'1–'+lim)+' en: '+nl.join(', '));
    if(ORG('requireTraineeSignature',false)){var ns=seats(s).filter(function(x){return !s.sig[x];});if(ns.length)return toast('Falta la firma de '+ns.map(function(x){return x.toUpperCase();}).join(' y '));}
    if(!s.sig.inst)return toast('Falta la firma del instructor');
    if(!s.iid)s.iid=myId();if(s.iid===myId()){s.instructor=S.settings.instructor;s.instructorId=S.settings.instructorId||'';}s.status='signed';s.signedAt=Date.now();s.hash=await sealHash(s);
    put('sessions',s,true);if(s.slotId&&S.schedule[s.slotId]){var sl=S.schedule[s.slotId];sl.sessionId=s.id;sl.status='done';put('schedule',sl,true);}S.ui.cur=null;S.ui.step=1;toast('Evaluación firmada y cerrada');
    S.ui.route='inicio';openSheet({type:'session',id:s.id});},
  openSession:function(el){openSheet({type:'session',id:el.dataset.id});},
  openPilot:function(el){S.ui.pid=el.dataset.id;go('piloto');},
  pf:function(el){S.ui.pf=el.dataset.v;render();},
  newPilot:function(){S.ui.form={name:'',emp:'',base:'BOG',rank:'FO',fleet:(S.ui.setup&&S.ui.setup.fleet)||S.settings.fleets[0]};openSheet({type:'pilot'});},
  editPilot:function(el){S.ui.form=JSON.parse(JSON.stringify(S.trainees[el.dataset.id]));openSheet({type:'pilot',id:el.dataset.id});},
  form:function(el){S.ui.form[el.dataset.k]=el.dataset.v;render();},
  savePilot:function(){var f=S.ui.form;if(!f.name||!f.name.trim())return toast('Escribe el nombre del trainee');var r=Object.assign({},f,{id:f.id||uid('p'),name:f.name.trim()});put('trainees',r,true);
    if(S.ui.setup&&!S.ui.setup.cm1&&r.fleet===S.ui.setup.fleet)S.ui.setup.cm1=r.id;S.ui.sheet=null;render();toast('Trainee guardado');},
  delPilot:function(el){openSheet({type:'confirm',title:'Eliminar trainee',msg:'El trainee dejará de aparecer en la lista. Sus sesiones firmadas se conservan.',act:'delPilotYes',id:el.dataset.id});},
  newTpl:function(){S.ui.form={name:'',module:S.settings.module,fleet:S.settings.fleets[0],phase:'EVAL',note:'',events:[{t:'',c:[]}]};openSheet({type:'tpl'});},
  editTpl:function(el){S.ui.form=JSON.parse(JSON.stringify(S.evals[el.dataset.id]));openSheet({type:'tpl',id:el.dataset.id});},
  useTpl:function(el){var t=S.evals[el.dataset.id];S.ui.cur=null;S.ui.setup=null;vSetup();Object.assign(S.ui.setup,{fleet:t.fleet,module:t.module,phase:t.phase,templateId:t.id});go('evaluar');},
  tplEvAdd:function(){S.ui.form.events.push({t:'',c:[],phase:''});render();},
  tplEvDel:function(el){S.ui.form.events.splice(+el.dataset.i,1);render();},
  tplEvC:function(el){var e=S.ui.form.events[+el.dataset.i];var k=el.dataset.k,i=e.c.indexOf(k);if(i>=0)e.c.splice(i,1);else e.c.push(k);render();},
  saveTpl:function(){var f=S.ui.form;if(!f.name||!f.name.trim())return toast('Escribe un nombre para la plantilla');f.events=(f.events||[]).filter(function(e){return e.t&&e.t.trim();});var r=Object.assign({},f,{id:f.id||uid('t')});delete r.example;r.example=!!f.example;put('evals',r,true);S.ui.sheet=null;render();toast('Plantilla guardada');},
  delTpl:function(el){openSheet({type:'confirm',title:'Eliminar plantilla',msg:'La plantilla se eliminará de la biblioteca para todos los instructores.',act:'delTplYes',id:el.dataset.id});},
  delSession:function(el){var ds=S.sessions[el.dataset.id];if(!isCoord()&&!(ds&&ds.status==='draft'&&isMine(ds)))return toast('Solo Coordinación EBT puede eliminar sesiones firmadas');openSheet({type:'confirm',title:'Eliminar sesión',msg:'La sesión y sus firmas se eliminarán del historial para todos los instructores.',act:'delSessionYes',id:el.dataset.id});},
  confirmYes:function(){var sh=S.ui.sheet;S.ui.sheet=null;
    if(sh.act==='discardYes'){remove('sessions',sh.id);S.ui.cur=null;toast('Borrador descartado');}
    else if(sh.act==='delPilotYes'){remove('trainees',sh.id);go('pilotos');toast('Trainee eliminado');}
    else if(sh.act==='delTplYes'){remove('evals',sh.id);toast('Plantilla eliminada');}
    else if(sh.act==='delSessionYes'){remove('sessions',sh.id);toast('Sesión eliminada');}
    else if(sh.act==='delSlotYes'){remove('schedule',sh.id);toast('Sesión quitada del cronograma');}
    render();},
  closeSheet:function(){S.ui.sheet=null;render();},
  scrim:function(el,e){if(e.target===el){S.ui.sheet=null;render();}},
  pdfSession:function(el){pdfSession(el.dataset.id);},
  pdfPilot:function(el){pdfPilot(el.dataset.id);},
  pdfReport:function(){if(!isCoord())return toast('Solo el Manager EBT genera informes');pdfReport();},
  csv:function(){if(!isCoord())return toast('Solo el Manager EBT exporta datos');csv();},backup:function(){if(!isCoord())return toast('Solo el Manager EBT exporta datos');backup();},
  restore:function(){pickFile(mergeIn);},
  importSched:function(){pickFileText(importSchedule);},
  importTpl:function(){pickFile(importTpl);},
  loadDemo:loadDemo,clearDemo:function(){openSheet({type:'confirm',title:'Borrar ejemplos',msg:'Se eliminarán los trainees, sesiones y plantillas marcados como Ejemplo.',yes:'Borrar',act:'clearDemoYes'});},
  syncNow:function(){if(!DB)return toast('La sincronización está disponible al abrir la app en Claude');if(!online())return toast('Sin conexión: los cambios se subirán al reconectar');flush().then(function(){toast('Sincronizado');});},
  askPilot:function(el){S.ui.aiCtx='p:'+el.dataset.id;S.ui.chat=[];go('asistente');},
  askSession:function(el){S.ui.aiCtx='s:'+el.dataset.id;S.ui.chat=[];go('asistente');},
  aiQuick:function(el){aiAsk(el.dataset.q);},
  aiSend:function(){var i=document.getElementById('ai-in');if(i){var v=i.value;i.value='';aiAsk(v);}},
  aiClear:function(){S.ui.chat=[];render();},
  photo:function(){var i=document.createElement('input');i.type='file';i.accept='image/*';i.onchange=function(){var f=i.files[0];if(!f)return;var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var c=document.createElement('canvas'),sz=160,m=Math.min(im.width,im.height);c.width=sz;c.height=sz;c.getContext('2d').drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,sz,sz);S.settings.photo=c.toDataURL('image/jpeg',.85);persist();render();};im.src=r.result;};r.readAsDataURL(f);};i.click();},
  photoClear:function(){S.settings.photo='';persist();render();},
  viewAs:function(el){S.ui.viewAs=el.dataset.v||'';S.ui.onlyMine=null;persist();render();toast(el.dataset.v?'Viendo la app como Instructor':'Vista de Manager');}
};
Object.assign(ACT,AGENDA_ACT,ROLE_ACT,IE_ACT);
var _cy=ACT.confirmYes;ACT.confirmYes=function(){var sh=S.ui.sheet;if(sh&&sh.act==='clearDemoYes'){S.ui.sheet=null;clearDemo();return;}_cy();};

function setPath(obj,path,val){var p=path.split('.');for(var i=0;i<p.length-1;i++){obj=obj[p[i]]=obj[p[i]]||{};}obj[p[p.length-1]]=val;}
document.addEventListener('click',function(e){var el=e.target.closest('[data-act]');if(!el)return;var f=ACT[el.dataset.act];if(!f)return;if(el.tagName==='BUTTON'||el.tagName==='TR')e.preventDefault();f(el,e);});
document.addEventListener('input',function(e){var t=e.target;
  if(t.dataset.bind){setPath(S,t.dataset.bind,t.value);if(t.dataset.resetchat)S.ui.chat=[];persist();if(t.dataset.bind==='ui.q'||t.dataset.rerender)render();else if(t.dataset.bind.indexOf('settings.')===0)renderSide();}
  else if(t.dataset.sb){var s=cur();if(!s)return;setPath(s,t.dataset.sb,t.value);clearTimeout(t._t);t._t=setTimeout(function(){put('sessions',s,true);},400);}
  else if(t.dataset.fb){S.ui.form[t.dataset.fb]=t.value;}
  else if(t.dataset.fe!=null){S.ui.form.events[+t.dataset.fe].t=t.value;}
  else if(t.dataset.fep!=null){S.ui.form.events[+t.dataset.fep].phase=t.value;}
});
document.addEventListener('change',function(e){var t=e.target;
  if(t.dataset.lines){var v=t.value.split('\n').map(function(x){return x.trim();}).filter(Boolean);S.settings[t.dataset.lines]=v;persist();}
  if(t.dataset.list){var v=t.value.split(',').map(function(x){return x.trim();}).filter(Boolean);if(v.length){S.settings[t.dataset.list]=v;if(t.dataset.list==='modules'&&v.indexOf(S.settings.module)<0)S.settings.module=v[0];persist();render();}}
  if(t.tagName==='SELECT'&&t.dataset.bind&&!t.dataset.rerender&&t.dataset.bind.indexOf('ui.setup')===0){render();}
  if(t.dataset.fb&&t.dataset.rerender){render();}
});
document.addEventListener('toggle',function(e){var d=e.target;if(d.classList&&d.classList.contains('disc')){(S.ui.open=S.ui.open||{})[d.dataset.k]=d.open;}},true);
document.addEventListener('keydown',function(e){if(e.target.id==='ai-in'&&e.key==='Enter'&&!e.shiftKey){e.preventDefault();ACT.aiSend();}if(e.target.id==='ev-t'&&e.key==='Enter'){e.preventDefault();ACT.evAddSheet();}if(e.key==='Escape'&&S.ui.sheet){S.ui.sheet=null;render();}});
function renderSide(){var b=document.querySelector('.brand span');if(b)b.textContent='Instructores · '+S.settings.module;}

/* ============ Render ============ */
var VIEWS={inicio:vInicio,evaluar:vEvaluar,pilotos:vPilotos,piloto:vPiloto,biblioteca:vBiblioteca,informes:vInformes,asistente:vAsistente,ajustes:vAjustes,mas:vMas,agenda:vAgenda,instructores:vInstructores,ebtm:vEBTM};
var root;
function render(){
  if(!root)return;
  var a=document.activeElement,aid=a&&a.id,ss=null,se=null;try{ss=a.selectionStart;se=a.selectionEnd;}catch(e){}
  var y=window.scrollY,sh=document.getElementById('sheet'),shy=sh?sh.scrollTop:0;
  var v=VIEWS[S.ui.route]||vInicio;
  var html;try{html=shell(v());}catch(err){console.error(err);html=shell('<div class="card">'+empty('alert','Algo salió mal en esta vista',esc(err.message),'<button class="btn" data-act="go" data-r="inicio">Ir al inicio</button>')+'</div>');}
  root.innerHTML=LOCKED?lockHTML():html+sheetHTML();
  if(!LOCKED)mountSigs();
  window.scrollTo(0,y);var sh2=document.getElementById('sheet');if(sh2)sh2.scrollTop=shy;
  if(aid){var el=document.getElementById(aid);if(el&&el.focus){el.focus({preventScroll:true});try{if(ss!=null)el.setSelectionRange(ss,se);}catch(e){}}}
}
function boot(){
  S=load();root=document.getElementById('root');
  
  if(S.ui.route==='evaluar'&&!cur()&&S.ui.step>1)S.ui.step=1;
  if(!aiOn()){var hs=document.createElement('style');hs.textContent='[data-act="aiDebrief"],[data-act="askSession"],[data-act="askPilot"],[data-r="asistente"]{display:none!important}';document.head.appendChild(hs);}
  sbBoot();if(aiOn())getSample();setTimeout(loadLibs,1500);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);else boot();
/* ============ Acceso: cuentas reales (Supabase Auth) ============ */
var AUTH={mode:'login',email:'',pw:'',pw2:'',err:'',info:'',busy:false,kind:''};
function firstName(n){var w=String(n||'').split(/\s+/).filter(function(x){return x&&!/^(cap|cmte|cpt|fo|ing|sr|sra|dr|lic)\.?$/i.test(x);});return w[0]||'';}
function ieBlocked(){return false;}
function blockedHTML(){return '';}
function lockIfNeeded(){}
function fld(id,key,lbl,type,ph,extra){return '<div class="field" style="text-align:left"><label for="'+id+'">'+lbl+'</label><input class="input" id="'+id+'" type="'+(type||'text')+'" data-auth="'+key+'" value="'+esc(AUTH[key]||'')+'" placeholder="'+esc(ph||'')+'" '+(extra||'')+'></div>';}
function lockHTML(){
  var m=AUTH.mode,body='',title='EBT Instructor',sub='Evaluación por competencias';
  if(m==='loading'){body='<p class="small muted">Cargando tu cuenta…</p>';}
  else if(m==='login'){body=fld('au-e','email','Correo','email','nombre@empresa.com','autocapitalize="none" autocomplete="username" autofocus')+fld('au-p','pw','Contraseña','password','','autocomplete="current-password"')+
    '<label class="row small" style="gap:8px;justify-content:flex-start;cursor:pointer"><input type="checkbox" data-auth="remember" '+(AUTH.remember!==false?'checked':'')+'> Mantener la sesión en este dispositivo</label>'+
    '<button class="btn primary" data-act="login" style="width:100%;height:44px"'+(AUTH.busy?' disabled':'')+'>'+(AUTH.busy?'Entrando…':'Entrar')+'</button>'+
    '<button class="btn ghost sm" data-act="authMode" data-m="forgot">¿Olvidaste tu contraseña?</button>'+
    '<p class="tiny muted" style="margin-top:4px">El acceso lo habilita el Manager EBT con una invitación a tu correo.</p>';}
  else if(m==='forgot'){body='<p class="small muted">Escribe tu correo y te enviaremos un enlace para crear una contraseña nueva.</p>'+fld('au-e','email','Correo','email','nombre@empresa.com','autocapitalize="none" autocomplete="username" autofocus')+
    '<button class="btn primary" data-act="forgot" style="width:100%;height:44px"'+(AUTH.busy?' disabled':'')+'>Enviar enlace</button><button class="btn ghost sm" data-act="authMode" data-m="login">Volver</button>';}
  else if(m==='sent'){body='<div class="note" style="text-align:left">Si '+esc(AUTH.email)+' tiene acceso, en unos minutos te llegará un correo con el enlace. Revisa también la carpeta de spam.</div><button class="btn ghost sm" data-act="authMode" data-m="login">Volver a ingresar</button>';}
  else if(m==='setpw'){title=AUTH.kind==='invite'?'Bienvenido':'Nueva contraseña';sub=AUTH.kind==='invite'?'Crea tu contraseña para entrar a EBT Instructor':'Crea una contraseña nueva para '+esc(myEmail());
    body=fld('au-p','pw','Contraseña (mínimo 8 caracteres)','password','','autocomplete="new-password" autofocus')+fld('au-p2','pw2','Repite la contraseña','password','','autocomplete="new-password"')+
    '<button class="btn primary" data-act="setPw" style="width:100%;height:44px"'+(AUTH.busy?' disabled':'')+'>Guardar y entrar</button>';}
  else if(m==='noaccess'){body='<div class="note" style="text-align:left">La cuenta <b>'+esc(myEmail())+'</b> no tiene acceso a EBT Instructor. Pide al Manager EBT que te envíe una invitación.</div><button class="btn" data-act="logout">Usar otra cuenta</button>';}
  else if(m==='inactive'){body='<div class="note" style="text-align:left">El Manager EBT desactivó el acceso de <b>'+esc(myEmail())+'</b>. Si crees que es un error, escríbele para reactivarlo.</div><button class="btn" data-act="logout">Usar otra cuenta</button>';}
  else if(m==='linkerr'){body='<div class="note" style="text-align:left">El enlace del correo venció o ya se usó. Pide al Manager que te reenvíe la invitación, o usa «¿Olvidaste tu contraseña?» si ya tenías cuenta.</div><button class="btn primary" data-act="authMode" data-m="login">Ir a ingresar</button><button class="btn ghost sm" data-act="authMode" data-m="forgot">¿Olvidaste tu contraseña?</button>';}
  var i=syncInfo();
  return '<div class="scrim" style="background:var(--bg);z-index:200;align-items:center;padding:24px" id="lock"><form onsubmit="return false" style="width:min(380px,100%);display:flex;flex-direction:column;gap:12px;text-align:center"><img src="'+LOGO_BIG+'" alt="" style="display:block;margin:0 auto 6px;width:92px;height:92px"><h2>'+title+'</h2><p class="small muted" style="margin:-4px 0 10px">'+sub+'</p>'+body+
   (AUTH.err?'<div class="note" style="color:var(--bad);text-align:left">'+esc(AUTH.err)+'</div>':'')+(AUTH.info?'<div class="note" style="text-align:left">'+esc(AUTH.info)+'</div>':'')+
   (online()?'':'<p class="tiny muted">Sin conexión. Si ya iniciaste sesión antes en este dispositivo con «Mantener la sesión», la app abre sin internet.</p>')+'</form></div>';
}
function authFail(msg){AUTH.err=msg;AUTH.busy=false;render();}
function authMsg(e){
  if(e&&e.offline)return 'Sin conexión. Conéctate a internet para iniciar sesión.';
  var c=(e&&(e.code||''))+' '+(e&&e.message||'');
  if(/invalid_credentials|Invalid login/i.test(c))return 'Correo o contraseña incorrectos.';
  if(/email_not_confirmed/i.test(c))return 'Tu correo aún no está confirmado. Abre el enlace de la invitación.';
  if(/weak_password|at least/i.test(c))return 'La contraseña es muy débil. Usa al menos 8 caracteres combinando letras y números.';
  if(/same_password|different from the old/i.test(c))return 'La contraseña nueva debe ser distinta de la anterior.';
  if(/over_email_send_rate|rate limit/i.test(c))return 'Se enviaron demasiados correos. Espera unos minutos e intenta de nuevo.';
  if(/reauthentication/i.test(c))return 'Por seguridad, cierra sesión y usa «¿Olvidaste tu contraseña?» para cambiarla.';
  return (e&&e.message)||'No se pudo completar. Intenta de nuevo.';
}
function resetLocalData(){var keep={photo:S.settings.photo,remember:S.settings.remember};S=blank();S.settings.photo=keep.photo||'';S.settings.remember=keep.remember;}
async function afterLogin(){
  var id=myId();if(S.owner&&S.owner!==id)resetLocalData();S.owner=id;
  try{sessionStorage.setItem('ei-active','1');}catch(e){}
  AUTH.pw='';AUTH.pw2='';AUTH.err='';AUTH.info='';AUTH.busy=false;AUTH.mode='loading';persist0();render();
  await connect();
  if(!LOCKED)toast('Bienvenido, '+(firstName(S.settings.instructor)||myEmail()));
}
var AUTH_ACT={
  authMode:function(el){AUTH.mode=el.dataset.m;AUTH.err='';AUTH.info='';render();},
  login:async function(){var e=String(AUTH.email||'').trim().toLowerCase(),p=AUTH.pw||'';if(!e||!p)return authFail('Escribe tu correo y tu contraseña.');
    AUTH.busy=true;AUTH.err='';render();
    try{await sbSignIn(e,p);S.settings.remember=AUTH.remember!==false;await afterLogin();}catch(err){authFail(authMsg(err));}},
  forgot:async function(){var e=String(AUTH.email||'').trim().toLowerCase();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))return authFail('Escribe un correo válido.');
    AUTH.busy=true;render();try{await sbRecover(e);AUTH.busy=false;AUTH.err='';AUTH.mode='sent';render();}catch(err){authFail(authMsg(err));}},
  setPw:async function(){if((AUTH.pw||'').length<8)return authFail('La contraseña debe tener al menos 8 caracteres.');if(AUTH.pw!==AUTH.pw2)return authFail('Las contraseñas no coinciden.');
    AUTH.busy=true;render();try{await sbSetPassword(AUTH.pw);S.settings.remember=true;await afterLogin();}catch(err){authFail(authMsg(err));}},
  logout:function(){var n=Object.keys(S.outbox||{}).length;if(n&&SB.session&&!LOCKED){openSheet({type:'confirm',title:'Cerrar sesión',msg:'Hay '+n+' cambio'+(n>1?'s':'')+' sin subir. Si cierras sesión ahora se perderán. Conéctate a internet y espera a que diga «Sincronizado».',yes:'Cerrar sesión igual',act:'logoutYes'});return;}doLogout();},
  changePw:async function(){var n=document.getElementById('cp-new'),n2=document.getElementById('cp-new2');if(!n)return;
    if(n.value.length<8)return toast('La contraseña nueva debe tener al menos 8 caracteres');if(n.value!==n2.value)return toast('Las contraseñas no coinciden');
    try{await sbSetPassword(n.value);n.value=n2.value='';toast('Contraseña actualizada');}catch(e){toast(authMsg(e));}}
};
async function doLogout(){await sbSignOut();clearInterval(pullT);resetLocalData();S.owner='';try{sessionStorage.removeItem('ei-active');}catch(e){}persist0();LOCKED=true;AUTH.mode='login';AUTH.err='';AUTH.info='';dbState='off';render();}
document.addEventListener('input',function(e){var t=e.target;if(t.dataset&&t.dataset.auth){AUTH[t.dataset.auth]=t.type==='checkbox'?t.checked:t.value;}});
document.addEventListener('change',function(e){var t=e.target;if(t.dataset&&t.dataset.auth&&t.type==='checkbox'){AUTH[t.dataset.auth]=t.checked;}});
document.addEventListener('keydown',function(e){if(LOCKED&&e.key==='Enter'&&e.target.dataset&&e.target.dataset.auth){e.preventDefault();var f={login:'login',forgot:'forgot',setpw:'setPw'}[AUTH.mode];if(f&&ACT[f])ACT[f]();}});

async function sbBoot(){
  sbLoad();applyScale();
  var h=(location.hash||'').replace(/^#/,''),q=new URLSearchParams(h);
  if(q.get('error')||q.get('error_code')){history.replaceState(null,'',appUrl());LOCKED=true;AUTH.mode='linkerr';render();return;}
  if(q.get('access_token')){
    var type=q.get('type')||'';history.replaceState(null,'',appUrl());
    try{var u=await sbUser(q.get('access_token'));sbSetSession({access_token:q.get('access_token'),refresh_token:q.get('refresh_token'),expires_in:+q.get('expires_in')||3600,expires_at:+q.get('expires_at')||0,user:u});}
    catch(e){LOCKED=true;AUTH.mode=e.offline?'login':'linkerr';if(e.offline)AUTH.err='Sin conexión: abre el enlace cuando tengas internet.';render();return;}
    if(S.owner&&S.owner!==myId())resetLocalData();S.owner=myId();S.settings.remember=true;persist0();
    if(type==='invite'||type==='recovery'){LOCKED=true;AUTH.mode='setpw';AUTH.kind=type;render();return;}
  }
  var active=false;try{active=!!sessionStorage.getItem('ei-active');}catch(e){}
  if(SB.session&&!S.settings.remember&&!active){SB.session=null;sbStore();}
  if(!SB.session){LOCKED=true;AUTH.mode='login';render();return;}
  try{sessionStorage.setItem('ei-active','1');}catch(e){}
  if(S.me&&S.owner===myId()){applyMember(S.me);LOCKED=false;}else{LOCKED=true;AUTH.mode='loading';}
  render();connect();
}

/* ============ Cuenta, respaldo ============ */
function accountCard(){var st=S.settings;return '<div class="card stack"><h3>Cuenta y acceso</h3><div class="kv"><dt>Correo</dt><dd>'+esc(myEmail()||'—')+'</dd><dt>Rol</dt><dd>'+(isCoordReal()?'Manager EBT':'Instructor')+'</dd><dt>Sesión</dt><dd>'+(st.remember?'Se mantiene en este dispositivo':'Se pide al abrir la app')+'</dd></div><div class="field"><label for="cp-new">Cambiar contraseña</label><div class="grid g2" style="gap:8px"><input class="input" id="cp-new" type="password" placeholder="Nueva (mín. 8)" autocomplete="new-password"><input class="input" id="cp-new2" type="password" placeholder="Repetir" autocomplete="new-password"></div></div><div class="row"><button class="btn sm" data-act="changePw">Actualizar contraseña</button><button class="btn ghost sm" data-act="logout">Cerrar sesión</button></div><p class="tiny muted">Si olvidas la contraseña, usa «¿Olvidaste tu contraseña?» en la pantalla de entrada.</p></div>';}
function backupCard(){if(!isCoord())return '';var st=S.settings,n=live('sessions').filter(function(s){return s.status==='signed';}).length;if(!n)return '';var days=st.lastBackup?Math.floor((Date.now()-st.lastBackup)/86400000):null;if(days!==null&&days<30)return '';
  return '<div class="card" style="margin-bottom:16px;display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="gchip gc0" style="width:40px;height:40px;border-radius:12px;color:var(--accent)">'+I.down.replace('<svg','<svg width="20" height="20"')+'</span><div style="flex:1;min-width:200px"><h3>'+(days===null?'Aún no has descargado un respaldo':'Último respaldo hace '+days+' días')+'</h3><p class="small muted">Las evaluaciones quedan guardadas en la base de datos. Además, descarga una copia mensual en JSON y guárdala fuera de la app.</p></div><button class="btn primary sm" data-act="backup">'+I.down+'Descargar respaldo</button></div>';}

/* ============ Formato de evaluación (solo Manager) ============ */
function formatCard(){
  if(!isCoord())return '';var sc=ORG('scale',{});
  function chk(k,lbl,d){return '<label class="row small" style="gap:8px;cursor:pointer"><input type="checkbox" data-org="'+k+'" '+(ORG(k,d)?'checked':'')+'> '+lbl+'</label>';}
  var below=ORG('requireNoteAtOrBelow',2);
  return '<div class="card stack" style="grid-column:1/-1"><div><h3>Formato de evaluación</h3><p class="small muted">Se aplica a todos los instructores. Los cambios se guardan y sincronizan solos.</p></div>'+
   '<div class="eyebrow">Escala de calificación</div><div class="stack" style="gap:8px">'+[1,2,3,4,5].map(function(g){var e=sc[g]||sc[String(g)]||{};return '<div class="row" style="gap:8px;flex-wrap:nowrap"><span class="gchip gc'+g+'" style="flex:none">'+g+'</span><input class="input" data-org="scale.'+g+'.label" value="'+esc(e.label||GL[g])+'" aria-label="Nombre del grado '+g+'" style="flex:2;min-width:0"><input class="input" data-org="scale.'+g+'.short" value="'+esc(e.short||GS[g])+'" aria-label="Abreviatura del grado '+g+'" style="flex:1;min-width:0;max-width:140px"><input type="color" data-org="scale.'+g+'.color" value="'+esc(e.color||'#888888')+'" aria-label="Color del grado '+g+'" style="width:44px;height:40px;border:0;background:none;flex:none"></div>';}).join('')+'</div>'+
   '<div class="eyebrow" style="margin-top:4px">Reglas al calificar y firmar</div><div class="stack" style="gap:8px">'+
   chk('allowNO','Permitir N/O (no observado)',true)+chk('requireNoteForNO','Exigir justificación cuando una competencia queda N/O',true)+
   '<label class="row small" style="gap:8px">Exigir evidencia escrita en grados <select class="input" data-org="requireNoteAtOrBelow" style="width:auto;height:34px">'+[[0,'ninguno'],[1,'1'],[2,'1 y 2'],[3,'1 a 3']].map(function(o){return '<option value="'+o[0]+'"'+(+below===o[0]?' selected':'')+'>'+o[1]+'</option>';}).join('')+'</select></label>'+
   chk('temEnabled','Mostrar registro TEM (amenazas, errores y estados indeseados)',true)+chk('requireTraineeSignature','Exigir firma del trainee para cerrar la evaluación',false)+'</div>'+
   '<p class="tiny muted">Frases, fases, flotas, módulos y simuladores se editan en «Ciclo EBT» y «Frases predefinidas». Las plantillas de cada sesión se gestionan en Biblioteca EVAL.</p></div>';
}
document.addEventListener('change',function(e){var t=e.target;if(!t.dataset||!t.dataset.org||!isCoord())return;
  var v=t.type==='checkbox'?t.checked:t.tagName==='SELECT'?+t.value:t.value;S.org=S.org||{};setPath(S.org,t.dataset.org,v);S.orgDirty=true;applyScale();persist0();scheduleFlush();if(t.type==='checkbox'||t.tagName==='SELECT'||t.type==='color')setTimeout(render,0);});

/* ============ Equipo (Manager) ============ */
var ROLE_LBL={manager:'Manager EBT',instructor:'Instructor'};
function teamCard(){
  if(!isCoord())return '';
  var ms=Object.keys(members()).map(function(k){return members()[k];}).sort(function(a,b){return (a.full_name||a.email||'').localeCompare(b.full_name||b.email||'');});
  var inv=S.invites||[];
  var act=ms.filter(function(m){return m.status==='active';}).length;
  var html='<div class="card" style="margin-bottom:16px"><div class="card-head"><div><h3>Equipo habilitado</h3><p class="small muted">'+act+' activo'+(act===1?'':'s')+(inv.length?' · '+inv.length+' invitación'+(inv.length===1?'':'es')+' pendiente'+(inv.length===1?'':'s'):'')+'</p></div><button class="btn primary sm" data-act="newIE">'+I.plus+'Habilitar instructor</button></div>';
  html+='<div class="list">'+ms.map(function(m){var me=m.user_id===myId();return '<div class="li" style="cursor:default"><span class="avatar">'+initials(m.full_name||m.email)+'</span><div class="grow" style="min-width:0"><div class="t">'+esc(m.full_name||m.email)+(m.ie_code?' <span class="pill" style="height:18px;font-size:10.5px">'+esc(m.ie_code)+'</span>':'')+(me?' <span class="tiny muted">(tú)</span>':'')+'</div><div class="small muted">'+[ROLE_LBL[m.role],m.fleet,m.email].filter(Boolean).map(esc).join(' · ')+'</div></div>'+(m.status==='active'?'<span class="pill ok">Activo</span>':'<span class="pill bad">Inactivo</span>')+(me?'':'<button class="btn ghost sm" data-act="editMember" data-id="'+m.user_id+'" aria-label="Editar">'+I.chev+'</button>')+'</div>';}).join('')+
   inv.map(function(v){return '<div class="li" style="cursor:default"><span class="avatar" style="opacity:.6">'+initials(v.full_name||v.email)+'</span><div class="grow" style="min-width:0"><div class="t">'+esc(v.full_name||v.email)+'</div><div class="small muted">'+esc(v.email)+' · invitado '+ftime(ts(v.created_at))+'</div></div><span class="pill warn">Pendiente</span><button class="btn ghost sm" data-act="resendInvite" data-email="'+esc(v.email)+'">Reenviar</button><button class="btn ghost sm" data-act="cancelInvite" data-email="'+esc(v.email)+'" aria-label="Cancelar invitación" style="color:var(--muted)">'+I.x+'</button></div>';}).join('')+'</div>';
  html+='<p class="tiny muted" style="margin-top:10px">El instructor recibe un correo con un enlace para crear su contraseña. Si el enlace vence, usa «Reenviar».</p>';
  return html+'</div>';
}
function ieForm(){
  var f=S.ui.form,st=S.settings,edit=!!f.user_id;
  return '<div class="stack"><div class="field"><label for="ie-n">Nombre completo</label><input class="input" id="ie-n" data-fb="full_name" value="'+esc(f.full_name||'')+'" placeholder="Cap. Nombre Apellido" autofocus></div>'+
   (edit?'<div class="field"><label>Correo</label><div class="small">'+esc(f.email||'')+'</div></div>':'<div class="field"><label for="ie-em">Correo</label><input class="input" id="ie-em" data-fb="email" type="email" value="'+esc(f.email||'')+'" placeholder="nombre@empresa.com" autocapitalize="none"></div>')+
   '<div class="grid g2" style="gap:12px"><div class="field"><label for="ie-id">Código de instructor</label><input class="input" id="ie-id" data-fb="ie_code" value="'+esc(f.ie_code||'')+'" placeholder="IE-05"></div><div class="field"><label for="ie-rk">Cargo</label><select class="input" id="ie-rk" data-fb="rank"><option value="">—</option><option value="CPT"'+(f.rank==='CPT'?' selected':'')+'>Capitán</option><option value="FO"'+(f.rank==='FO'?' selected':'')+'>Primer oficial</option></select></div></div>'+
   '<div class="grid g2" style="gap:12px"><div class="field"><label for="ie-fl">Flota</label><select class="input" id="ie-fl" data-fb="fleet"><option value="">—</option>'+st.fleets.map(function(x){return '<option'+(f.fleet===x?' selected':'')+'>'+esc(x)+'</option>';}).join('')+'</select></div><div class="field"><label for="ie-ro">Rol</label><select class="input" id="ie-ro" data-fb="role"><option value="instructor"'+(f.role!=='manager'?' selected':'')+'>Instructor</option><option value="manager"'+(f.role==='manager'?' selected':'')+'>Manager EBT</option></select></div></div>'+
   (edit?'<hr class="sep"><div class="row">'+(f.status==='inactive'?'<button class="btn sm" data-act="memberStatus" data-id="'+f.user_id+'" data-v="active">Reactivar acceso</button>':'<button class="btn danger sm" data-act="memberStatus" data-id="'+f.user_id+'" data-v="inactive">Desactivar acceso</button>')+'</div><p class="tiny muted">Al desactivarlo no puede entrar ni ver datos. Sus evaluaciones firmadas se conservan.</p>':'<p class="tiny muted">Se enviará una invitación a ese correo. Al abrirla, la persona crea su contraseña y entra directamente.</p>')+'</div>';
}
function needOnline(){if(!online()){toast('Necesitas conexión a internet para esto');return false;}return true;}
function fnMsg(e){var c=e&&(e.code||e.message)||'';return c==='invalid_email'?'El correo no es válido.':c==='forbidden'?'Solo el Manager puede invitar.':c==='self'?'Ese correo es tu propia cuenta.':c==='email_failed'?'No se pudo enviar el correo: '+((e.body&&e.body.detail)||''):(e&&e.message)||'No se pudo completar.';}
var TEAM_ACT={
  newIE:function(){S.ui.form={full_name:'',email:'',ie_code:'',rank:'CPT',fleet:S.settings.fleets[0]||'',role:'instructor'};openSheet({type:'ie'});},
  editMember:function(el){var m=members()[el.dataset.id];if(!m)return;S.ui.form=JSON.parse(JSON.stringify(m));openSheet({type:'ie',id:m.user_id});},
  saveIE:async function(){var f=S.ui.form;if(!needOnline())return;
    if(f.user_id){try{await sbPatch('ei_members','user_id=eq.'+f.user_id,{full_name:(f.full_name||'').trim(),ie_code:f.ie_code||null,rank:f.rank||null,fleet:f.fleet||null,role:f.role==='manager'?'manager':'instructor'});S.ui.sheet=null;toast('Datos actualizados');pull();}catch(e){toast(e.message);}return;}
    var email=String(f.email||'').trim().toLowerCase();if(!(f.full_name||'').trim())return toast('Escribe el nombre');if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))return toast('Escribe un correo válido');
    var btn=document.querySelector('[data-act="saveIE"]');if(btn){btn.disabled=true;btn.textContent='Enviando…';}
    try{var r=await sbFn('ei-invite',{email:email,full_name:f.full_name.trim(),ie_code:f.ie_code,rank:f.rank,fleet:f.fleet,role:f.role,redirectTo:appUrl()});
      S.ui.sheet=null;toast(r&&r.status==='existing_user'?'Ya tenía cuenta: quedó habilitado y puede entrar con su contraseña':'Invitación enviada a '+email);pull();}
    catch(e){if(btn){btn.disabled=false;btn.textContent='Enviar invitación';}toast(fnMsg(e.body&&e.body.error?{code:e.body.error,body:e.body,message:e.message}:e));}},
  resendInvite:async function(el){if(!needOnline())return;var v=(S.invites||[]).filter(function(x){return x.email===el.dataset.email;})[0]||{email:el.dataset.email};
    try{await sbFn('ei-invite',{email:v.email,full_name:v.full_name,ie_code:v.ie_code,rank:v.rank,fleet:v.fleet,role:v.role,redirectTo:appUrl()});toast('Invitación reenviada');pull();}catch(e){toast(fnMsg(e.body&&e.body.error?{code:e.body.error,body:e.body,message:e.message}:e));}},
  cancelInvite:async function(el){if(!needOnline())return;try{await sbFn('ei-invite',{action:'cancel',email:el.dataset.email});toast('Invitación cancelada');pull();}catch(e){toast(e.message);}},
  memberStatus:async function(el){if(!needOnline())return;try{await sbPatch('ei_members','user_id=eq.'+el.dataset.id,{status:el.dataset.v});S.ui.sheet=null;toast(el.dataset.v==='active'?'Acceso reactivado':'Acceso desactivado');pull();}catch(e){toast(e.message);}}
};

/* ============ Diseño del EBT Manager → plantillas (solo lectura del EBT Manager) ============ */
var EM={state:'idle',msg:'',design:null,raw:null,sel:{fleet:'',module:'1'},busy:false};
function emPhaseOf(s){var u=s.toUpperCase();if(u.indexOf('EVAL')===0)return 'EVAL';if(u.indexOf('SBT')===0||u.indexOf('LOFT')>=0)return 'SBT';if(u.indexOf('LOE')===0||u.indexOf('LINE')>=0)return 'LOE';if(u.indexOf('MT')===0||u.indexOf('LPC')>=0||u.indexOf('MV')>=0||u.indexOf('UPRT')>=0)return 'MT';return 'SBT';}
function emModuleName(m){var hit=(S.settings.modules||[]).filter(function(x){return x.indexOf('M'+m)===0;})[0];return hit||('M'+m);}
function emFleets(){var d=EM.raw&&EM.raw.data||{};return Object.keys(d).filter(function(f){return f&&f[0]!=='_';}).sort();}
function emModules(f){var d=EM.raw&&EM.raw.data&&EM.raw.data[f]||{};return Object.keys(d).sort();}
async function emLoad(){
  if(!needOnline())return;EM.busy=true;EM.msg='';render();
  try{EM.raw=await sbRpc('ei_manager_design');EM.state='ready';var fs=emFleets();if(fs.indexOf(EM.sel.fleet)<0)EM.sel.fleet=fs[0]||'';emBuild();}
  catch(e){EM.state='error';EM.msg=e.offline?'Sin conexión.':e.message;}
  EM.busy=false;render();
}
function emBuild(){
  var f=EM.sel.fleet,m=EM.sel.module,mod=EM.raw&&EM.raw.data&&EM.raw.data[f]&&EM.raw.data[f][m]||{};
  var groups={},order=[];
  Object.keys(mod).forEach(function(topic){var map=mod[topic]&&mod[topic].map||[];map.forEach(function(r){var s=String(r.s||'Sin sesión').trim();var t=String(r.t||'').trim();var key=t.toLowerCase();
    if(!groups[s]){groups[s]={s:s,items:[],keys:{}};order.push(s);}var g=groups[s];
    if(g.keys[key]){var it=g.keys[key];(r.c||[]).forEach(function(c){if(it.c.indexOf(c)<0)it.c.push(c);});if(it.topics.indexOf(topic)<0)it.topics.push(topic);return;}
    var it2={t:t,c:(r.c||[]).slice(),ex:r.ex||[],fcts:r.fcts||[],topics:[topic]};g.keys[key]=it2;g.items.push(it2);});});
  var tg=EM.raw&&EM.raw.target&&EM.raw.target[f]||{},targets=[];Object.keys(tg).forEach(function(c){if((tg[c]||[]).map(String).indexOf(String(m))>=0)targets.push(c);});
  order.sort(function(a,b){return a.localeCompare(b,'es',{numeric:true});});
  EM.design={fleet:f,module:m,groups:order.map(function(s){return groups[s];}),targets:targets};
}
function emExisting(f,m,s){return live('evals').filter(function(t){return t.em&&t.em.fleet===f&&String(t.em.module)===String(m)&&t.em.session===s;})[0]||null;}
function emCreateTpl(g){
  var d=EM.design;var old=emExisting(d.fleet,d.module,g.s);
  var r={id:old?old.id:uuid(),name:g.s+' · '+d.fleet+' · Módulo '+d.module,module:emModuleName(d.module),fleet:d.fleet,phase:emPhaseOf(g.s),targets:d.targets.slice(),note:'Importado del diseño del EBT Manager · '+g.items.length+' escenarios',
    events:g.items.map(function(it){return {t:it.t,c:it.c.filter(function(k){return CK.indexOf(k)>=0;}),phase:'',ex:it.ex,fcts:it.fcts,topics:it.topics};}),
    em:{fleet:d.fleet,module:d.module,session:g.s,importedAt:Date.now(),rev:EM.raw&&EM.raw.revision}};
  if(old){r.name=old.name;r.phase=old.phase||r.phase;r.note=old.note||r.note;r.events.forEach(function(e){var o=(old.events||[]).filter(function(x){return x.t===e.t;})[0];if(o&&o.phase)e.phase=o.phase;});}
  put('evals',r,true);return !old;
}
function vEBTM(){
  if(!isCoord()){S.ui.route='inicio';return vInicio();}
  if(EM.state==='idle'&&!EM.busy)setTimeout(emLoad,0);
  var html=head('Diseño EBT Manager','Convierte las sesiones que diseñaste en el EBT Manager en plantillas de evaluación. EBT Instructor solo lee ese diseño: nunca lo modifica.','<button class="btn" data-act="emReload"'+(EM.busy?' disabled':'')+'>'+I.cloud+(EM.busy?'Leyendo…':'Leer de nuevo')+'</button>');
  if(EM.state==='error')html+='<div class="note" style="color:var(--bad);margin-bottom:16px">'+esc(EM.msg)+'</div>';
  if(!EM.raw)return html+'<div class="card">'+empty('cloud',EM.busy?'Leyendo el diseño…':'Sin datos','El diseño se lee desde la misma base de datos del EBT Manager.')+'</div>';
  var fs=emFleets(),ms=emModules(EM.sel.fleet);if(ms.indexOf(EM.sel.module)<0)EM.sel.module=ms[0]||'1';
  html+='<div class="card stack" style="margin-bottom:16px"><div class="row"><div class="seg">'+fs.map(function(f){return '<button class="'+(EM.sel.fleet===f?'on':'')+'" data-act="emSel" data-k="fleet" data-v="'+esc(f)+'">'+esc(f)+'</button>';}).join('')+'</div><div class="seg">'+ms.map(function(m){return '<button class="'+(EM.sel.module===m?'on':'')+'" data-act="emSel" data-k="module" data-v="'+esc(m)+'">Módulo '+esc(m)+'</button>';}).join('')+'</div><span class="spacer"></span><span class="tiny muted">EBT Manager v'+esc(EM.raw.revision)+' · '+ftime(ts(EM.raw.updated_at))+'</span></div>';
  var d=EM.design;
  if(!d||!d.groups.length)html+='<p class="small muted">Este módulo no tiene sesiones con escenarios asignados en el EBT Manager.</p>';
  else{
    html+='<div class="row" style="gap:6px;flex-wrap:wrap"><span class="small muted">Competencias objetivo del módulo:</span>'+(d.targets.length?d.targets.map(function(c){return '<span class="pill acc">'+esc(c)+'</span>';}).join(''):'<span class="small muted">sin definir</span>')+'<span style="flex:1"></span><button class="btn primary sm" data-act="emTplAll">Crear/actualizar las '+d.groups.length+' plantillas</button></div>';
    html+='<div class="list">'+d.groups.map(function(g,i){var ex=emExisting(d.fleet,d.module,g.s);var comps={};g.items.forEach(function(it){it.c.forEach(function(c){comps[c]=1;});});
      return '<details class="disc" data-k="em'+i+'"'+(S.ui.open&&S.ui.open['em'+i]?' open':'')+'><summary class="li" style="list-style:none"><span class="gchip gc0" style="width:auto;padding:0 8px;font-size:11px">'+esc(emPhaseOf(g.s))+'</span><div class="grow"><div class="t">'+esc(g.s)+'</div><div class="small muted">'+g.items.length+' escenario'+(g.items.length===1?'':'s')+' · '+Object.keys(comps).sort().join(', ')+(ex?' · <span style="color:var(--ok)">plantilla creada</span>':'')+'</div></div><button class="btn sm" data-act="emTpl" data-i="'+i+'">'+(ex?'Actualizar':'Crear plantilla')+'</button></summary><div style="padding:6px 14px 12px 50px">'+g.items.map(function(it){return '<div class="small" style="padding:6px 0;border-top:1px solid var(--line)"><div class="row" style="gap:4px;margin-bottom:3px">'+it.c.map(function(c){return '<span class="pill" style="height:18px;font-size:10.5px">'+esc(c)+'</span>';}).join('')+(it.ex.length?'<span class="tiny muted">'+esc(it.ex.join(' '))+'</span>':'')+'</div>'+esc(it.t)+'</div>';}).join('')+'</div></details>';}).join('')+'</div>';
  }
  html+='</div><p class="small muted" style="max-width:760px">Las plantillas quedan en Biblioteca EVAL. Ahí puedes ajustar nombres, fases de vuelo y competencias de cada evento; esos cambios no afectan el EBT Manager. Si vuelves a importar una sesión, se conservan tus nombres y fases de vuelo.</p>';
  return html;
}
var EM_ACT={
  emReload:function(){emLoad();},
  emSel:function(el){EM.sel[el.dataset.k]=el.dataset.v;emBuild();render();},
  emTpl:function(el){var g=EM.design&&EM.design.groups[+el.dataset.i];if(!g)return;var isNew=emCreateTpl(g);render();toast(isNew?'Plantilla creada en Biblioteca EVAL':'Plantilla actualizada');},
  emTplAll:function(){if(!EM.design)return;var n=0;EM.design.groups.forEach(function(g){if(emCreateTpl(g))n++;});render();toast(n+' plantillas nuevas · '+(EM.design.groups.length-n)+' actualizadas');}
};

var _cy2=ACT.confirmYes;ACT.confirmYes=function(){var sh=S.ui.sheet;if(sh&&sh.act==='logoutYes'){S.ui.sheet=null;doLogout();return;}return _cy2();};
Object.assign(ACT,AUTH_ACT,TEAM_ACT,EM_ACT);
var _bk=ACT.backup;ACT.backup=function(){_bk();if(isCoord()){S.settings.lastBackup=Date.now();persist0();}};
function sheetExtra(sh){
  if(sh.type==='ie')return {title:sh.id?'Editar instructor':'Habilitar instructor',narrow:true,body:ieForm(),actions:'<button class="btn sm primary" data-act="saveIE">'+(sh.id?'Guardar':'Enviar invitación')+'</button>'};
  return null;
}
function aiOn(){return !!(window.claude&&window.claude.use);}
/* ============ TEM nivel 3 (EATS 2026 · Airbus «Training and safety are one») ============ */
/* Niveles de métricas: 0 competente o no · 1 nota por competencia · 2 OB · 3 amenazas, errores y estados indeseados (lenguaje del SMS). */
var TEM_T={A:{n:'Amenaza',en:'Threat',col:'var(--warn)',cats:['Meteorología','Tráfico / ATC','Aeropuerto / pista','Aeronave / MEL / sistemas','Operacional / presión de tiempo','Factores humanos / fatiga','Entorno / terreno']},
  E:{n:'Error',en:'Error',col:'var(--bad)',cats:['Manejo del avión','Procedimiento / SOP','Comunicación','Automatización','Decisión','Monitoreo / cross-check']},
  U:{n:'Estado indeseado',en:'Undesired aircraft state',col:'var(--accent)',cats:['Trayectoria / energía','Velocidad','Configuración','Terreno / tráfico','Pista / rodaje','Sistemas']}};
var TEM_MGMT={ok:['Gestionado','ok'],late:['Gestionado tarde','warn'],no:['No gestionado','bad']};
var RISKS={LOCI:{n:'LOC-I',es:'Pérdida de control en vuelo',ks:['FPM','FPA','SAW','KNO']},CFIT:{n:'CFIT',es:'Impacto contra el terreno',ks:['SAW','APK','PSD','FPA']},RE:{n:'Excursión de pista',es:'Aproximación inestable / aterrizaje',ks:['FPM','PSD','LTW','COM','WLM']},MAC:{n:'Colisión / incursión',es:'Tráfico y pista',ks:['SAW','COM','APK']}};
function temList(s){return s.tem||(s.tem=[]);}
function temForm(s){
  var f=S.ui.temf||(S.ui.temf={type:'A',cat:'',txt:'',mgmt:'ok',c:[],seat:'crew',ev:''});if(s.mode!=='crew'&&f.seat==='crew')f.seat='cm1';
  var t=TEM_T[f.type];
  return '<div class="stack" style="gap:12px"><div class="seg full">'+Object.keys(TEM_T).map(function(k){return '<button class="'+(f.type===k?'on':'')+'" data-act="temF" data-k="type" data-v="'+k+'">'+TEM_T[k].n+'</button>';}).join('')+'</div>'+
   '<div class="field"><label>Categoría</label><div class="tags">'+t.cats.map(function(c){return '<button class="tag'+(f.cat===c?' on':'')+'" data-act="temF" data-k="cat" data-v="'+esc(c)+'" style="font-family:var(--font);font-size:12px">'+esc(c)+'</button>';}).join('')+'</div></div>'+
   '<div class="field"><label for="tem-txt">Qué pasó</label><input class="input" id="tem-txt" data-temf="txt" value="'+esc(f.txt)+'" placeholder="'+(f.type==='A'?'Ej. Windshear reportado en final con cambio de pista':f.type==='E'?'Ej. Selección tardía de flaps 3; no se verificó el FMA':'Ej. Vref −8 kt a 300 ft con tendencia a hundirse')+'"></div>'+
   (s.events.length?'<div class="field"><label for="tem-ev">Evento de la sesión (opcional)</label><select class="input" id="tem-ev" data-temf="ev"><option value="">—</option>'+s.events.map(function(e,i){return '<option value="'+i+'"'+(String(f.ev)===String(i)?' selected':'')+'>'+esc(e.t)+'</option>';}).join('')+'</select></div>':'')+
   '<div class="grid g2" style="gap:12px"><div class="field"><label>Gestión por la tripulación</label><div class="seg full">'+Object.keys(TEM_MGMT).map(function(k){return '<button class="'+(f.mgmt===k?'on':'')+'" data-act="temF" data-k="mgmt" data-v="'+k+'">'+TEM_MGMT[k][0]+'</button>';}).join('')+'</div></div>'+
   (s.mode==='crew'?'<div class="field"><label>Quién</label><div class="seg full"><button class="'+(f.seat==='crew'?'on':'')+'" data-act="temF" data-k="seat" data-v="crew">Tripulación</button><button class="'+(f.seat==='cm1'?'on':'')+'" data-act="temF" data-k="seat" data-v="cm1">CM1</button><button class="'+(f.seat==='cm2'?'on':'')+'" data-act="temF" data-k="seat" data-v="cm2">CM2</button></div></div>':'')+'</div>'+
   '<div class="field"><label>Competencias implicadas</label><div class="tags">'+CK.map(function(k){return '<button class="tag'+(f.c.indexOf(k)>=0?' on':'')+'" data-act="temC" data-k="'+k+'">'+k+'</button>';}).join('')+'</div></div>'+
   '<div class="row" style="justify-content:flex-end"><button class="btn" data-act="closeSheet">Cancelar</button><button class="btn primary" data-act="temSave">Agregar</button></div></div>';
}
function temRow(s,it,i,editable){var t=TEM_T[it.type]||TEM_T.A,m=TEM_MGMT[it.mgmt]||TEM_MGMT.ok;
  return '<div class="ev" style="align-items:center"><span class="gchip" style="background:'+t.col+';width:auto;padding:0 7px;font-size:10.5px">'+t.n.split(' ')[0]+'</span><div style="flex:1;min-width:0"><div>'+esc(it.txt||it.cat)+'</div><div class="small muted">'+esc(it.cat)+(it.seat&&it.seat!=='crew'?' · '+it.seat.toUpperCase():'')+(it.ev!=null&&it.ev!==''&&s.events[it.ev]?' · '+esc(s.events[it.ev].t):'')+'</div>'+((it.c||[]).length?'<div class="tags">'+it.c.map(function(k){return '<span class="tag">'+k+'</span>';}).join('')+'</div>':'')+'</div><span class="pill '+m[1]+'">'+m[0]+'</span>'+(editable?'<button class="btn ghost sm" data-act="temDel" data-i="'+i+'" aria-label="Quitar">'+I.x+'</button>':'')+'</div>';}
function temCard(s,editable){var L=temList(s);var n={A:0,E:0,U:0},nm=0;L.forEach(function(it){n[it.type]=(n[it.type]||0)+1;if(it.mgmt==='no')nm++;});
  return '<div class="card" style="margin-bottom:16px"><div class="card-head"><div><h3>TEM · Nivel 3</h3><p class="small muted">Amenazas, errores y estados indeseados de la sesión, en el lenguaje del SMS. '+(L.length?n.A+' amenazas · '+n.E+' errores · '+n.U+' estados indeseados'+(nm?' · <b style="color:var(--bad)">'+nm+' sin gestionar</b>':''):'Lo que registres aquí conecta el entrenamiento con seguridad operacional.')+'</p></div>'+(editable?'<button class="btn sm" data-act="temNew">'+I.plus+'Registrar</button>':'')+'</div>'+(L.length?L.map(function(it,i){return temRow(s,it,i,editable);}).join(''):'')+'</div>';}
function temStats(ss,pid){var out={A:{},E:{},U:{},n:0,noMgmt:0,byType:{A:0,E:0,U:0}};
  ss.forEach(function(s){temList(s).forEach(function(it){if(pid){var x=seatOf(s,pid);if(it.seat&&it.seat!=='crew'&&it.seat!==x)return;}out.n++;out.byType[it.type]=(out.byType[it.type]||0)+1;var b=out[it.type]||(out[it.type]={});var c=b[it.cat]||(b[it.cat]={n:0,no:0});c.n++;if(it.mgmt==='no'){c.no++;out.noMgmt++;}});});
  return out;}
function temChart(st){if(!st.n)return '<p class="small muted">Sin registros TEM en estas sesiones.</p>';var html='';
  Object.keys(TEM_T).forEach(function(t){var b=st[t];var keys=Object.keys(b).sort(function(a,c){return b[c].n-b[a].n;});if(!keys.length)return;var mx=Math.max.apply(null,keys.map(function(k){return b[k].n;}));
    html+='<div class="eyebrow" style="margin:10px 0 4px;color:'+TEM_T[t].col+'">'+TEM_T[t].n+(t==='A'?'s':t==='E'?'es':'s')+' · '+st.byType[t]+'</div>'+keys.map(function(k){var v=b[k];return '<div class="attn" style="grid-template-columns:150px minmax(0,1fr) auto;padding:5px 0"><span class="small" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+esc(k)+'</span><div style="display:flex;height:9px;border-radius:5px;overflow:hidden;background:var(--line)"><div style="width:'+((v.n-v.no)/mx*100)+'%;background:'+TEM_T[t].col+';opacity:.55"></div><div style="width:'+(v.no/mx*100)+'%;background:var(--bad)"></div></div><span class="small num muted">'+v.n+(v.no?' · <b style="color:var(--bad)">'+v.no+' sin gestionar</b>':'')+'</span></div>';}).join('');});
  return html+'<p class="tiny muted" style="margin-top:8px">Barra: registros por categoría; en rojo, los no gestionados por la tripulación.</p>';}
/* ---- Precursores de seguridad (competencia que se degrada = precursor) ---- */
function riskMap(items){/* items: [{k,g}] grado 1–2 o caída */var r={};Object.keys(RISKS).forEach(function(id){r[id]={id:id,n:0,ks:{}};});
  items.forEach(function(it){Object.keys(RISKS).forEach(function(id){if(RISKS[id].ks.indexOf(it.k)>=0){r[id].n++;r[id].ks[it.k]=(r[id].ks[it.k]||0)+1;}});});
  return Object.keys(r).map(function(id){return r[id];}).filter(function(x){return x.n;}).sort(function(a,b){return b.n-a.n;});}
function riskChips(items,small){var rs=riskMap(items);if(!rs.length)return '';return '<div class="row" style="gap:6px;flex-wrap:wrap;margin-top:'+(small?'6':'10')+'px"><span class="tiny muted">Precursor de:</span>'+rs.map(function(r){return '<span class="pill bad" title="'+esc(RISKS[r.id].es+' · '+Object.keys(r.ks).join(', '))+'">'+RISKS[r.id].n+' · '+Object.keys(r.ks).join(' ')+'</span>';}).join('')+'</div>';}
function riskCard(ss){var items=[];var byP={};ss.forEach(function(s){seats(s).forEach(function(x){CK.forEach(function(k){var e=s.grades[x][k];if(e&&e.g&&e.g<=2){items.push({k:k,g:e.g});(byP[s.pilots[x]]=byP[s.pilots[x]]||[]).push(k);}});});});
  var rs=riskMap(items);var mx=rs.length?rs[0].n:1;
  return '<div class="card"><div class="card-head"><div><h3>Precursores de seguridad</h3><p class="small muted">Competencias en grado 1–2 enlazadas con los riesgos mayores (LOC-I, CFIT, excursión de pista, colisión). Una competencia que se degrada es un precursor antes de que aparezca en operaciones.</p></div></div>'+
   (rs.length?rs.map(function(r){var R=RISKS[r.id];return '<div class="attn" style="grid-template-columns:130px minmax(0,1fr) auto"><div><b>'+R.n+'</b><div class="tiny muted">'+esc(R.es)+'</div></div><div><div style="height:10px;border-radius:5px;background:var(--line);overflow:hidden"><div style="width:'+(r.n/mx*100)+'%;height:100%;background:var(--bad)"></div></div><div class="tags">'+Object.keys(r.ks).sort(function(a,b){return r.ks[b]-r.ks[a];}).map(function(k){return '<span class="tag" style="color:var(--bad)">'+k+' ×'+r.ks[k]+'</span>';}).join('')+'</div></div><span class="num" style="font-weight:700">'+r.n+'</span></div>';}).join(''):'<p class="small muted">Sin grados 1–2 en las sesiones filtradas.</p>')+
   '<p class="tiny muted" style="margin-top:8px">'+Object.keys(byP).length+' trainee'+(Object.keys(byP).length===1?'':'s')+' con al menos un grado 1–2. Mapa competencia→riesgo configurable en el código (RISKS).</p></div>';}
var TEM_ACT={
  temNew:function(){S.ui.temf={type:'A',cat:'',txt:'',mgmt:'ok',c:[],seat:'crew',ev:''};openSheet({type:'tem'});},
  temF:function(el){var f=S.ui.temf;f[el.dataset.k]=el.dataset.v;if(el.dataset.k==='type')f.cat='';render();},
  temC:function(el){var f=S.ui.temf,k=el.dataset.k,i=f.c.indexOf(k);if(i>=0)f.c.splice(i,1);else f.c.push(k);render();},
  temSave:function(){var s=cur();if(!s)return;var f=S.ui.temf;if(!f.cat)return toast('Elige una categoría');if(!f.txt.trim()&&!f.cat)return toast('Describe qué pasó');
    temList(s).push({id:uid('tem'),type:f.type,cat:f.cat,txt:f.txt.trim(),mgmt:f.mgmt,c:f.c.slice(),seat:f.seat,ev:f.ev,at:Date.now()});put('sessions',s,true);S.ui.sheet=null;render();toast(TEM_T[f.type].n+' registrado');},
  temDel:function(el){var s=cur();if(!s)return;temList(s).splice(+el.dataset.i,1);put('sessions',s);}
};
Object.assign(ACT,TEM_ACT);
document.addEventListener('input',function(e){var t=e.target;if(t.dataset&&t.dataset.temf&&S.ui.temf){S.ui.temf[t.dataset.temf]=t.value;}});
document.addEventListener('change',function(e){var t=e.target;if(t.dataset&&t.dataset.temf&&S.ui.temf){S.ui.temf[t.dataset.temf]=t.value;}});
var _sx=sheetExtra;sheetExtra=function(sh){if(sh.type==='tem'){var s=cur();if(!s)return null;return {title:'Registro TEM',narrow:true,body:temForm(s)};}return _sx(sh);};
/* ---- N/O con justificación (ORO.FC.231(f): una brecha es una advertencia, no un veredicto) ---- */
function noMissing(s){var out=[];seats(s).forEach(function(x){CK.forEach(function(k){var e=(s.grades[x]||{})[k];if(e&&e.no&&!(e.note||'').trim())out.push(x.toUpperCase()+' '+k);});});return out;}
/* ---- Human-AI teaming: la IA propone, el instructor decide y firma ---- */
function aiNote(s){var any=debTargets(s).some(function(t){return s.aiDraft&&s.aiDraft[t.key];});return any?'<p class="tiny muted" style="margin-top:6px">'+I.spark.replace('<svg','<svg width="12" height="12" style="vertical-align:-2px"')+' Borrador propuesto por IA; revisado y firmado por el instructor, que es el autor del registro.</p>':'';}
var PRE_EATS='\nPrincipios (EATS 2026): la IA propone y el instructor decide y firma: nunca califiques tú; una competencia no observada es una advertencia que requiere justificación, no un veredicto; relaciona las deficiencias con amenazas, errores y estados indeseados (TEM, nivel 3 de métricas) y con los riesgos mayores (LOC-I, CFIT, excursión de pista) cuando la evidencia lo soporte; una competencia que se degrada entre sesiones es un precursor de seguridad. Escala TEM del operador: 1 Unsafe situation, 2 Not an unsafe situation, 3 Safe situation, 4 Safe situation, 5 Enhanced safety, effectiveness and efficiency.';
PRE=PRE.replace('Escala de calificación 1–5 (1 No satisfactorio, 2 Mínimo aceptable, 3 Adecuado, 4 Bueno, 5 Ejemplar).','Escala de calificación 1–5 según el modelo TEM del operador.')+PRE_EATS;
