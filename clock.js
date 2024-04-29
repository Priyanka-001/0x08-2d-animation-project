class Clock extends Domel {
	T
	stepperSeconds
	stepperMinutes
	stepperHours
  
	constructor(canvasSel, T=-1) {
	  super(canvasSel)
	  this.T = T
  
	  //const ff = 1.0
	  // this.stepperHours = new Stepper(ff/3600)
	  // this.stepperMinutes = new Stepper(ff/60)
	  // this.stepperSeconds = new Stepper(ff)
	}
  
	draw(ms) {
	  const canvas = this.el
	  const {width: W, height: H} = canvas
	  const ctx = canvas.getContext('2d')
  
	  ctx.reset()
  
	  ctx.save();
	  // ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, W/2, H/2);
	  // ctx.transform(2.000000, 0.000000, 0.000000, 2.000000, 0, 0);
	  // ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -128, -128);
  
	  // this.drawDial(ms)
	  // this.drawHands(ms)
	  
	  
	  this.drawdvddisk(ms)
	  this.drawsun(ms)
	  this.drawcloud1(ms)
	  this.drawcloud2(ms)
	  this.drawcloud2a(ms)
	  this.drawcloud3(ms)
	  this.drawcloud4(ms)
	  this.drawcloud5(ms)
	  this.drawcloud5a(ms)
	  this.drawtrees(ms)
	  this.drawmusic(ms)
	  this.drawcircle(ms)
	  this.drawlines(ms)
	  this.drawcar(ms)	  
	}
  
	drawtrees(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas 

	  ctx.restore();
	
	  ctx.transform(2.2,0,0,2.2,-410,10)

	  
  
	  ctx.save();
	  //ctx.restore();
	  const x=ms*1e-3;
	  const h=148,k=120;
	  const sx=1+0.15*x;
	  ctx.transform(sx,0,0,sx,-h*(sx)+h,-k*(sx)+k);
	  //ctx.restore();
	  //ctx.save();
	  //ctx.transform(0.1*x,0,0,0.1*x,0,0);
	  //146.613420, 119.751240
	  //182.241230, 119.758870
	  
  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 255, 255)';
	  ctx.strokeStyle = 'rgb(210, 36, 38)';
	  ctx.lineWidth = 0.396875;
	  ctx.moveTo(85.047768, 136.189059);
	  ctx.bezierCurveTo(89.373737, 136.189059, 92.880628, 139.889820, 92.880628, 144.454940);
	  ctx.bezierCurveTo(92.880628, 149.020060, 89.373737, 152.720821, 85.047768, 152.720821);
	  ctx.bezierCurveTo(80.721799, 152.720821, 77.214909, 149.020060, 77.214909, 144.454940);
	  ctx.bezierCurveTo(77.214909, 139.889820, 80.721799, 136.189059, 85.047768, 136.189059);
	  ctx.fill();
	  ctx.stroke();
	  
  // #text7
	  ctx.fillStyle = 'rgb(0, 0, 0)';
	  ctx.strokeStyle = 'rgb(38, 38, 38)';
	  ctx.lineWidth = 0.264583;
	  ctx.font = "9.87778px";
	  ctx.fillText("80", 79.515648, 148.031890);
	  
  // #path2-1
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 146, 17)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.043351;
	  ctx.moveTo(65.483601, 167.455580);
	  ctx.lineTo(68.489955, 167.410180);
	  ctx.lineTo(70.641108, 166.929730);
	  ctx.lineTo(72.608064, 166.053200);
	  ctx.lineTo(74.996043, 164.715700);
	  ctx.lineTo(76.864324, 162.657500);
	  ctx.lineTo(78.515516, 160.826540);
	  ctx.lineTo(79.811470, 159.015070);
	  ctx.lineTo(80.679826, 156.366040);
	  ctx.lineTo(81.232417, 153.892300);
	  ctx.lineTo(81.317937, 151.489980);
	  ctx.lineTo(81.232417, 148.944830);
	  ctx.lineTo(80.554836, 146.574970);
	  ctx.lineTo(79.291773, 145.016720);
	  ctx.lineTo(78.055025, 143.977880);
	  ctx.lineTo(78.989164, 142.413130);
	  ctx.lineTo(79.837785, 140.225080);
	  ctx.lineTo(79.857525, 138.186360);
	  ctx.lineTo(79.318091, 136.465780);
	  ctx.lineTo(78.337901, 135.173730);
	  ctx.lineTo(77.278771, 134.576400);
	  ctx.lineTo(76.153854, 134.712740);
	  ctx.lineTo(76.107804, 132.855820);
	  ctx.lineTo(75.897296, 131.024870);
	  ctx.lineTo(75.081567, 128.908230);
	  ctx.lineTo(73.871131, 127.466850);
	  ctx.lineTo(72.779108, 126.109860);
	  ctx.lineTo(71.423946, 125.200880);
	  ctx.lineTo(69.864855, 124.460710);
	  ctx.lineTo(67.799220, 124.369810);
	  ctx.lineTo(65.608595, 124.460710);
	  ctx.lineTo(63.852147, 125.032060);
	  ctx.lineTo(62.194377, 125.746270);
	  ctx.lineTo(60.799746, 126.843540);
	  ctx.lineTo(58.997245, 128.674470);
	  ctx.lineTo(57.984164, 130.550880);
	  ctx.lineTo(57.155278, 133.459620);
	  ctx.lineTo(56.997395, 135.439910);
	  ctx.lineTo(57.267112, 137.115040);
	  ctx.lineTo(55.872480, 137.991550);
	  ctx.lineTo(54.747565, 139.978330);
	  ctx.lineTo(54.635731, 142.302740);
	  ctx.lineTo(55.221214, 144.296000);
	  ctx.lineTo(55.984314, 145.854260);
	  ctx.lineTo(54.833085, 147.522900);
	  ctx.lineTo(54.162082, 150.042080);
	  ctx.lineTo(53.991043, 152.541780);
	  ctx.lineTo(54.116033, 154.703870);
	  ctx.lineTo(54.543633, 157.567170);
	  ctx.lineTo(55.747489, 160.339570);
	  ctx.lineTo(57.477622, 162.813300);
	  ctx.lineTo(59.549835, 164.890980);
	  ctx.lineTo(61.523371, 166.020710);
	  ctx.lineTo(63.681104, 167.066050);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #layer2
	  
  // #path2
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(144, 188, 93)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(25.802871, 189.541770);
	  ctx.lineTo(29.449313, 189.485970);
	  ctx.lineTo(32.058472, 188.895750);
	  ctx.lineTo(34.444217, 187.818980);
	  ctx.lineTo(37.340624, 186.175920);
	  ctx.lineTo(39.606685, 183.647510);
	  ctx.lineTo(41.609435, 181.398270);
	  ctx.lineTo(43.181313, 179.172960);
	  ctx.lineTo(44.234552, 175.918740);
	  ctx.lineTo(44.904797, 172.879870);
	  ctx.lineTo(45.008524, 169.928730);
	  ctx.lineTo(44.904797, 166.802130);
	  ctx.lineTo(44.082950, 163.890870);
	  ctx.lineTo(42.550966, 161.976630);
	  ctx.lineTo(41.050900, 160.700460);
	  ctx.lineTo(42.183928, 158.778240);
	  ctx.lineTo(43.213231, 156.090310);
	  ctx.lineTo(43.237171, 153.585840);
	  ctx.lineTo(42.582885, 151.472190);
	  ctx.lineTo(41.394001, 149.884960);
	  ctx.lineTo(40.109370, 149.151170);
	  ctx.lineTo(38.744945, 149.318660);
	  ctx.lineTo(38.689095, 147.037520);
	  ctx.lineTo(38.433767, 144.788280);
	  ctx.lineTo(37.444360, 142.188090);
	  ctx.lineTo(35.976208, 140.417410);
	  ctx.lineTo(34.651680, 138.750420);
	  ctx.lineTo(33.007988, 137.633770);
	  ctx.lineTo(31.116948, 136.724510);
	  ctx.lineTo(28.611515, 136.612840);
	  ctx.lineTo(25.954480, 136.724510);
	  ctx.lineTo(23.824064, 137.426390);
	  ctx.lineTo(21.813335, 138.303760);
	  ctx.lineTo(20.121770, 139.651710);
	  ctx.lineTo(17.935495, 141.900920);
	  ctx.lineTo(16.706717, 144.206000);
	  ctx.lineTo(15.701352, 147.779260);
	  ctx.lineTo(15.509854, 150.211950);
	  ctx.lineTo(15.836996, 152.269770);
	  ctx.lineTo(14.145431, 153.346530);
	  ctx.lineTo(12.781008, 155.787200);
	  ctx.lineTo(12.645363, 158.642620);
	  ctx.lineTo(13.355502, 161.091260);
	  ctx.lineTo(14.281076, 163.005510);
	  ctx.lineTo(12.884736, 165.055350);
	  ctx.lineTo(12.070869, 168.150050);
	  ctx.lineTo(11.863413, 171.220820);
	  ctx.lineTo(12.015016, 173.876840);
	  ctx.lineTo(12.533656, 177.394280);
	  ctx.lineTo(13.993828, 180.800040);
	  ctx.lineTo(16.092327, 183.838910);
	  ctx.lineTo(18.605738, 186.391240);
	  ctx.lineTo(20.999463, 187.779070);
	  ctx.lineTo(23.616603, 189.063220);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path2-2
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(144, 188, 93)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.028517;
	  ctx.moveTo(98.314187, 146.480730);
	  ctx.lineTo(100.214500, 146.449630);
	  ctx.lineTo(101.574250, 146.120730);
	  ctx.lineTo(102.817560, 145.520690);
	  ctx.lineTo(104.327000, 144.605080);
	  ctx.lineTo(105.507940, 143.196090);
	  ctx.lineTo(106.551660, 141.942680);
	  ctx.lineTo(107.370830, 140.702600);
	  ctx.lineTo(107.919710, 138.889150);
	  ctx.lineTo(108.269000, 137.195720);
	  ctx.lineTo(108.323000, 135.551160);
	  ctx.lineTo(108.269000, 133.808830);
	  ctx.lineTo(107.840710, 132.186500);
	  ctx.lineTo(107.042330, 131.119780);
	  ctx.lineTo(106.260580, 130.408620);
	  ctx.lineTo(106.851040, 129.337440);
	  ctx.lineTo(107.387460, 127.839560);
	  ctx.lineTo(107.399960, 126.443930);
	  ctx.lineTo(107.059000, 125.266070);
	  ctx.lineTo(106.439410, 124.381570);
	  ctx.lineTo(105.769930, 123.972660);
	  ctx.lineTo(105.058880, 124.065960);
	  ctx.lineTo(105.029780, 122.794780);
	  ctx.lineTo(104.896710, 121.541360);
	  ctx.lineTo(104.381090, 120.092380);
	  ctx.lineTo(103.615970, 119.105650);
	  ctx.lineTo(102.925700, 118.176700);
	  ctx.lineTo(102.069100, 117.554440);
	  ctx.lineTo(101.083610, 117.047740);
	  ctx.lineTo(99.777921, 116.985540);
	  ctx.lineTo(98.393226, 117.047740);
	  ctx.lineTo(97.282976, 117.438880);
	  ctx.lineTo(96.235100, 117.927790);
	  ctx.lineTo(95.353555, 118.678950);
	  ctx.lineTo(94.214195, 119.932360);
	  ctx.lineTo(93.573827, 121.216880);
	  ctx.lineTo(93.049889, 123.208120);
	  ctx.lineTo(92.950089, 124.563760);
	  ctx.lineTo(93.120576, 125.710500);
	  ctx.lineTo(92.239030, 126.310530);
	  ctx.lineTo(91.527973, 127.670620);
	  ctx.lineTo(91.457283, 129.261830);
	  ctx.lineTo(91.827366, 130.626360);
	  ctx.lineTo(92.309721, 131.693100);
	  ctx.lineTo(91.582030, 132.835390);
	  ctx.lineTo(91.157890, 134.559940);
	  ctx.lineTo(91.049775, 136.271160);
	  ctx.lineTo(91.128785, 137.751250);
	  ctx.lineTo(91.399070, 139.711380);
	  ctx.lineTo(92.160028, 141.609280);
	  ctx.lineTo(93.253644, 143.302710);
	  ctx.lineTo(94.563488, 144.725030);
	  ctx.lineTo(95.810960, 145.498420);
	  ctx.lineTo(97.174861, 146.214010);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(120, 156, 69)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(13.976349, 154.048420);
	  ctx.lineTo(12.619905, 156.098260);
	  ctx.lineTo(12.755549, 158.371430);
	  ctx.lineTo(13.114608, 160.070330);
	  ctx.lineTo(13.816767, 161.585770);
	  ctx.lineTo(14.183805, 162.670510);
	  ctx.lineTo(13.274190, 163.874900);
	  ctx.lineTo(12.659800, 166.052350);
	  ctx.lineTo(12.181055, 168.205880);
	  ctx.lineTo(12.340636, 170.487030);
	  ctx.lineTo(12.085305, 173.087220);
	  ctx.lineTo(12.244887, 175.783110);
	  ctx.lineTo(12.955025, 178.662460);
	  ctx.lineTo(14.231679, 181.198840);
	  ctx.lineTo(16.122721, 183.527840);
	  ctx.lineTo(18.404739, 185.856850);
	  ctx.lineTo(20.862297, 187.810970);
	  ctx.lineTo(23.742746, 189.103090);
	  ctx.lineTo(26.048701, 189.509870);
	  ctx.lineTo(29.806848, 189.406180);
	  ctx.lineTo(32.551654, 188.792020);
	  ctx.lineTo(35.487955, 187.316460);
	  ctx.lineTo(38.049241, 185.816970);
	  ctx.lineTo(40.291365, 183.583680);
	  ctx.lineTo(42.134532, 180.927660);
	  ctx.lineTo(43.634600, 178.215800);
	  ctx.lineTo(44.344739, 175.934660);
	  ctx.lineTo(42.365926, 176.548810);
	  ctx.lineTo(40.522756, 176.899760);
	  ctx.lineTo(38.432238, 177.410220);
	  ctx.lineTo(35.990637, 177.354420);
	  ctx.lineTo(33.381478, 177.186920);
	  ctx.lineTo(30.979773, 176.915740);
	  ctx.lineTo(29.998346, 176.644560);
	  ctx.lineTo(24.891734, 174.203890);
	  ctx.lineTo(23.088461, 172.967600);
	  ctx.lineTo(21.628289, 171.707390);
	  ctx.lineTo(20.423447, 170.255750);
	  ctx.lineTo(19.226585, 168.301620);
	  ctx.lineTo(18.253136, 166.514990);
	  ctx.lineTo(17.495123, 164.568840);
	  ctx.bezierCurveTo(17.495123, 164.568840, 16.394010, 161.274740, 16.561571, 161.856990);
	  ctx.bezierCurveTo(16.729131, 162.439240, 15.691851, 159.416320, 15.691851, 159.416320);
	  ctx.lineTo(15.364708, 158.068370);
	  ctx.lineTo(14.542863, 156.106270);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-0
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(120, 156, 69)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.028903;
	  ctx.moveTo(92.058547, 126.419140);
	  ctx.lineTo(91.350924, 127.591420);
	  ctx.lineTo(91.421684, 128.891430);
	  ctx.lineTo(91.608996, 129.863020);
	  ctx.lineTo(91.975295, 130.729680);
	  ctx.lineTo(92.166769, 131.350030);
	  ctx.lineTo(91.692246, 132.038810);
	  ctx.lineTo(91.371735, 133.284080);
	  ctx.lineTo(91.121986, 134.515660);
	  ctx.lineTo(91.205236, 135.820230);
	  ctx.lineTo(91.072036, 137.307260);
	  ctx.lineTo(91.155286, 138.849010);
	  ctx.lineTo(91.525747, 140.495680);
	  ctx.lineTo(92.191745, 141.946220);
	  ctx.lineTo(93.178253, 143.278150);
	  ctx.lineTo(94.368723, 144.610090);
	  ctx.lineTo(95.650768, 145.727630);
	  ctx.lineTo(97.153424, 146.466590);
	  ctx.lineTo(98.356382, 146.699220);
	  ctx.lineTo(100.316910, 146.639920);
	  ctx.lineTo(101.748810, 146.288690);
	  ctx.lineTo(103.280600, 145.444830);
	  ctx.lineTo(104.616760, 144.587280);
	  ctx.lineTo(105.786410, 143.310090);
	  ctx.lineTo(106.747950, 141.791130);
	  ctx.lineTo(107.530500, 140.240240);
	  ctx.lineTo(107.900950, 138.935680);
	  ctx.lineTo(106.868660, 139.286910);
	  ctx.lineTo(105.907120, 139.487610);
	  ctx.lineTo(104.816550, 139.779540);
	  ctx.lineTo(103.542830, 139.747640);
	  ctx.lineTo(102.181700, 139.651840);
	  ctx.lineTo(100.928800, 139.496750);
	  ctx.lineTo(100.416810, 139.341670);
	  ctx.lineTo(97.752822, 137.945870);
	  ctx.lineTo(96.812101, 137.238850);
	  ctx.lineTo(96.050366, 136.518140);
	  ctx.lineTo(95.421831, 135.687960);
	  ctx.lineTo(94.797459, 134.570420);
	  ctx.lineTo(94.289636, 133.548660);
	  ctx.lineTo(93.894200, 132.435670);
	  ctx.bezierCurveTo(93.894200, 132.435670, 93.319777, 130.551810, 93.407190, 130.884790);
	  ctx.bezierCurveTo(93.494600, 131.217770, 92.953479, 129.488990, 92.953479, 129.488990);
	  ctx.lineTo(92.782817, 128.718110);
	  ctx.lineTo(92.354081, 127.596010);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(216, 117, 0)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.043433;
	  ctx.moveTo(55.535020, 138.615360);
	  ctx.lineTo(54.415140, 140.288000);
	  ctx.lineTo(54.527128, 142.142890);
	  ctx.lineTo(54.823567, 143.529170);
	  ctx.lineTo(55.403269, 144.765760);
	  ctx.lineTo(55.706296, 145.650890);
	  ctx.lineTo(54.955318, 146.633660);
	  ctx.lineTo(54.448078, 148.410440);
	  ctx.lineTo(54.052826, 150.167700);
	  ctx.lineTo(54.184576, 152.029100);
	  ctx.lineTo(53.973775, 154.150830);
	  ctx.lineTo(54.105526, 156.350650);
	  ctx.lineTo(54.691815, 158.700170);
	  ctx.lineTo(55.745820, 160.769830);
	  ctx.lineTo(57.307064, 162.670270);
	  ctx.lineTo(59.191097, 164.570720);
	  ctx.lineTo(61.220057, 166.165260);
	  ctx.lineTo(63.598155, 167.219620);
	  ctx.lineTo(65.501951, 167.551550);
	  ctx.lineTo(68.604676, 167.466950);
	  ctx.lineTo(70.870786, 166.965800);
	  ctx.lineTo(73.294996, 165.761750);
	  ctx.lineTo(75.409592, 164.538190);
	  ctx.lineTo(77.260689, 162.715840);
	  ctx.lineTo(78.782407, 160.548560);
	  ctx.lineTo(80.020863, 158.335710);
	  ctx.lineTo(80.607153, 156.474320);
	  ctx.lineTo(78.973446, 156.975460);
	  ctx.lineTo(77.451726, 157.261830);
	  ctx.lineTo(75.725795, 157.678360);
	  ctx.lineTo(73.710010, 157.632860);
	  ctx.lineTo(71.555889, 157.496180);
	  ctx.lineTo(69.573042, 157.274900);
	  ctx.lineTo(68.762776, 157.053620);
	  ctx.lineTo(64.546759, 155.062060);
	  ctx.lineTo(63.057978, 154.053260);
	  ctx.lineTo(61.852460, 153.024940);
	  ctx.lineTo(60.857743, 151.840410);
	  ctx.lineTo(59.869613, 150.245860);
	  ctx.lineTo(59.065934, 148.787990);
	  ctx.lineTo(58.440119, 147.199950);
	  ctx.bezierCurveTo(58.440119, 147.199950, 57.531040, 144.512000, 57.669379, 144.987110);
	  ctx.bezierCurveTo(57.807716, 145.462220, 56.951338, 142.995550, 56.951338, 142.995550);
	  ctx.lineTo(56.681249, 141.895630);
	  ctx.lineTo(56.002734, 140.294580);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(25.108690, 207.511780);
	  ctx.lineTo(29.888160, 207.336310);
	  ctx.lineTo(29.417396, 189.932600);
	  ctx.lineTo(29.656769, 186.478980);
	  ctx.lineTo(35.417666, 180.018390);
	  ctx.lineTo(35.609164, 179.436140);
	  ctx.lineTo(35.050628, 179.220790);
	  ctx.lineTo(29.928057, 182.530840);
	  ctx.lineTo(29.608894, 175.535850);
	  ctx.lineTo(28.946628, 166.235800);
	  ctx.lineTo(28.611507, 159.902830);
	  ctx.lineTo(27.989140, 158.618690);
	  ctx.lineTo(27.765726, 159.208910);
	  ctx.lineTo(27.239104, 164.879880);
	  ctx.lineTo(26.568862, 174.323500);
	  ctx.lineTo(24.973046, 171.228800);
	  ctx.lineTo(24.183117, 170.191920);
	  ctx.lineTo(23.552769, 169.617640);
	  ctx.lineTo(23.105941, 169.864900);
	  ctx.lineTo(23.257543, 170.837980);
	  ctx.lineTo(24.454406, 172.895790);
	  ctx.lineTo(25.220398, 175.376340);
	  ctx.lineTo(26.177888, 178.670440);
	  ctx.lineTo(26.122038, 183.224760);
	  ctx.lineTo(25.547544, 189.669390);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path2-7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(144, 188, 93)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(265.884800, 189.390000);
	  ctx.lineTo(269.531240, 189.334200);
	  ctx.lineTo(272.140400, 188.743980);
	  ctx.lineTo(274.526150, 187.667210);
	  ctx.lineTo(277.422550, 186.024150);
	  ctx.lineTo(279.688610, 183.495740);
	  ctx.lineTo(281.691370, 181.246500);
	  ctx.lineTo(283.263240, 179.021190);
	  ctx.lineTo(284.316480, 175.766970);
	  ctx.lineTo(284.986730, 172.728100);
	  ctx.lineTo(285.090450, 169.776960);
	  ctx.lineTo(284.986730, 166.650360);
	  ctx.lineTo(284.164880, 163.739100);
	  ctx.lineTo(282.632900, 161.824860);
	  ctx.lineTo(281.132830, 160.548690);
	  ctx.lineTo(282.265860, 158.626470);
	  ctx.lineTo(283.295160, 155.938540);
	  ctx.lineTo(283.319060, 153.434070);
	  ctx.lineTo(282.664770, 151.320420);
	  ctx.lineTo(281.475890, 149.733190);
	  ctx.lineTo(280.191260, 148.999400);
	  ctx.lineTo(278.826840, 149.166890);
	  ctx.lineTo(278.770940, 146.885750);
	  ctx.lineTo(278.515620, 144.636510);
	  ctx.lineTo(277.526210, 142.036320);
	  ctx.lineTo(276.058060, 140.265640);
	  ctx.lineTo(274.733530, 138.598650);
	  ctx.lineTo(273.089840, 137.482000);
	  ctx.lineTo(271.198800, 136.572740);
	  ctx.lineTo(268.693360, 136.461070);
	  ctx.lineTo(266.036330, 136.572740);
	  ctx.lineTo(263.905910, 137.274620);
	  ctx.lineTo(261.895180, 138.151990);
	  ctx.lineTo(260.203620, 139.499940);
	  ctx.lineTo(258.017340, 141.749150);
	  ctx.lineTo(256.788570, 144.054230);
	  ctx.lineTo(255.783200, 147.627490);
	  ctx.lineTo(255.591700, 150.060180);
	  ctx.lineTo(255.918850, 152.118000);
	  ctx.lineTo(254.227280, 153.194760);
	  ctx.lineTo(252.862860, 155.635430);
	  ctx.lineTo(252.727210, 158.490850);
	  ctx.lineTo(253.437350, 160.939490);
	  ctx.lineTo(254.362930, 162.853740);
	  ctx.lineTo(252.966590, 164.903580);
	  ctx.lineTo(252.152720, 167.998280);
	  ctx.lineTo(251.945260, 171.069050);
	  ctx.lineTo(252.096870, 173.725070);
	  ctx.lineTo(252.615510, 177.242510);
	  ctx.lineTo(254.075680, 180.648270);
	  ctx.lineTo(256.174180, 183.687140);
	  ctx.lineTo(258.687590, 186.239470);
	  ctx.lineTo(261.081310, 187.627300);
	  ctx.lineTo(263.698450, 188.911450);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-9
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(120, 156, 69)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(254.058280, 153.896650);
	  ctx.lineTo(252.701830, 155.946490);
	  ctx.lineTo(252.837480, 158.219660);
	  ctx.lineTo(253.196540, 159.918560);
	  ctx.lineTo(253.898700, 161.434000);
	  ctx.lineTo(254.265730, 162.518740);
	  ctx.lineTo(253.356120, 163.723130);
	  ctx.lineTo(252.741730, 165.900580);
	  ctx.lineTo(252.262980, 168.054110);
	  ctx.lineTo(252.422570, 170.335260);
	  ctx.lineTo(252.167230, 172.935450);
	  ctx.lineTo(252.326820, 175.631340);
	  ctx.lineTo(253.036950, 178.510690);
	  ctx.lineTo(254.313610, 181.047070);
	  ctx.lineTo(256.204650, 183.376070);
	  ctx.lineTo(258.486670, 185.705080);
	  ctx.lineTo(260.944230, 187.659200);
	  ctx.lineTo(263.824680, 188.951320);
	  ctx.lineTo(266.130630, 189.358100);
	  ctx.lineTo(269.888780, 189.254410);
	  ctx.lineTo(272.633580, 188.640250);
	  ctx.lineTo(275.569880, 187.164690);
	  ctx.lineTo(278.131170, 185.665200);
	  ctx.lineTo(280.373290, 183.431910);
	  ctx.lineTo(282.216460, 180.775890);
	  ctx.lineTo(283.716530, 178.064030);
	  ctx.lineTo(284.426670, 175.782890);
	  ctx.lineTo(282.447860, 176.397040);
	  ctx.lineTo(280.604690, 176.747990);
	  ctx.lineTo(278.514170, 177.258450);
	  ctx.lineTo(276.072570, 177.202650);
	  ctx.lineTo(273.463410, 177.035150);
	  ctx.lineTo(271.061700, 176.763970);
	  ctx.lineTo(270.080280, 176.492790);
	  ctx.lineTo(264.973660, 174.052120);
	  ctx.lineTo(263.170390, 172.815830);
	  ctx.lineTo(261.710220, 171.555620);
	  ctx.lineTo(260.505380, 170.103980);
	  ctx.lineTo(259.308510, 168.149850);
	  ctx.lineTo(258.335070, 166.363220);
	  ctx.lineTo(257.577050, 164.417070);
	  ctx.bezierCurveTo(257.577050, 164.417070, 256.475940, 161.122970, 256.643500, 161.705220);
	  ctx.bezierCurveTo(256.811060, 162.287470, 255.773780, 159.264550, 255.773780, 159.264550);
	  ctx.lineTo(255.446640, 157.916600);
	  ctx.lineTo(254.624790, 155.954500);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-0
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(265.190620, 207.360010);
	  ctx.lineTo(269.970090, 207.184540);
	  ctx.lineTo(269.499330, 189.780830);
	  ctx.lineTo(269.738700, 186.327210);
	  ctx.lineTo(275.499600, 179.866620);
	  ctx.lineTo(275.691090, 179.284370);
	  ctx.lineTo(275.132560, 179.069020);
	  ctx.lineTo(270.009990, 182.379070);
	  ctx.lineTo(269.690820, 175.384080);
	  ctx.lineTo(269.028560, 166.084030);
	  ctx.lineTo(268.693440, 159.751060);
	  ctx.lineTo(268.071070, 158.466920);
	  ctx.lineTo(267.847660, 159.057140);
	  ctx.lineTo(267.321030, 164.728110);
	  ctx.lineTo(266.650790, 174.171730);
	  ctx.lineTo(265.054980, 171.077030);
	  ctx.lineTo(264.265050, 170.040150);
	  ctx.lineTo(263.634700, 169.465870);
	  ctx.lineTo(263.187870, 169.713130);
	  ctx.lineTo(263.339470, 170.686210);
	  ctx.lineTo(264.536340, 172.744020);
	  ctx.lineTo(265.302330, 175.224570);
	  ctx.lineTo(266.259820, 178.518670);
	  ctx.lineTo(266.204020, 183.072990);
	  ctx.lineTo(265.629520, 189.517620);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-8
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.027939;
	  ctx.moveTo(97.822533, 156.067040);
	  ctx.lineTo(100.234930, 155.970140);
	  ctx.lineTo(99.997316, 146.357950);
	  ctx.lineTo(100.118140, 144.450490);
	  ctx.lineTo(103.025900, 140.882260);
	  ctx.lineTo(103.122600, 140.560680);
	  ctx.lineTo(102.840690, 140.441740);
	  ctx.lineTo(100.255120, 142.269910);
	  ctx.lineTo(100.094020, 138.406530);
	  ctx.lineTo(99.759747, 133.270040);
	  ctx.lineTo(99.590597, 129.772300);
	  ctx.lineTo(99.276463, 129.063060);
	  ctx.lineTo(99.163697, 129.389040);
	  ctx.lineTo(98.897889, 132.521160);
	  ctx.lineTo(98.559590, 137.736940);
	  ctx.lineTo(97.754115, 136.027710);
	  ctx.lineTo(97.355405, 135.455040);
	  ctx.lineTo(97.037242, 135.137860);
	  ctx.lineTo(96.811709, 135.274420);
	  ctx.lineTo(96.888229, 135.811860);
	  ctx.lineTo(97.492336, 136.948400);
	  ctx.lineTo(97.878964, 138.318430);
	  ctx.lineTo(98.362249, 140.137780);
	  ctx.lineTo(98.334059, 142.653160);
	  ctx.lineTo(98.044088, 146.212580);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path2-2-6
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(144, 188, 93)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.028517;
	  ctx.moveTo(196.103290, 146.402290);
	  ctx.lineTo(198.003610, 146.371190);
	  ctx.lineTo(199.363360, 146.042290);
	  ctx.lineTo(200.606670, 145.442250);
	  ctx.lineTo(202.116110, 144.526640);
	  ctx.lineTo(203.297050, 143.117650);
	  ctx.lineTo(204.340770, 141.864240);
	  ctx.lineTo(205.159940, 140.624160);
	  ctx.lineTo(205.708820, 138.810710);
	  ctx.lineTo(206.058110, 137.117280);
	  ctx.lineTo(206.112110, 135.472720);
	  ctx.lineTo(206.058110, 133.730390);
	  ctx.lineTo(205.629820, 132.108060);
	  ctx.lineTo(204.831440, 131.041340);
	  ctx.lineTo(204.049690, 130.330180);
	  ctx.lineTo(204.640150, 129.259000);
	  ctx.lineTo(205.176570, 127.761120);
	  ctx.lineTo(205.189070, 126.365490);
	  ctx.lineTo(204.848110, 125.187630);
	  ctx.lineTo(204.228520, 124.303130);
	  ctx.lineTo(203.559040, 123.894220);
	  ctx.lineTo(202.847990, 123.987520);
	  ctx.lineTo(202.818890, 122.716340);
	  ctx.lineTo(202.685820, 121.462920);
	  ctx.lineTo(202.170200, 120.013940);
	  ctx.lineTo(201.405080, 119.027210);
	  ctx.lineTo(200.714810, 118.098260);
	  ctx.lineTo(199.858210, 117.476000);
	  ctx.lineTo(198.872720, 116.969300);
	  ctx.lineTo(197.567030, 116.907100);
	  ctx.lineTo(196.182330, 116.969300);
	  ctx.lineTo(195.072080, 117.360440);
	  ctx.lineTo(194.024210, 117.849350);
	  ctx.lineTo(193.142660, 118.600510);
	  ctx.lineTo(192.003300, 119.853920);
	  ctx.lineTo(191.362930, 121.138440);
	  ctx.lineTo(190.839000, 123.129680);
	  ctx.lineTo(190.739200, 124.485320);
	  ctx.lineTo(190.909680, 125.632060);
	  ctx.lineTo(190.028140, 126.232090);
	  ctx.lineTo(189.317080, 127.592180);
	  ctx.lineTo(189.246380, 129.183390);
	  ctx.lineTo(189.616460, 130.547920);
	  ctx.lineTo(190.098820, 131.614660);
	  ctx.lineTo(189.371130, 132.756950);
	  ctx.lineTo(188.946990, 134.481500);
	  ctx.lineTo(188.838870, 136.192720);
	  ctx.lineTo(188.917870, 137.672810);
	  ctx.lineTo(189.188160, 139.632940);
	  ctx.lineTo(189.949110, 141.530840);
	  ctx.lineTo(191.042730, 143.224270);
	  ctx.lineTo(192.352570, 144.646590);
	  ctx.lineTo(193.600050, 145.419980);
	  ctx.lineTo(194.963950, 146.135570);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-0-1
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(120, 156, 69)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.028903;
	  ctx.moveTo(189.847650, 126.340700);
	  ctx.lineTo(189.140030, 127.512980);
	  ctx.lineTo(189.210830, 128.812990);
	  ctx.lineTo(189.398140, 129.784580);
	  ctx.lineTo(189.764440, 130.651240);
	  ctx.lineTo(189.955920, 131.271590);
	  ctx.lineTo(189.481390, 131.960370);
	  ctx.lineTo(189.160880, 133.205640);
	  ctx.lineTo(188.911130, 134.437220);
	  ctx.lineTo(188.994330, 135.741790);
	  ctx.lineTo(188.861130, 137.228820);
	  ctx.lineTo(188.944330, 138.770570);
	  ctx.lineTo(189.314790, 140.417240);
	  ctx.lineTo(189.980790, 141.867780);
	  ctx.lineTo(190.967300, 143.199710);
	  ctx.lineTo(192.157770, 144.531650);
	  ctx.lineTo(193.439820, 145.649190);
	  ctx.lineTo(194.942470, 146.388150);
	  ctx.lineTo(196.145430, 146.620780);
	  ctx.lineTo(198.105960, 146.561480);
	  ctx.lineTo(199.537860, 146.210250);
	  ctx.lineTo(201.069650, 145.366390);
	  ctx.lineTo(202.405810, 144.508840);
	  ctx.lineTo(203.575460, 143.231650);
	  ctx.lineTo(204.537000, 141.712690);
	  ctx.lineTo(205.319550, 140.161800);
	  ctx.lineTo(205.690000, 138.857240);
	  ctx.lineTo(204.657710, 139.208470);
	  ctx.lineTo(203.696170, 139.409170);
	  ctx.lineTo(202.605600, 139.701100);
	  ctx.lineTo(201.331880, 139.669200);
	  ctx.lineTo(199.970750, 139.573400);
	  ctx.lineTo(198.717850, 139.418310);
	  ctx.lineTo(198.205860, 139.263230);
	  ctx.lineTo(195.541870, 137.867430);
	  ctx.lineTo(194.601150, 137.160410);
	  ctx.lineTo(193.839410, 136.439700);
	  ctx.lineTo(193.210880, 135.609520);
	  ctx.lineTo(192.586510, 134.491980);
	  ctx.lineTo(192.078680, 133.470220);
	  ctx.lineTo(191.683250, 132.357230);
	  ctx.bezierCurveTo(191.683250, 132.357230, 191.108820, 130.473370, 191.196240, 130.806350);
	  ctx.bezierCurveTo(191.283640, 131.139330, 190.742530, 129.410550, 190.742530, 129.410550);
	  ctx.lineTo(190.571860, 128.639670);
	  ctx.lineTo(190.143130, 127.517570);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-8-9
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.027939;
	  ctx.moveTo(195.611640, 155.988600);
	  ctx.lineTo(198.024040, 155.891700);
	  ctx.lineTo(197.786420, 146.279510);
	  ctx.lineTo(197.907250, 144.372050);
	  ctx.lineTo(200.815010, 140.803820);
	  ctx.lineTo(200.911710, 140.482240);
	  ctx.lineTo(200.629800, 140.363300);
	  ctx.lineTo(198.044230, 142.191470);
	  ctx.lineTo(197.883130, 138.328090);
	  ctx.lineTo(197.548850, 133.191600);
	  ctx.lineTo(197.379700, 129.693860);
	  ctx.lineTo(197.065570, 128.984620);
	  ctx.lineTo(196.952800, 129.310600);
	  ctx.lineTo(196.687000, 132.442720);
	  ctx.lineTo(196.348700, 137.658500);
	  ctx.lineTo(195.543220, 135.949270);
	  ctx.lineTo(195.144510, 135.376600);
	  ctx.lineTo(194.826350, 135.059420);
	  ctx.lineTo(194.600820, 135.195980);
	  ctx.lineTo(194.677320, 135.733420);
	  ctx.lineTo(195.281420, 136.869960);
	  ctx.lineTo(195.668050, 138.239990);
	  ctx.lineTo(196.151340, 140.059340);
	  ctx.lineTo(196.123140, 142.574720);
	  ctx.lineTo(195.833170, 146.134140);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-5
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.045141;
	  ctx.moveTo(64.968153, 180.830660);
	  ctx.lineTo(69.201991, 180.686510);
	  ctx.lineTo(68.784970, 166.389260);
	  ctx.lineTo(68.997016, 163.552090);
	  ctx.lineTo(74.100239, 158.244680);
	  ctx.lineTo(74.269875, 157.766360);
	  ctx.lineTo(73.775103, 157.589450);
	  ctx.lineTo(69.237333, 160.308670);
	  ctx.lineTo(68.954606, 154.562250);
	  ctx.lineTo(68.367946, 146.922200);
	  ctx.lineTo(68.071083, 141.719630);
	  ctx.lineTo(67.519766, 140.664700);
	  ctx.lineTo(67.321857, 141.149570);
	  ctx.lineTo(66.855356, 145.808300);
	  ctx.lineTo(66.261630, 153.566290);
	  ctx.lineTo(64.847995, 151.023980);
	  ctx.lineTo(64.148245, 150.172180);
	  ctx.lineTo(63.589859, 149.700400);
	  ctx.lineTo(63.194042, 149.903530);
	  ctx.lineTo(63.328336, 150.702920);
	  ctx.lineTo(64.388563, 152.393420);
	  ctx.lineTo(65.067109, 154.431210);
	  ctx.lineTo(65.915290, 157.137330);
	  ctx.lineTo(65.865820, 160.878730);
	  ctx.lineTo(65.356911, 166.173030);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path2-1-3
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 146, 17)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.043351;
	  ctx.moveTo(227.508560, 166.801840);
	  ctx.lineTo(230.514910, 166.756440);
	  ctx.lineTo(232.666060, 166.275990);
	  ctx.lineTo(234.633020, 165.399460);
	  ctx.lineTo(237.021000, 164.061960);
	  ctx.lineTo(238.889280, 162.003760);
	  ctx.lineTo(240.540470, 160.172800);
	  ctx.lineTo(241.836430, 158.361330);
	  ctx.lineTo(242.704780, 155.712300);
	  ctx.lineTo(243.257370, 153.238560);
	  ctx.lineTo(243.342870, 150.836240);
	  ctx.lineTo(243.257370, 148.291090);
	  ctx.lineTo(242.579790, 145.921230);
	  ctx.lineTo(241.316730, 144.362980);
	  ctx.lineTo(240.079980, 143.324140);
	  ctx.lineTo(241.014120, 141.759390);
	  ctx.lineTo(241.862740, 139.571340);
	  ctx.lineTo(241.882440, 137.532620);
	  ctx.lineTo(241.343010, 135.812040);
	  ctx.lineTo(240.362820, 134.519990);
	  ctx.lineTo(239.303690, 133.922660);
	  ctx.lineTo(238.178770, 134.059000);
	  ctx.lineTo(238.132770, 132.202080);
	  ctx.lineTo(237.922260, 130.371130);
	  ctx.lineTo(237.106530, 128.254490);
	  ctx.lineTo(235.896100, 126.813110);
	  ctx.lineTo(234.804070, 125.456120);
	  ctx.lineTo(233.448910, 124.547140);
	  ctx.lineTo(231.889820, 123.806970);
	  ctx.lineTo(229.824190, 123.716070);
	  ctx.lineTo(227.633560, 123.806970);
	  ctx.lineTo(225.877110, 124.378320);
	  ctx.lineTo(224.219340, 125.092530);
	  ctx.lineTo(222.824710, 126.189800);
	  ctx.lineTo(221.022210, 128.020730);
	  ctx.lineTo(220.009130, 129.897140);
	  ctx.lineTo(219.180240, 132.805880);
	  ctx.lineTo(219.022360, 134.786170);
	  ctx.lineTo(219.292080, 136.461300);
	  ctx.lineTo(217.897450, 137.337810);
	  ctx.lineTo(216.772530, 139.324590);
	  ctx.lineTo(216.660700, 141.649000);
	  ctx.lineTo(217.246180, 143.642260);
	  ctx.lineTo(218.009280, 145.200520);
	  ctx.lineTo(216.858050, 146.869160);
	  ctx.lineTo(216.187050, 149.388340);
	  ctx.lineTo(216.016010, 151.888040);
	  ctx.lineTo(216.141000, 154.050130);
	  ctx.lineTo(216.568600, 156.913430);
	  ctx.lineTo(217.772460, 159.685830);
	  ctx.lineTo(219.502590, 162.159560);
	  ctx.lineTo(221.574800, 164.237240);
	  ctx.lineTo(223.548340, 165.366970);
	  ctx.lineTo(225.706070, 166.412310);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-7-8
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(216, 117, 0)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.043433;
	  ctx.moveTo(217.219470, 138.812880);
	  ctx.lineTo(216.099590, 140.485520);
	  ctx.lineTo(216.211580, 142.340410);
	  ctx.lineTo(216.508020, 143.726690);
	  ctx.lineTo(217.087720, 144.963280);
	  ctx.lineTo(217.390750, 145.848410);
	  ctx.lineTo(216.639770, 146.831180);
	  ctx.lineTo(216.132530, 148.607960);
	  ctx.lineTo(215.737280, 150.365220);
	  ctx.lineTo(215.869030, 152.226620);
	  ctx.lineTo(215.658230, 154.348350);
	  ctx.lineTo(215.789980, 156.548170);
	  ctx.lineTo(216.376270, 158.897690);
	  ctx.lineTo(217.430270, 160.967350);
	  ctx.lineTo(218.991520, 162.867790);
	  ctx.lineTo(220.875550, 164.768240);
	  ctx.lineTo(222.904510, 166.362780);
	  ctx.lineTo(225.282610, 167.417140);
	  ctx.lineTo(227.186410, 167.749070);
	  ctx.lineTo(230.289130, 167.664470);
	  ctx.lineTo(232.555240, 167.163320);
	  ctx.lineTo(234.979450, 165.959270);
	  ctx.lineTo(237.094050, 164.735710);
	  ctx.lineTo(238.945140, 162.913360);
	  ctx.lineTo(240.466860, 160.746080);
	  ctx.lineTo(241.705320, 158.533230);
	  ctx.lineTo(242.291610, 156.671840);
	  ctx.lineTo(240.657900, 157.172980);
	  ctx.lineTo(239.136180, 157.459350);
	  ctx.lineTo(237.410250, 157.875880);
	  ctx.lineTo(235.394460, 157.830380);
	  ctx.lineTo(233.240340, 157.693700);
	  ctx.lineTo(231.257500, 157.472420);
	  ctx.lineTo(230.447230, 157.251140);
	  ctx.lineTo(226.231210, 155.259580);
	  ctx.lineTo(224.742430, 154.250780);
	  ctx.lineTo(223.536910, 153.222460);
	  ctx.lineTo(222.542200, 152.037930);
	  ctx.lineTo(221.554070, 150.443380);
	  ctx.lineTo(220.750390, 148.985510);
	  ctx.lineTo(220.124570, 147.397470);
	  ctx.bezierCurveTo(220.124570, 147.397470, 219.215490, 144.709520, 219.353830, 145.184630);
	  ctx.bezierCurveTo(219.492170, 145.659740, 218.635790, 143.193070, 218.635790, 143.193070);
	  ctx.lineTo(218.365700, 142.093150);
	  ctx.lineTo(217.687190, 140.492100);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-5-1
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.045141;
	  ctx.moveTo(226.652610, 181.028180);
	  ctx.lineTo(230.886450, 180.884030);
	  ctx.lineTo(230.469420, 166.586780);
	  ctx.lineTo(230.681470, 163.749610);
	  ctx.lineTo(235.784690, 158.442200);
	  ctx.lineTo(235.954330, 157.963880);
	  ctx.lineTo(235.459560, 157.786970);
	  ctx.lineTo(230.921790, 160.506190);
	  ctx.lineTo(230.639060, 154.759770);
	  ctx.lineTo(230.052400, 147.119720);
	  ctx.lineTo(229.755540, 141.917150);
	  ctx.lineTo(229.204220, 140.862220);
	  ctx.lineTo(229.006310, 141.347090);
	  ctx.lineTo(228.539810, 146.005820);
	  ctx.lineTo(227.946080, 153.763810);
	  ctx.lineTo(226.532450, 151.221500);
	  ctx.lineTo(225.832700, 150.369700);
	  ctx.lineTo(225.274310, 149.897920);
	  ctx.lineTo(224.878500, 150.101050);
	  ctx.lineTo(225.012790, 150.900440);
	  ctx.lineTo(226.073020, 152.590940);
	  ctx.lineTo(226.751560, 154.628730);
	  ctx.lineTo(227.599740, 157.334850);
	  ctx.lineTo(227.550240, 161.076250);
	  ctx.lineTo(227.041340, 166.370550);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path4
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(0, 0, 0)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(46.549685, 194.807370);
	  ctx.lineTo(55.277400, 194.658750);
	  ctx.lineTo(56.340485, 194.324340);
	  ctx.lineTo(57.083903, 193.269090);
	  ctx.lineTo(57.016993, 191.946310);
	  ctx.lineTo(56.355351, 190.749870);
	  ctx.lineTo(54.727267, 190.378300);
	  ctx.lineTo(53.062014, 190.251950);
	  ctx.lineTo(53.039714, 162.971540);
	  ctx.lineTo(52.794387, 161.901430);
	  ctx.lineTo(51.664392, 160.994800);
	  ctx.lineTo(51.723862, 125.777740);
	  ctx.lineTo(53.597274, 124.113120);
	  ctx.lineTo(55.634236, 122.240430);
	  ctx.lineTo(57.574554, 120.679840);
	  ctx.lineTo(60.109606, 119.171280);
	  ctx.lineTo(62.139135, 118.413290);
	  ctx.lineTo(64.168664, 117.848510);
	  ctx.lineTo(66.198192, 117.447220);
	  ctx.lineTo(67.357922, 117.254000);
	  ctx.lineTo(67.833710, 117.818770);
	  ctx.lineTo(68.733245, 117.216840);
	  ctx.lineTo(70.457971, 116.659490);
	  ctx.lineTo(72.740261, 116.451420);
	  ctx.lineTo(74.658276, 116.503420);
	  ctx.lineTo(76.643201, 116.659470);
	  ctx.lineTo(78.308455, 117.060770);
	  ctx.lineTo(79.527660, 117.714720);
	  ctx.lineTo(79.631736, 116.503420);
	  ctx.lineTo(79.326936, 115.797440);
	  ctx.lineTo(78.308455, 115.299540);
	  ctx.lineTo(75.959256, 115.136050);
	  ctx.lineTo(71.149348, 115.180650);
	  ctx.lineTo(69.380016, 115.351570);
	  ctx.lineTo(67.841144, 115.403570);
	  ctx.lineTo(65.157409, 115.708250);
	  ctx.lineTo(63.224524, 116.102120);
	  ctx.lineTo(60.845590, 117.038460);
	  ctx.lineTo(58.488956, 117.967380);
	  ctx.lineTo(56.176929, 119.349610);
	  ctx.lineTo(54.169705, 120.813580);
	  ctx.lineTo(53.062014, 121.660750);
	  ctx.lineTo(51.671824, 123.161880);
	  ctx.lineTo(51.708994, 118.665920);
	  ctx.lineTo(51.441364, 117.506630);
	  ctx.lineTo(50.631038, 117.462030);
	  ctx.lineTo(50.132948, 118.056540);
	  ctx.lineTo(49.954529, 123.109850);
	  ctx.lineTo(50.006569, 160.712370);
	  ctx.lineTo(48.950918, 161.537250);
	  ctx.lineTo(48.646118, 162.964070);
	  ctx.lineTo(48.289278, 190.036400);
	  ctx.lineTo(46.817311, 190.147870);
	  ctx.lineTo(45.709620, 190.705230);
	  ctx.lineTo(44.810087, 191.433490);
	  ctx.lineTo(44.497850, 192.778550);
	  ctx.lineTo(45.122318, 193.878400);
	  ctx.lineTo(45.754225, 194.450610);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path5
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(254, 237, 1)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(67.679521, 117.930490);
	  ctx.lineTo(68.823882, 117.151130);
	  ctx.lineTo(70.249819, 116.696670);
	  ctx.lineTo(71.610271, 116.510890);
	  ctx.lineTo(73.238353, 116.495990);
	  ctx.lineTo(75.215843, 116.577690);
	  ctx.lineTo(76.724979, 116.689150);
	  ctx.lineTo(78.115169, 117.045860);
	  ctx.lineTo(78.990051, 117.389450);
	  ctx.lineTo(79.568593, 117.798770);
	  ctx.lineTo(79.059310, 118.859110);
	  ctx.lineTo(78.360497, 119.416460);
	  ctx.lineTo(77.550172, 120.070410);
	  ctx.lineTo(76.568863, 120.664920);
	  ctx.lineTo(75.557816, 121.170250);
	  ctx.lineTo(74.494049, 121.417190);
	  ctx.lineTo(73.390133, 121.543230);
	  ctx.lineTo(72.425499, 121.543490);
	  ctx.lineTo(71.089879, 121.222270);
	  ctx.lineTo(69.928339, 120.469530);
	  ctx.lineTo(68.790344, 119.412010);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path4-8
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(0, 0, 0)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(250.540910, 195.522930);
	  ctx.lineTo(241.813200, 195.374310);
	  ctx.lineTo(240.750110, 195.039900);
	  ctx.lineTo(240.006700, 193.984650);
	  ctx.lineTo(240.073600, 192.661870);
	  ctx.lineTo(240.735240, 191.465430);
	  ctx.lineTo(242.363320, 191.093860);
	  ctx.lineTo(244.028580, 190.967510);
	  ctx.lineTo(244.050880, 163.687100);
	  ctx.lineTo(244.296200, 162.616990);
	  ctx.lineTo(245.426200, 161.710360);
	  ctx.lineTo(245.366700, 126.493300);
	  ctx.lineTo(243.493290, 124.828680);
	  ctx.lineTo(241.456320, 122.955990);
	  ctx.lineTo(239.516010, 121.395400);
	  ctx.lineTo(236.980960, 119.886840);
	  ctx.lineTo(234.951430, 119.128850);
	  ctx.lineTo(232.921900, 118.564070);
	  ctx.lineTo(230.892370, 118.162780);
	  ctx.lineTo(229.732640, 117.969560);
	  ctx.lineTo(229.256860, 118.534330);
	  ctx.lineTo(228.357320, 117.932400);
	  ctx.lineTo(226.632590, 117.375050);
	  ctx.lineTo(224.350300, 117.166980);
	  ctx.lineTo(222.432290, 117.218980);
	  ctx.lineTo(220.447360, 117.375030);
	  ctx.lineTo(218.782110, 117.776330);
	  ctx.lineTo(217.562900, 118.430280);
	  ctx.lineTo(217.458830, 117.218980);
	  ctx.lineTo(217.763630, 116.513000);
	  ctx.lineTo(218.782110, 116.015100);
	  ctx.lineTo(221.131310, 115.851610);
	  ctx.lineTo(225.941220, 115.896210);
	  ctx.lineTo(227.710550, 116.067130);
	  ctx.lineTo(229.249420, 116.119130);
	  ctx.lineTo(231.933150, 116.423810);
	  ctx.lineTo(233.866040, 116.817680);
	  ctx.lineTo(236.244970, 117.754020);
	  ctx.lineTo(238.601610, 118.682940);
	  ctx.lineTo(240.913630, 120.065170);
	  ctx.lineTo(242.920850, 121.529140);
	  ctx.lineTo(244.028550, 122.376310);
	  ctx.lineTo(245.418740, 123.877440);
	  ctx.lineTo(245.381540, 119.381480);
	  ctx.lineTo(245.649170, 118.222190);
	  ctx.lineTo(246.459490, 118.177590);
	  ctx.lineTo(246.957580, 118.772100);
	  ctx.lineTo(247.136000, 123.825410);
	  ctx.lineTo(247.084000, 161.427930);
	  ctx.lineTo(248.139650, 162.252810);
	  ctx.lineTo(248.444450, 163.679630);
	  ctx.lineTo(248.801290, 190.751960);
	  ctx.lineTo(250.273260, 190.863430);
	  ctx.lineTo(251.380950, 191.420790);
	  ctx.lineTo(252.280480, 192.149050);
	  ctx.lineTo(252.592720, 193.494110);
	  ctx.lineTo(251.968250, 194.593960);
	  ctx.lineTo(251.336340, 195.166170);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path5-9
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(254, 237, 1)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(229.411080, 118.646050);
	  ctx.lineTo(228.266720, 117.866690);
	  ctx.lineTo(226.840790, 117.412230);
	  ctx.lineTo(225.480330, 117.226450);
	  ctx.lineTo(223.852250, 117.211550);
	  ctx.lineTo(221.874760, 117.293250);
	  ctx.lineTo(220.365630, 117.404710);
	  ctx.lineTo(218.975440, 117.761420);
	  ctx.lineTo(218.100550, 118.105010);
	  ctx.lineTo(217.522010, 118.514330);
	  ctx.lineTo(218.031290, 119.574670);
	  ctx.lineTo(218.730110, 120.132020);
	  ctx.lineTo(219.540430, 120.785970);
	  ctx.lineTo(220.521740, 121.380480);
	  ctx.lineTo(221.532790, 121.885810);
	  ctx.lineTo(222.596560, 122.132750);
	  ctx.lineTo(223.700470, 122.258790);
	  ctx.lineTo(224.665110, 122.259050);
	  ctx.lineTo(226.000730, 121.937830);
	  ctx.lineTo(227.162270, 121.185090);
	  ctx.lineTo(228.300260, 120.127570);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path6
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(254, 237, 1)';
	  ctx.strokeStyle = 'rgb(219, 219, 219)';
	  ctx.lineWidth = 0.264583;
	  ctx.moveTo(84.942129, 152.881520);
	  ctx.bezierCurveTo(84.816002, 153.475130, 84.905339, 170.295810, 84.905339, 170.295810);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #g7
	  ctx.save();
	  ctx.transform(1.000050, 0.000000, 0.000000, 0.946117, -28.953300, 7.599830);
	  
  // #path2-7-9
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(144, 188, 93)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(208.491670, 133.581640);
	  ctx.lineTo(209.853790, 133.558540);
	  ctx.lineTo(210.828440, 133.314280);
	  ctx.lineTo(211.719650, 132.868670);
	  ctx.lineTo(212.801570, 132.188720);
	  ctx.lineTo(213.648070, 131.142370);
	  ctx.lineTo(214.396200, 130.211560);
	  ctx.lineTo(214.983350, 129.290620);
	  ctx.lineTo(215.376800, 127.943910);
	  ctx.lineTo(215.627180, 126.686320);
	  ctx.lineTo(215.665980, 125.465010);
	  ctx.lineTo(215.627180, 124.171100);
	  ctx.lineTo(215.320180, 122.966330);
	  ctx.lineTo(214.747900, 122.174130);
	  ctx.lineTo(214.187570, 121.646000);
	  ctx.lineTo(214.610800, 120.850510);
	  ctx.lineTo(214.995290, 119.738160);
	  ctx.lineTo(215.004290, 118.701700);
	  ctx.lineTo(214.759870, 117.827000);
	  ctx.lineTo(214.315780, 117.170130);
	  ctx.lineTo(213.835890, 116.866450);
	  ctx.lineTo(213.326240, 116.935650);
	  ctx.lineTo(213.305440, 115.991620);
	  ctx.lineTo(213.210040, 115.060790);
	  ctx.lineTo(212.840460, 113.984750);
	  ctx.lineTo(212.292020, 113.251970);
	  ctx.lineTo(211.797250, 112.562100);
	  ctx.lineTo(211.183260, 112.099980);
	  ctx.lineTo(210.476860, 111.723700);
	  ctx.lineTo(209.540970, 111.677500);
	  ctx.lineTo(208.548430, 111.723700);
	  ctx.lineTo(207.752630, 112.014170);
	  ctx.lineTo(207.001530, 112.377250);
	  ctx.lineTo(206.369640, 112.935080);
	  ctx.lineTo(205.552940, 113.865890);
	  ctx.lineTo(205.093960, 114.819820);
	  ctx.lineTo(204.718380, 116.298560);
	  ctx.lineTo(204.646980, 117.305320);
	  ctx.lineTo(204.769250, 118.156910);
	  ctx.lineTo(204.137340, 118.602530);
	  ctx.lineTo(203.627660, 119.612580);
	  ctx.lineTo(203.577060, 120.794250);
	  ctx.lineTo(203.842330, 121.807600);
	  ctx.lineTo(204.188100, 122.599770);
	  ctx.lineTo(203.666490, 123.448080);
	  ctx.lineTo(203.362460, 124.728800);
	  ctx.lineTo(203.285060, 125.999590);
	  ctx.lineTo(203.341760, 127.098750);
	  ctx.lineTo(203.535480, 128.554420);
	  ctx.lineTo(204.080930, 129.963840);
	  ctx.lineTo(204.864830, 131.221430);
	  ctx.lineTo(205.803700, 132.277670);
	  ctx.lineTo(206.697870, 132.852030);
	  ctx.lineTo(207.675500, 133.383470);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-9-5
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(120, 156, 69)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(204.073880, 118.893150);
	  ctx.lineTo(203.567200, 119.741440);
	  ctx.lineTo(203.617900, 120.682160);
	  ctx.lineTo(203.752040, 121.385220);
	  ctx.lineTo(204.014330, 122.012380);
	  ctx.lineTo(204.151440, 122.461290);
	  ctx.lineTo(203.811650, 122.959710);
	  ctx.lineTo(203.582140, 123.860820);
	  ctx.lineTo(203.403310, 124.752040);
	  ctx.lineTo(203.462910, 125.696060);
	  ctx.lineTo(203.367510, 126.772120);
	  ctx.lineTo(203.427110, 127.887770);
	  ctx.lineTo(203.692360, 129.079380);
	  ctx.lineTo(204.169260, 130.129020);
	  ctx.lineTo(204.875650, 131.092840);
	  ctx.lineTo(205.728110, 132.056700);
	  ctx.lineTo(206.646130, 132.865370);
	  ctx.lineTo(207.722100, 133.400100);
	  ctx.lineTo(208.583500, 133.568440);
	  ctx.lineTo(209.987350, 133.525440);
	  ctx.lineTo(211.012660, 133.271270);
	  ctx.lineTo(212.109520, 132.660630);
	  ctx.lineTo(213.066270, 132.040080);
	  ctx.lineTo(213.903820, 131.115850);
	  ctx.lineTo(214.592330, 130.016710);
	  ctx.lineTo(215.152700, 128.894430);
	  ctx.lineTo(215.417950, 127.950410);
	  ctx.lineTo(214.678760, 128.204560);
	  ctx.lineTo(213.990260, 128.349790);
	  ctx.lineTo(213.209340, 128.561050);
	  ctx.lineTo(212.297280, 128.537950);
	  ctx.lineTo(211.322650, 128.468750);
	  ctx.lineTo(210.425480, 128.356530);
	  ctx.lineTo(210.058870, 128.244310);
	  ctx.lineTo(208.151300, 127.234270);
	  ctx.lineTo(207.477680, 126.722630);
	  ctx.lineTo(206.932250, 126.201120);
	  ctx.lineTo(206.482190, 125.600380);
	  ctx.lineTo(206.035100, 124.791670);
	  ctx.lineTo(205.671480, 124.052280);
	  ctx.lineTo(205.388320, 123.246910);
	  ctx.bezierCurveTo(205.388320, 123.246910, 204.976990, 121.883680, 205.039580, 122.124640);
	  ctx.bezierCurveTo(205.102080, 122.365600, 204.714690, 121.114590, 204.714690, 121.114590);
	  ctx.lineTo(204.592430, 120.556760);
	  ctx.lineTo(204.285430, 119.744770);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-0-7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(208.232360, 141.018330);
	  ctx.lineTo(210.017720, 140.945630);
	  ctx.lineTo(209.841880, 133.743310);
	  ctx.lineTo(209.931380, 132.314050);
	  ctx.lineTo(212.083370, 129.640420);
	  ctx.lineTo(212.154770, 129.399460);
	  ctx.lineTo(211.946130, 129.310360);
	  ctx.lineTo(210.032610, 130.680200);
	  ctx.lineTo(209.913490, 127.785390);
	  ctx.lineTo(209.666100, 123.936660);
	  ctx.lineTo(209.540830, 121.315840);
	  ctx.lineTo(209.308350, 120.784430);
	  ctx.lineTo(209.224850, 121.028690);
	  ctx.lineTo(209.028140, 123.375530);
	  ctx.lineTo(208.777770, 127.283690);
	  ctx.lineTo(208.181640, 126.002960);
	  ctx.lineTo(207.886570, 125.573880);
	  ctx.lineTo(207.651090, 125.336210);
	  ctx.lineTo(207.484190, 125.438560);
	  ctx.lineTo(207.540790, 125.841230);
	  ctx.lineTo(207.987860, 126.692840);
	  ctx.lineTo(208.274000, 127.719380);
	  ctx.lineTo(208.631670, 129.082630);
	  ctx.lineTo(208.610870, 130.967370);
	  ctx.lineTo(208.396250, 133.634410);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path2-2-6-2
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(144, 188, 93)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.011212;
	  ctx.moveTo(182.424890, 115.791670);
	  ctx.lineTo(183.134760, 115.778570);
	  ctx.lineTo(183.642680, 115.642390);
	  ctx.lineTo(184.107120, 115.394090);
	  ctx.lineTo(184.670970, 115.015150);
	  ctx.lineTo(185.112110, 114.432060);
	  ctx.lineTo(185.502010, 113.913370);
	  ctx.lineTo(185.808000, 113.400170);
	  ctx.lineTo(186.013030, 112.649710);
	  ctx.lineTo(186.143540, 111.948900);
	  ctx.lineTo(186.163540, 111.268300);
	  ctx.lineTo(186.143540, 110.547250);
	  ctx.lineTo(185.983570, 109.875880);
	  ctx.lineTo(185.685340, 109.434430);
	  ctx.lineTo(185.393310, 109.140130);
	  ctx.lineTo(185.613890, 108.696830);
	  ctx.lineTo(185.814250, 108.076950);
	  ctx.lineTo(185.819250, 107.499390);
	  ctx.lineTo(185.691880, 107.011950);
	  ctx.lineTo(185.460450, 106.645910);
	  ctx.lineTo(185.210370, 106.476680);
	  ctx.lineTo(184.944750, 106.515280);
	  ctx.lineTo(184.934250, 105.989210);
	  ctx.lineTo(184.884550, 105.470500);
	  ctx.lineTo(184.691950, 104.870860);
	  ctx.lineTo(184.406140, 104.462510);
	  ctx.lineTo(184.148290, 104.078070);
	  ctx.lineTo(183.828310, 103.820560);
	  ctx.lineTo(183.460180, 103.610860);
	  ctx.lineTo(182.972450, 103.585160);
	  ctx.lineTo(182.455190, 103.610860);
	  ctx.lineTo(182.040450, 103.772730);
	  ctx.lineTo(181.649010, 103.975070);
	  ctx.lineTo(181.319720, 104.285920);
	  ctx.lineTo(180.894130, 104.804630);
	  ctx.lineTo(180.654910, 105.336210);
	  ctx.lineTo(180.459190, 106.160270);
	  ctx.lineTo(180.421790, 106.721290);
	  ctx.lineTo(180.485490, 107.195850);
	  ctx.lineTo(180.156200, 107.444160);
	  ctx.lineTo(179.890580, 108.007030);
	  ctx.lineTo(179.864080, 108.665540);
	  ctx.lineTo(180.002330, 109.230210);
	  ctx.lineTo(180.182510, 109.671670);
	  ctx.lineTo(179.910680, 110.144400);
	  ctx.lineTo(179.752250, 110.858080);
	  ctx.lineTo(179.711850, 111.566250);
	  ctx.lineTo(179.741350, 112.178790);
	  ctx.lineTo(179.842380, 112.989950);
	  ctx.lineTo(180.126640, 113.775390);
	  ctx.lineTo(180.535140, 114.476170);
	  ctx.lineTo(181.024440, 115.064800);
	  ctx.lineTo(181.490440, 115.384850);
	  ctx.lineTo(181.999930, 115.681000);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-0-1-3
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(120, 156, 69)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.011364;
	  ctx.moveTo(180.088100, 107.489440);
	  ctx.lineTo(179.823780, 107.974560);
	  ctx.lineTo(179.850280, 108.512560);
	  ctx.lineTo(179.920280, 108.914630);
	  ctx.lineTo(180.057110, 109.273300);
	  ctx.lineTo(180.128710, 109.530010);
	  ctx.lineTo(179.951440, 109.815080);
	  ctx.lineTo(179.831800, 110.330400);
	  ctx.lineTo(179.738500, 110.840080);
	  ctx.lineTo(179.769600, 111.379950);
	  ctx.lineTo(179.719800, 111.995350);
	  ctx.lineTo(179.750900, 112.633370);
	  ctx.lineTo(179.889280, 113.314850);
	  ctx.lineTo(180.138070, 113.915120);
	  ctx.lineTo(180.506580, 114.466330);
	  ctx.lineTo(180.951270, 115.017540);
	  ctx.lineTo(181.430170, 115.480010);
	  ctx.lineTo(181.991500, 115.785840);
	  ctx.lineTo(182.440850, 115.882140);
	  ctx.lineTo(183.173210, 115.857640);
	  ctx.lineTo(183.708090, 115.712260);
	  ctx.lineTo(184.280290, 115.363060);
	  ctx.lineTo(184.779410, 115.008170);
	  ctx.lineTo(185.216340, 114.479620);
	  ctx.lineTo(185.575510, 113.851010);
	  ctx.lineTo(185.867840, 113.209200);
	  ctx.lineTo(186.006220, 112.669310);
	  ctx.lineTo(185.620620, 112.814670);
	  ctx.lineTo(185.261430, 112.897870);
	  ctx.lineTo(184.854040, 113.018650);
	  ctx.lineTo(184.378250, 113.005550);
	  ctx.lineTo(183.869800, 112.965950);
	  ctx.lineTo(183.401780, 112.901750);
	  ctx.lineTo(183.210520, 112.837450);
	  ctx.lineTo(182.215390, 112.259820);
	  ctx.lineTo(181.863980, 111.967220);
	  ctx.lineTo(181.579440, 111.668960);
	  ctx.lineTo(181.344650, 111.325400);
	  ctx.lineTo(181.111430, 110.862910);
	  ctx.lineTo(180.921720, 110.440090);
	  ctx.lineTo(180.774010, 109.979490);
	  ctx.bezierCurveTo(180.774010, 109.979490, 180.559440, 109.199880, 180.592100, 109.337660);
	  ctx.bezierCurveTo(180.624700, 109.475580, 180.422630, 108.760030, 180.422630, 108.760030);
	  ctx.lineTo(180.358630, 108.441010);
	  ctx.lineTo(180.198500, 107.976640);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-8-9-7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.010985;
	  ctx.moveTo(182.241230, 119.758870);
	  ctx.lineTo(183.142380, 119.718770);
	  ctx.lineTo(183.053580, 115.740890);
	  ctx.lineTo(183.098780, 114.951500);
	  ctx.lineTo(184.184970, 113.474820);
	  ctx.lineTo(184.221170, 113.341840);
	  ctx.lineTo(184.115940, 113.292740);
	  ctx.lineTo(183.150120, 114.049300);
	  ctx.lineTo(183.089820, 112.450480);
	  ctx.lineTo(182.964940, 110.324810);
	  ctx.lineTo(182.901940, 108.877320);
	  ctx.lineTo(182.784530, 108.583790);
	  ctx.lineTo(182.742230, 108.718660);
	  ctx.lineTo(182.642930, 110.014830);
	  ctx.lineTo(182.516610, 112.173330);
	  ctx.lineTo(182.215730, 111.465980);
	  ctx.lineTo(182.066800, 111.228990);
	  ctx.lineTo(181.947810, 111.097600);
	  ctx.lineTo(181.863510, 111.154100);
	  ctx.lineTo(181.892110, 111.376500);
	  ctx.lineTo(182.117760, 111.846850);
	  ctx.lineTo(182.262180, 112.413800);
	  ctx.lineTo(182.442730, 113.166730);
	  ctx.lineTo(182.432230, 114.207690);
	  ctx.lineTo(182.323860, 115.680700);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path2-1-3-0
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 146, 17)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.017045;
	  ctx.moveTo(194.156290, 124.233790);
	  ctx.lineTo(195.279290, 124.214890);
	  ctx.lineTo(196.082850, 124.016040);
	  ctx.lineTo(196.817610, 123.653310);
	  ctx.lineTo(197.709640, 123.099810);
	  ctx.lineTo(198.407550, 122.248040);
	  ctx.lineTo(199.024350, 121.490320);
	  ctx.lineTo(199.508450, 120.740680);
	  ctx.lineTo(199.832800, 119.644390);
	  ctx.lineTo(200.039230, 118.620650);
	  ctx.lineTo(200.071230, 117.626500);
	  ctx.lineTo(200.039230, 116.573220);
	  ctx.lineTo(199.786130, 115.592490);
	  ctx.lineTo(199.314310, 114.947610);
	  ctx.lineTo(198.852320, 114.517710);
	  ctx.lineTo(199.201260, 113.870140);
	  ctx.lineTo(199.518250, 112.964650);
	  ctx.lineTo(199.526250, 112.120950);
	  ctx.lineTo(199.324750, 111.408900);
	  ctx.lineTo(198.958610, 110.874210);
	  ctx.lineTo(198.562960, 110.627020);
	  ctx.lineTo(198.142740, 110.683320);
	  ctx.lineTo(198.125540, 109.914870);
	  ctx.lineTo(198.046940, 109.157130);
	  ctx.lineTo(197.742240, 108.281190);
	  ctx.lineTo(197.290070, 107.684700);
	  ctx.lineTo(196.882160, 107.123120);
	  ctx.lineTo(196.375930, 106.746960);
	  ctx.lineTo(195.793540, 106.440640);
	  ctx.lineTo(195.021930, 106.402940);
	  ctx.lineTo(194.203620, 106.440640);
	  ctx.lineTo(193.547500, 106.677090);
	  ctx.lineTo(192.928250, 106.972650);
	  ctx.lineTo(192.407270, 107.426740);
	  ctx.lineTo(191.733950, 108.184430);
	  ctx.lineTo(191.355530, 108.960970);
	  ctx.lineTo(191.045890, 110.164710);
	  ctx.lineTo(190.986790, 110.984250);
	  ctx.lineTo(191.087560, 111.677470);
	  ctx.lineTo(190.566600, 112.040220);
	  ctx.lineTo(190.146380, 112.862410);
	  ctx.lineTo(190.104580, 113.824350);
	  ctx.lineTo(190.323290, 114.649220);
	  ctx.lineTo(190.608340, 115.294110);
	  ctx.lineTo(190.178310, 115.984650);
	  ctx.lineTo(189.927640, 117.027180);
	  ctx.lineTo(189.863840, 118.061660);
	  ctx.lineTo(189.910640, 118.956400);
	  ctx.lineTo(190.070370, 120.141370);
	  ctx.lineTo(190.520080, 121.288670);
	  ctx.lineTo(191.166370, 122.312410);
	  ctx.lineTo(191.940440, 123.172230);
	  ctx.lineTo(192.677660, 123.639750);
	  ctx.lineTo(193.483670, 124.072360);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-7-8-9
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(216, 117, 0)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.017077;
	  ctx.moveTo(190.312810, 112.650880);
	  ctx.lineTo(189.894480, 113.343090);
	  ctx.lineTo(189.936280, 114.110730);
	  ctx.lineTo(190.047010, 114.684430);
	  ctx.lineTo(190.263570, 115.196170);
	  ctx.lineTo(190.376790, 115.562460);
	  ctx.lineTo(190.096250, 115.969160);
	  ctx.lineTo(189.906780, 116.704480);
	  ctx.lineTo(189.759140, 117.431690);
	  ctx.lineTo(189.808240, 118.202030);
	  ctx.lineTo(189.729440, 119.080060);
	  ctx.lineTo(189.778540, 119.990430);
	  ctx.lineTo(189.997540, 120.962750);
	  ctx.lineTo(190.391260, 121.819270);
	  ctx.lineTo(190.974470, 122.605730);
	  ctx.lineTo(191.678250, 123.392220);
	  ctx.lineTo(192.436170, 124.052110);
	  ctx.lineTo(193.324510, 124.488430);
	  ctx.lineTo(194.035650, 124.625910);
	  ctx.lineTo(195.194680, 124.590910);
	  ctx.lineTo(196.041190, 124.383520);
	  ctx.lineTo(196.946750, 123.885220);
	  ctx.lineTo(197.736650, 123.378870);
	  ctx.lineTo(198.428120, 122.624710);
	  ctx.lineTo(198.996550, 121.727810);
	  ctx.lineTo(199.459180, 120.812050);
	  ctx.lineTo(199.678190, 120.041730);
	  ctx.lineTo(199.067920, 120.249120);
	  ctx.lineTo(198.499490, 120.367590);
	  ctx.lineTo(197.854770, 120.539970);
	  ctx.lineTo(197.101770, 120.521070);
	  ctx.lineTo(196.297100, 120.464470);
	  ctx.lineTo(195.556430, 120.372970);
	  ctx.lineTo(195.253740, 120.281370);
	  ctx.lineTo(193.678850, 119.457170);
	  ctx.lineTo(193.122720, 119.039690);
	  ctx.lineTo(192.672390, 118.614130);
	  ctx.lineTo(192.300820, 118.123930);
	  ctx.lineTo(191.931710, 117.464040);
	  ctx.lineTo(191.631500, 116.860730);
	  ctx.lineTo(191.397720, 116.203520);
	  ctx.bezierCurveTo(191.397720, 116.203520, 191.058140, 115.091140, 191.109830, 115.287760);
	  ctx.bezierCurveTo(191.161330, 115.484400, 190.841600, 114.463600, 190.841600, 114.463600);
	  ctx.lineTo(190.740700, 114.008400);
	  ctx.lineTo(190.487240, 113.345810);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-5-1-3
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.017749;
	  ctx.moveTo(193.836550, 130.121220);
	  ctx.lineTo(195.418090, 130.061720);
	  ctx.lineTo(195.262310, 124.144980);
	  ctx.lineTo(195.341610, 122.970850);
	  ctx.lineTo(197.247930, 120.774420);
	  ctx.lineTo(197.311330, 120.576490);
	  ctx.lineTo(197.126510, 120.503490);
	  ctx.lineTo(195.431430, 121.628810);
	  ctx.lineTo(195.325810, 119.250720);
	  ctx.lineTo(195.106660, 116.088990);
	  ctx.lineTo(194.995800, 113.935950);
	  ctx.lineTo(194.789840, 113.499380);
	  ctx.lineTo(194.715940, 113.700050);
	  ctx.lineTo(194.541670, 115.627980);
	  ctx.lineTo(194.319890, 118.838560);
	  ctx.lineTo(193.791840, 117.786450);
	  ctx.lineTo(193.530430, 117.433940);
	  ctx.lineTo(193.321850, 117.238710);
	  ctx.lineTo(193.173990, 117.322810);
	  ctx.lineTo(193.224190, 117.653640);
	  ctx.lineTo(193.620250, 118.353230);
	  ctx.lineTo(193.873710, 119.196540);
	  ctx.lineTo(194.190530, 120.316450);
	  ctx.lineTo(194.172030, 121.864780);
	  ctx.lineTo(193.981940, 124.055770);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path4-8-4
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(0, 0, 0)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(202.759990, 136.119680);
	  ctx.lineTo(199.499750, 136.058280);
	  ctx.lineTo(199.102640, 135.919790);
	  ctx.lineTo(198.824960, 135.483100);
	  ctx.lineTo(198.849860, 134.935660);
	  ctx.lineTo(199.097030, 134.440530);
	  ctx.lineTo(199.705200, 134.286780);
	  ctx.lineTo(200.327240, 134.234380);
	  ctx.lineTo(200.336240, 122.944690);
	  ctx.lineTo(200.427840, 122.501840);
	  ctx.lineTo(200.849950, 122.126620);
	  ctx.lineTo(200.827650, 107.552480);
	  ctx.lineTo(200.127840, 106.863570);
	  ctx.lineTo(199.366960, 106.088600);
	  ctx.lineTo(198.642130, 105.442760);
	  ctx.lineTo(197.695180, 104.818470);
	  ctx.lineTo(196.937050, 104.504780);
	  ctx.lineTo(196.178920, 104.271060);
	  ctx.lineTo(195.420800, 104.105000);
	  ctx.lineTo(194.987590, 104.025000);
	  ctx.lineTo(194.809860, 104.258710);
	  ctx.lineTo(194.473820, 104.009610);
	  ctx.lineTo(193.829560, 103.778970);
	  ctx.lineTo(192.977020, 103.692870);
	  ctx.lineTo(192.260550, 103.714370);
	  ctx.lineTo(191.519070, 103.778970);
	  ctx.lineTo(190.897020, 103.945030);
	  ctx.lineTo(190.441600, 104.215670);
	  ctx.lineTo(190.402800, 103.714380);
	  ctx.lineTo(190.516680, 103.422220);
	  ctx.lineTo(190.897120, 103.216160);
	  ctx.lineTo(191.774660, 103.148660);
	  ctx.lineTo(193.571400, 103.167060);
	  ctx.lineTo(194.232310, 103.237760);
	  ctx.lineTo(194.807160, 103.259260);
	  ctx.lineTo(195.809680, 103.385270);
	  ctx.lineTo(196.531700, 103.548280);
	  ctx.lineTo(197.420350, 103.935760);
	  ctx.lineTo(198.300670, 104.320180);
	  ctx.lineTo(199.164320, 104.892200);
	  ctx.lineTo(199.914110, 105.498040);
	  ctx.lineTo(200.327890, 105.848650);
	  ctx.lineTo(200.847210, 106.469870);
	  ctx.lineTo(200.833310, 104.609270);
	  ctx.lineTo(200.933310, 104.129530);
	  ctx.lineTo(201.236000, 104.111130);
	  ctx.lineTo(201.422050, 104.357160);
	  ctx.lineTo(201.488750, 106.448410);
	  ctx.lineTo(201.469350, 122.009780);
	  ctx.lineTo(201.863680, 122.351120);
	  ctx.lineTo(201.977550, 122.941610);
	  ctx.lineTo(202.110860, 134.145180);
	  ctx.lineTo(202.660710, 134.191180);
	  ctx.lineTo(203.074490, 134.421840);
	  ctx.lineTo(203.410500, 134.723210);
	  ctx.lineTo(203.527120, 135.279850);
	  ctx.lineTo(203.293860, 135.735000);
	  ctx.lineTo(203.057810, 135.971810);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path5-9-7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(254, 237, 1)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(194.866970, 104.305100);
	  ctx.lineTo(194.439490, 103.982550);
	  ctx.lineTo(193.906840, 103.794490);
	  ctx.lineTo(193.398620, 103.717590);
	  ctx.lineTo(192.790480, 103.711590);
	  ctx.lineTo(192.051770, 103.745390);
	  ctx.lineTo(191.488050, 103.791390);
	  ctx.lineTo(190.968750, 103.939000);
	  ctx.lineTo(190.641930, 104.081130);
	  ctx.lineTo(190.425820, 104.250520);
	  ctx.lineTo(190.616080, 104.689340);
	  ctx.lineTo(190.877100, 104.919990);
	  ctx.lineTo(191.179800, 105.190610);
	  ctx.lineTo(191.546360, 105.436640);
	  ctx.lineTo(191.924050, 105.645760);
	  ctx.lineTo(192.321420, 105.747820);
	  ctx.lineTo(192.733790, 105.799920);
	  ctx.lineTo(193.094130, 105.800010);
	  ctx.lineTo(193.593040, 105.667180);
	  ctx.lineTo(194.026930, 105.355650);
	  ctx.lineTo(194.452020, 104.918030);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  ctx.restore();
	  
  // #g8
	  ctx.save();
	  ctx.transform(0.971722, 0.000000, 0.000000, 0.946647, 3.210910, 7.528790);
	  
  // #path7-7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 255, 255)';
	  ctx.strokeStyle = 'rgb(210, 36, 38)';
	  ctx.lineWidth = 0.156042;
	  ctx.moveTo(140.940250, 111.565052);
	  ctx.bezierCurveTo(142.556209, 111.565052, 143.866203, 113.096569, 143.866203, 114.985790);
	  ctx.bezierCurveTo(143.866203, 116.875011, 142.556209, 118.406527, 140.940250, 118.406527);
	  ctx.bezierCurveTo(139.324291, 118.406527, 138.014297, 116.875011, 138.014297, 114.985790);
	  ctx.bezierCurveTo(138.014297, 113.096569, 139.324291, 111.565052, 140.940250, 111.565052);
	  ctx.fill();
	  ctx.stroke();
	  
  // #text7-4
	  ctx.save();
	  ctx.transform(0.300076, 0.000000, 0.000000, 0.300076, 95.50000, 83.000000);
	
	  ctx.fillStyle = 'rgb(0, 0, 0)';
	  ctx.strokeStyle = 'rgb(38, 38, 38)';
	  ctx.lineWidth = 0.004028;
	  ctx.font = "3.88372px";
	  ctx.fillText("80", 146.171250, 110.651590);
	  ctx.restore();
	  
  // #path2-1-7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 146, 17)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.017045;
	  ctx.moveTo(133.632090, 124.504350);
	  ctx.lineTo(134.755110, 124.485450);
	  ctx.lineTo(135.558670, 124.286620);
	  ctx.lineTo(136.293420, 123.923890);
	  ctx.lineTo(137.185460, 123.370380);
	  ctx.lineTo(137.883350, 122.518610);
	  ctx.lineTo(138.500150, 121.760890);
	  ctx.lineTo(138.984250, 121.011240);
	  ctx.lineTo(139.308630, 119.914970);
	  ctx.lineTo(139.515030, 118.891240);
	  ctx.lineTo(139.547030, 117.897080);
	  ctx.lineTo(139.515030, 116.843790);
	  ctx.lineTo(139.261940, 115.863070);
	  ctx.lineTo(138.790120, 115.218190);
	  ctx.lineTo(138.328130, 114.788280);
	  ctx.lineTo(138.677080, 114.140720);
	  ctx.lineTo(138.994080, 113.235220);
	  ctx.lineTo(139.002080, 112.391510);
	  ctx.lineTo(138.800580, 111.679480);
	  ctx.lineTo(138.434430, 111.144780);
	  ctx.lineTo(138.038800, 110.897600);
	  ctx.lineTo(137.618580, 110.954100);
	  ctx.lineTo(137.601380, 110.185630);
	  ctx.lineTo(137.522780, 109.427910);
	  ctx.lineTo(137.218060, 108.551960);
	  ctx.lineTo(136.765900, 107.955470);
	  ctx.lineTo(136.357970, 107.393900);
	  ctx.lineTo(135.851760, 107.017730);
	  ctx.lineTo(135.269370, 106.711420);
	  ctx.lineTo(134.497750, 106.673720);
	  ctx.lineTo(133.679450, 106.711420);
	  ctx.lineTo(133.023340, 106.947850);
	  ctx.lineTo(132.404070, 107.243430);
	  ctx.lineTo(131.883100, 107.697520);
	  ctx.lineTo(131.209790, 108.455210);
	  ctx.lineTo(130.831340, 109.231740);
	  ctx.lineTo(130.521720, 110.435510);
	  ctx.lineTo(130.462720, 111.255020);
	  ctx.lineTo(130.563490, 111.948240);
	  ctx.lineTo(130.042510, 112.310990);
	  ctx.lineTo(129.622320, 113.133200);
	  ctx.lineTo(129.580520, 114.095120);
	  ctx.lineTo(129.799220, 114.920030);
	  ctx.lineTo(130.084280, 115.564880);
	  ctx.lineTo(129.654240, 116.255430);
	  ctx.lineTo(129.403570, 117.297960);
	  ctx.lineTo(129.339770, 118.332430);
	  ctx.lineTo(129.386570, 119.227210);
	  ctx.lineTo(129.546290, 120.412140);
	  ctx.lineTo(129.995990, 121.559450);
	  ctx.lineTo(130.642270, 122.583170);
	  ctx.lineTo(131.416350, 123.443000);
	  ctx.lineTo(132.153570, 123.910530);
	  ctx.lineTo(132.959600, 124.343110);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path2-3
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(144, 188, 93)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(118.809410, 133.644460);
	  ctx.lineTo(120.171540, 133.621360);
	  ctx.lineTo(121.146180, 133.377100);
	  ctx.lineTo(122.037390, 132.931490);
	  ctx.lineTo(123.119340, 132.251530);
	  ctx.lineTo(123.965810, 131.205180);
	  ctx.lineTo(124.713930, 130.274350);
	  ctx.lineTo(125.301100, 129.353420);
	  ctx.lineTo(125.694540, 128.006690);
	  ctx.lineTo(125.944920, 126.749110);
	  ctx.lineTo(125.983720, 125.527800);
	  ctx.lineTo(125.944920, 124.233920);
	  ctx.lineTo(125.637910, 123.029120);
	  ctx.lineTo(125.065630, 122.236930);
	  ctx.lineTo(124.505300, 121.708780);
	  ctx.lineTo(124.928540, 120.913300);
	  ctx.lineTo(125.313040, 119.800950);
	  ctx.lineTo(125.322040, 118.764500);
	  ctx.lineTo(125.077650, 117.889780);
	  ctx.lineTo(124.633540, 117.232940);
	  ctx.lineTo(124.153670, 116.929270);
	  ctx.lineTo(123.643990, 116.998470);
	  ctx.lineTo(123.623190, 116.054440);
	  ctx.lineTo(123.527790, 115.123620);
	  ctx.lineTo(123.158190, 114.047560);
	  ctx.lineTo(122.609760, 113.314790);
	  ctx.lineTo(122.114990, 112.624920);
	  ctx.lineTo(121.501000, 112.162820);
	  ctx.lineTo(120.794600, 111.786540);
	  ctx.lineTo(119.858700, 111.740340);
	  ctx.lineTo(118.866190, 111.786540);
	  ctx.lineTo(118.070370, 112.077010);
	  ctx.lineTo(117.319250, 112.440070);
	  ctx.lineTo(116.687370, 112.997920);
	  ctx.lineTo(115.870700, 113.928720);
	  ctx.lineTo(115.411690, 114.882650);
	  ctx.lineTo(115.036120, 116.361410);
	  ctx.lineTo(114.964520, 117.368160);
	  ctx.lineTo(115.086780, 118.219750);
	  ctx.lineTo(114.454890, 118.665370);
	  ctx.lineTo(113.945210, 119.675400);
	  ctx.lineTo(113.894510, 120.857080);
	  ctx.lineTo(114.159790, 121.870420);
	  ctx.lineTo(114.505540, 122.662610);
	  ctx.lineTo(113.983950, 123.510920);
	  ctx.lineTo(113.679920, 124.791620);
	  ctx.lineTo(113.602520, 126.062410);
	  ctx.lineTo(113.659220, 127.161590);
	  ctx.lineTo(113.852960, 128.617230);
	  ctx.lineTo(114.398400, 130.026680);
	  ctx.lineTo(115.182290, 131.284260);
	  ctx.lineTo(116.121160, 132.340530);
	  ctx.lineTo(117.015350, 132.914870);
	  ctx.lineTo(117.992970, 133.446290);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path2-2-5
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(144, 188, 93)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.011212;
	  ctx.moveTo(145.895900, 115.824150);
	  ctx.lineTo(146.605780, 115.811050);
	  ctx.lineTo(147.113710, 115.674880);
	  ctx.lineTo(147.578140, 115.426540);
	  ctx.lineTo(148.141980, 115.047640);
	  ctx.lineTo(148.583130, 114.464540);
	  ctx.lineTo(148.973000, 113.945840);
	  ctx.lineTo(149.279020, 113.432650);
	  ctx.lineTo(149.484040, 112.682170);
	  ctx.lineTo(149.614550, 111.981350);
	  ctx.lineTo(149.634550, 111.300790);
	  ctx.lineTo(149.614550, 110.579740);
	  ctx.lineTo(149.454560, 109.908350);
	  ctx.lineTo(149.156320, 109.466900);
	  ctx.lineTo(148.864300, 109.172610);
	  ctx.lineTo(149.084870, 108.729300);
	  ctx.lineTo(149.285260, 108.109420);
	  ctx.lineTo(149.290260, 107.531860);
	  ctx.lineTo(149.162890, 107.044410);
	  ctx.lineTo(148.931430, 106.678390);
	  ctx.lineTo(148.681370, 106.509150);
	  ctx.lineTo(148.415740, 106.547750);
	  ctx.lineTo(148.405240, 106.021660);
	  ctx.lineTo(148.355540, 105.502970);
	  ctx.lineTo(148.162920, 104.903330);
	  ctx.lineTo(147.877120, 104.494980);
	  ctx.lineTo(147.619270, 104.110530);
	  ctx.lineTo(147.299280, 103.853020);
	  ctx.lineTo(146.931150, 103.643340);
	  ctx.lineTo(146.443430, 103.617640);
	  ctx.lineTo(145.926160, 103.643340);
	  ctx.lineTo(145.511440, 103.805200);
	  ctx.lineTo(145.120000, 104.007530);
	  ctx.lineTo(144.790720, 104.318410);
	  ctx.lineTo(144.365100, 104.837100);
	  ctx.lineTo(144.125880, 105.368680);
	  ctx.lineTo(143.930170, 106.192720);
	  ctx.lineTo(143.892870, 106.753760);
	  ctx.lineTo(143.956570, 107.228320);
	  ctx.lineTo(143.627270, 107.476630);
	  ctx.lineTo(143.361650, 108.039500);
	  ctx.lineTo(143.335150, 108.698000);
	  ctx.lineTo(143.473400, 109.262680);
	  ctx.lineTo(143.653560, 109.704140);
	  ctx.lineTo(143.381750, 110.176870);
	  ctx.lineTo(143.223320, 110.890560);
	  ctx.lineTo(143.182920, 111.598730);
	  ctx.lineTo(143.212420, 112.211230);
	  ctx.lineTo(143.313450, 113.022420);
	  ctx.lineTo(143.597690, 113.807830);
	  ctx.lineTo(144.006230, 114.508640);
	  ctx.lineTo(144.495510, 115.097270);
	  ctx.lineTo(144.961500, 115.417300);
	  ctx.lineTo(145.470990, 115.713460);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-8
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(120, 156, 69)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(114.391650, 118.955940);
	  ctx.lineTo(113.884940, 119.804250);
	  ctx.lineTo(113.935340, 120.744960);
	  ctx.lineTo(114.069470, 121.448040);
	  ctx.lineTo(114.331760, 122.075180);
	  ctx.lineTo(114.468840, 122.524100);
	  ctx.lineTo(114.129080, 123.022520);
	  ctx.lineTo(113.899580, 123.923630);
	  ctx.lineTo(113.720720, 124.814840);
	  ctx.lineTo(113.780320, 125.758860);
	  ctx.lineTo(113.684920, 126.834940);
	  ctx.lineTo(113.744520, 127.950590);
	  ctx.lineTo(114.009780, 129.142180);
	  ctx.lineTo(114.486680, 130.191820);
	  ctx.lineTo(115.193070, 131.155660);
	  ctx.lineTo(116.045510, 132.119500);
	  ctx.lineTo(116.963550, 132.928200);
	  ctx.lineTo(118.039520, 133.462920);
	  ctx.lineTo(118.900910, 133.631250);
	  ctx.lineTo(120.304770, 133.588250);
	  ctx.lineTo(121.330090, 133.334090);
	  ctx.lineTo(122.426920, 132.723430);
	  ctx.lineTo(123.383690, 132.102890);
	  ctx.lineTo(124.221240, 131.178670);
	  ctx.lineTo(124.909740, 130.079530);
	  ctx.lineTo(125.470090, 128.957240);
	  ctx.lineTo(125.735360, 128.013220);
	  ctx.lineTo(124.996190, 128.267370);
	  ctx.lineTo(124.307680, 128.412620);
	  ctx.lineTo(123.526770, 128.623860);
	  ctx.lineTo(122.614720, 128.600760);
	  ctx.lineTo(121.640060, 128.531560);
	  ctx.lineTo(120.742910, 128.419340);
	  ctx.lineTo(120.376290, 128.307120);
	  ctx.lineTo(118.468720, 127.297090);
	  ctx.lineTo(117.795120, 126.785450);
	  ctx.lineTo(117.249670, 126.263940);
	  ctx.lineTo(116.799600, 125.663190);
	  ctx.lineTo(116.352530, 124.854510);
	  ctx.lineTo(115.988890, 124.115130);
	  ctx.lineTo(115.705730, 123.309730);
	  ctx.bezierCurveTo(115.705730, 123.309730, 115.294420, 121.946500, 115.357000, 122.187460);
	  ctx.bezierCurveTo(115.419500, 122.428420, 115.032120, 121.177420, 115.032120, 121.177420);
	  ctx.lineTo(114.909860, 120.619590);
	  ctx.lineTo(114.602860, 119.807600);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-0-10
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(120, 156, 69)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.011364;
	  ctx.moveTo(143.559120, 107.521900);
	  ctx.lineTo(143.294800, 108.007020);
	  ctx.lineTo(143.321300, 108.545030);
	  ctx.lineTo(143.391100, 108.947110);
	  ctx.lineTo(143.527920, 109.305760);
	  ctx.lineTo(143.599520, 109.562490);
	  ctx.lineTo(143.422260, 109.847540);
	  ctx.lineTo(143.302620, 110.362860);
	  ctx.lineTo(143.209320, 110.872530);
	  ctx.lineTo(143.240420, 111.412410);
	  ctx.lineTo(143.190620, 112.027820);
	  ctx.lineTo(143.221720, 112.665840);
	  ctx.lineTo(143.360110, 113.347300);
	  ctx.lineTo(143.608910, 113.947590);
	  ctx.lineTo(143.977410, 114.498780);
	  ctx.lineTo(144.422090, 115.049990);
	  ctx.lineTo(144.901010, 115.512460);
	  ctx.lineTo(145.462310, 115.818300);
	  ctx.lineTo(145.911680, 115.914600);
	  ctx.lineTo(146.644030, 115.890100);
	  ctx.lineTo(147.178930, 115.744770);
	  ctx.lineTo(147.751120, 115.395540);
	  ctx.lineTo(148.250240, 115.040660);
	  ctx.lineTo(148.687170, 114.512120);
	  ctx.lineTo(149.046350, 113.883520);
	  ctx.lineTo(149.338660, 113.241690);
	  ctx.lineTo(149.477050, 112.701810);
	  ctx.lineTo(149.091440, 112.847180);
	  ctx.lineTo(148.732240, 112.930380);
	  ctx.lineTo(148.324860, 113.051170);
	  ctx.lineTo(147.849080, 113.038070);
	  ctx.lineTo(147.340630, 112.998470);
	  ctx.lineTo(146.872610, 112.934170);
	  ctx.lineTo(146.681350, 112.869970);
	  ctx.lineTo(145.686220, 112.292320);
	  ctx.lineTo(145.334820, 111.999750);
	  ctx.lineTo(145.050270, 111.701470);
	  ctx.lineTo(144.815480, 111.357920);
	  ctx.lineTo(144.582250, 110.895440);
	  ctx.lineTo(144.392560, 110.472600);
	  ctx.lineTo(144.244850, 110.011990);
	  ctx.bezierCurveTo(144.244850, 110.011990, 144.030270, 109.232380, 144.062920, 109.370190);
	  ctx.bezierCurveTo(144.095520, 109.507960, 143.893450, 108.792530, 143.893450, 108.792530);
	  ctx.lineTo(143.829650, 108.473520);
	  ctx.lineTo(143.669490, 108.009150);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path3-7-80
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(216, 117, 0)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.017077;
	  ctx.moveTo(129.915830, 112.569160);
	  ctx.lineTo(129.497480, 113.261360);
	  ctx.lineTo(129.539380, 114.028980);
	  ctx.lineTo(129.650240, 114.602660);
	  ctx.lineTo(129.866770, 115.114430);
	  ctx.lineTo(129.979990, 115.480740);
	  ctx.lineTo(129.699470, 115.887430);
	  ctx.lineTo(129.509970, 116.622740);
	  ctx.lineTo(129.362340, 117.349960);
	  ctx.lineTo(129.411440, 118.120280);
	  ctx.lineTo(129.332640, 118.998340);
	  ctx.lineTo(129.381740, 119.908700);
	  ctx.lineTo(129.600750, 120.881020);
	  ctx.lineTo(129.994480, 121.737520);
	  ctx.lineTo(130.577670, 122.524000);
	  ctx.lineTo(131.281440, 123.310470);
	  ctx.lineTo(132.039370, 123.970360);
	  ctx.lineTo(132.927690, 124.406680);
	  ctx.lineTo(133.638850, 124.544160);
	  ctx.lineTo(134.797870, 124.509160);
	  ctx.lineTo(135.644380, 124.301770);
	  ctx.lineTo(136.549930, 123.803500);
	  ctx.lineTo(137.339850, 123.297130);
	  ctx.lineTo(138.031310, 122.542980);
	  ctx.lineTo(138.599750, 121.646080);
	  ctx.lineTo(139.062360, 120.730300);
	  ctx.lineTo(139.281370, 119.959990);
	  ctx.lineTo(138.671120, 120.167410);
	  ctx.lineTo(138.102690, 120.285870);
	  ctx.lineTo(137.457950, 120.458250);
	  ctx.lineTo(136.704970, 120.439350);
	  ctx.lineTo(135.900300, 120.382750);
	  ctx.lineTo(135.159600, 120.291150);
	  ctx.lineTo(134.856940, 120.199650);
	  ctx.lineTo(133.282050, 119.375470);
	  ctx.lineTo(132.725900, 118.958000);
	  ctx.lineTo(132.275600, 118.532430);
	  ctx.lineTo(131.904020, 118.042230);
	  ctx.lineTo(131.534900, 117.382340);
	  ctx.lineTo(131.234700, 116.779020);
	  ctx.lineTo(131.000940, 116.121840);
	  ctx.bezierCurveTo(131.000940, 116.121840, 130.661330, 115.009470, 130.713010, 115.206060);
	  ctx.bezierCurveTo(130.764510, 115.402700, 130.444800, 114.381880, 130.444800, 114.381880);
	  ctx.lineTo(130.343900, 113.926700);
	  ctx.lineTo(130.090430, 113.264120);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-9
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(118.550090, 141.081130);
	  ctx.lineTo(120.335460, 141.008430);
	  ctx.lineTo(120.159610, 133.806100);
	  ctx.lineTo(120.249010, 132.376850);
	  ctx.lineTo(122.400990, 129.703220);
	  ctx.lineTo(122.472590, 129.462260);
	  ctx.lineTo(122.263930, 129.373160);
	  ctx.lineTo(120.350410, 130.743000);
	  ctx.lineTo(120.231160, 127.848200);
	  ctx.lineTo(119.983770, 123.999480);
	  ctx.lineTo(119.858500, 121.378660);
	  ctx.lineTo(119.626000, 120.847240);
	  ctx.lineTo(119.542500, 121.091490);
	  ctx.lineTo(119.345780, 123.438350);
	  ctx.lineTo(119.095410, 127.346490);
	  ctx.lineTo(118.499300, 126.065790);
	  ctx.lineTo(118.204210, 125.636680);
	  ctx.lineTo(117.968750, 125.399020);
	  ctx.lineTo(117.801830, 125.501370);
	  ctx.lineTo(117.858430, 125.904060);
	  ctx.lineTo(118.305530, 126.755660);
	  ctx.lineTo(118.591650, 127.782200);
	  ctx.lineTo(118.949320, 129.145420);
	  ctx.lineTo(118.928520, 131.030190);
	  ctx.lineTo(118.713910, 133.697200);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-8-99
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.010985;
	  ctx.moveTo(145.712250, 119.791340);
	  ctx.lineTo(146.613420, 119.751240);
	  ctx.lineTo(146.524620, 115.773340);
	  ctx.lineTo(146.569820, 114.983960);
	  ctx.lineTo(147.656020, 113.507280);
	  ctx.lineTo(147.692220, 113.374300);
	  ctx.lineTo(147.586990, 113.325100);
	  ctx.lineTo(146.621150, 114.081660);
	  ctx.lineTo(146.560850, 112.482850);
	  ctx.lineTo(146.435960, 110.357150);
	  ctx.lineTo(146.372960, 108.909660);
	  ctx.lineTo(146.255550, 108.616160);
	  ctx.lineTo(146.213350, 108.751030);
	  ctx.lineTo(146.114050, 110.047230);
	  ctx.lineTo(145.987720, 112.205710);
	  ctx.lineTo(145.686810, 111.498370);
	  ctx.lineTo(145.537890, 111.261380);
	  ctx.lineTo(145.419160, 111.130000);
	  ctx.lineTo(145.334760, 111.186500);
	  ctx.lineTo(145.363360, 111.408910);
	  ctx.lineTo(145.589030, 111.879280);
	  ctx.lineTo(145.733430, 112.446230);
	  ctx.lineTo(145.913970, 113.199160);
	  ctx.lineTo(145.903470, 114.240100);
	  ctx.lineTo(145.795100, 115.713140);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1-5-6
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(162, 111, 80)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.017749;
	  ctx.moveTo(133.439540, 130.039460);
	  ctx.lineTo(135.021100, 129.979960);
	  ctx.lineTo(134.865320, 124.063200);
	  ctx.lineTo(134.944620, 122.889060);
	  ctx.lineTo(136.850890, 120.692660);
	  ctx.lineTo(136.914290, 120.494700);
	  ctx.lineTo(136.729470, 120.421700);
	  ctx.lineTo(135.034390, 121.547020);
	  ctx.lineTo(134.928770, 119.168920);
	  ctx.lineTo(134.709620, 116.007180);
	  ctx.lineTo(134.598760, 113.854160);
	  ctx.lineTo(134.392830, 113.417570);
	  ctx.lineTo(134.318930, 113.618230);
	  ctx.lineTo(134.144670, 115.546210);
	  ctx.lineTo(133.922870, 118.756750);
	  ctx.lineTo(133.394800, 117.704640);
	  ctx.lineTo(133.133430, 117.352130);
	  ctx.lineTo(132.924840, 117.156890);
	  ctx.lineTo(132.776990, 117.241090);
	  ctx.lineTo(132.826990, 117.571910);
	  ctx.lineTo(133.223050, 118.271490);
	  ctx.lineTo(133.476520, 119.114810);
	  ctx.lineTo(133.793370, 120.234700);
	  ctx.lineTo(133.774770, 121.783040);
	  ctx.lineTo(133.584670, 123.974010);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path4-0
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(0, 0, 0)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(126.559370, 135.823570);
	  ctx.lineTo(129.819590, 135.761870);
	  ctx.lineTo(130.216700, 135.623370);
	  ctx.lineTo(130.494400, 135.186690);
	  ctx.lineTo(130.469500, 134.639250);
	  ctx.lineTo(130.222350, 134.144120);
	  ctx.lineTo(129.614200, 133.990340);
	  ctx.lineTo(128.992120, 133.938040);
	  ctx.lineTo(128.983120, 122.648360);
	  ctx.lineTo(128.891520, 122.205500);
	  ctx.lineTo(128.469410, 121.830330);
	  ctx.lineTo(128.491710, 107.256160);
	  ctx.lineTo(129.191530, 106.567280);
	  ctx.lineTo(129.952440, 105.792280);
	  ctx.lineTo(130.677220, 105.146460);
	  ctx.lineTo(131.624200, 104.522130);
	  ctx.lineTo(132.382310, 104.208470);
	  ctx.lineTo(133.140460, 103.974740);
	  ctx.lineTo(133.898580, 103.808660);
	  ctx.lineTo(134.331800, 103.728660);
	  ctx.lineTo(134.509530, 103.962390);
	  ctx.lineTo(134.845540, 103.713270);
	  ctx.lineTo(135.489820, 103.482620);
	  ctx.lineTo(136.342350, 103.396520);
	  ctx.lineTo(137.058840, 103.418020);
	  ctx.lineTo(137.800290, 103.482620);
	  ctx.lineTo(138.422340, 103.648710);
	  ctx.lineTo(138.877790, 103.919330);
	  ctx.lineTo(138.916590, 103.418040);
	  ctx.lineTo(138.802710, 103.125880);
	  ctx.lineTo(138.422260, 102.919850);
	  ctx.lineTo(137.544740, 102.852350);
	  ctx.lineTo(135.748000, 102.870750);
	  ctx.lineTo(135.087070, 102.941650);
	  ctx.lineTo(134.512230, 102.963150);
	  ctx.lineTo(133.509720, 103.089160);
	  ctx.lineTo(132.787680, 103.252150);
	  ctx.lineTo(131.899040, 103.639650);
	  ctx.lineTo(131.018720, 104.024090);
	  ctx.lineTo(130.155060, 104.596100);
	  ctx.lineTo(129.405290, 105.201940);
	  ctx.lineTo(128.991500, 105.552540);
	  ctx.lineTo(128.472200, 106.173750);
	  ctx.lineTo(128.486100, 104.313160);
	  ctx.lineTo(128.386100, 103.833380);
	  ctx.lineTo(128.083400, 103.814980);
	  ctx.lineTo(127.897350, 104.061020);
	  ctx.lineTo(127.830650, 106.152280);
	  ctx.lineTo(127.850050, 121.713620);
	  ctx.lineTo(127.455710, 122.055000);
	  ctx.lineTo(127.341840, 122.645480);
	  ctx.lineTo(127.208530, 133.849040);
	  ctx.lineTo(126.658680, 133.895040);
	  ctx.lineTo(126.244910, 134.125690);
	  ctx.lineTo(125.908880, 134.427070);
	  ctx.lineTo(125.792250, 134.983730);
	  ctx.lineTo(126.025510, 135.438880);
	  ctx.lineTo(126.261550, 135.675680);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path5-0
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(254, 237, 1)';
	  ctx.strokeStyle = 'rgba(247, 253, 253, 0.000656906)';
	  ctx.lineWidth = 0.020806;
	  ctx.moveTo(134.452380, 104.008960);
	  ctx.lineTo(134.879850, 103.686450);
	  ctx.lineTo(135.412520, 103.498370);
	  ctx.lineTo(135.920710, 103.421470);
	  ctx.lineTo(136.528880, 103.415470);
	  ctx.lineTo(137.267550, 103.449270);
	  ctx.lineTo(137.831290, 103.495270);
	  ctx.lineTo(138.350590, 103.642890);
	  ctx.lineTo(138.677410, 103.785010);
	  ctx.lineTo(138.893520, 103.954390);
	  ctx.lineTo(138.703290, 104.393190);
	  ctx.lineTo(138.442240, 104.623840);
	  ctx.lineTo(138.139540, 104.894480);
	  ctx.lineTo(137.772980, 105.140520);
	  ctx.lineTo(137.395310, 105.349640);
	  ctx.lineTo(136.997950, 105.451850);
	  ctx.lineTo(136.585570, 105.503950);
	  ctx.lineTo(136.225230, 105.504050);
	  ctx.lineTo(135.726320, 105.371220);
	  ctx.lineTo(135.292420, 105.059700);
	  ctx.lineTo(134.867330, 104.622060);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  
  // #path6-5
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(254, 237, 1)';
	  ctx.strokeStyle = 'rgb(219, 219, 219)';
	  ctx.lineWidth = 0.104028;
	  ctx.moveTo(140.900790, 118.473040);
	  ctx.bezierCurveTo(140.853790, 118.718690, 140.886990, 125.679740, 140.886990, 125.679740);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	  ctx.restore();
  
	
	}
  
  
	drawdvddisk(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas

	  //ctx.restore();
  
	  ctx.transform(0.8,0,0,0.8,50,20)
  
	  ctx.save();
	  
  
	  let ct,st;
	  const radians = (2*Math.PI/30)*(ms*1e-3)
	  ct = Math.cos(radians)
	  st = Math.sin(radians)
	  const x=96.443008,y=124.684509;//96.443008, 124.684509
	  ctx.transform(ct,st,-st,ct,x*(1-ct)+y*st,y*(1-ct)-x*st)
  
  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(0, 0, 0)';
	  ctx.lineWidth = 0.067699;
	  ctx.moveTo(96.346542, 53.327317);
	  ctx.bezierCurveTo(136.501282, 53.327317, 169.053131, 85.694566, 169.053131, 125.621590);
	  ctx.bezierCurveTo(169.053131, 165.548614, 136.501282, 197.915863, 96.346542, 197.915863);
	  ctx.bezierCurveTo(56.191802, 197.915863, 23.639953, 165.548614, 23.639953, 125.621590);
	  ctx.bezierCurveTo(23.639953, 85.694566, 56.191802, 53.327317, 96.346542, 53.327317);
	  ctx.fill();
	  
  // #path2
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(217, 175, 101)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(96.896301, 102.256544);
	  ctx.bezierCurveTo(109.572750, 102.256544, 119.849043, 112.778974, 119.849043, 125.759050);
	  ctx.bezierCurveTo(119.849043, 138.739126, 109.572750, 149.261556, 96.896301, 149.261556);
	  ctx.bezierCurveTo(84.219852, 149.261556, 73.943559, 138.739126, 73.943559, 125.759050);
	  ctx.bezierCurveTo(73.943559, 112.778974, 84.219852, 102.256544, 96.896301, 102.256544);
	  ctx.fill();
	  
  // #path4
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(227, 39, 44)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(96.483986, 117.375095);
	  ctx.bezierCurveTo(100.886585, 117.375095, 104.455597, 121.128711, 104.455597, 125.759030);
	  ctx.bezierCurveTo(104.455597, 130.389349, 100.886585, 134.142965, 96.483986, 134.142965);
	  ctx.bezierCurveTo(92.081387, 134.142965, 88.512375, 130.389349, 88.512375, 125.759030);
	  ctx.bezierCurveTo(88.512375, 121.128711, 92.081387, 117.375095, 96.483986, 117.375095);
	  ctx.fill();
	  
  // #path5
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(96.443008, 124.684509);
	  ctx.bezierCurveTo(96.952124, 124.684509, 97.364843, 125.107466, 97.364843, 125.629210);
	  ctx.bezierCurveTo(97.364843, 126.150954, 96.952124, 126.573911, 96.443008, 126.573911);
	  ctx.bezierCurveTo(95.933892, 126.573911, 95.521173, 126.150954, 95.521173, 125.629210);
	  ctx.bezierCurveTo(95.521173, 125.107466, 95.933892, 124.684509, 96.443008, 124.684509);
	  ctx.fill();
	  
  // #path42
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(68.079889, 108.365010);
	  ctx.lineTo(65.838014, 111.635370);
	  ctx.lineTo(64.278702, 115.552740);
	  ctx.lineTo(62.995949, 119.693630);
	  ctx.lineTo(62.525213, 123.334550);
	  ctx.lineTo(62.360457, 127.363680);
	  ctx.lineTo(62.854728, 131.022240);
	  ctx.lineTo(63.590251, 134.874910);
	  ctx.lineTo(64.837701, 138.098220);
	  ctx.lineTo(66.402894, 141.456810);
	  ctx.lineTo(68.768337, 144.956560);
	  ctx.lineTo(71.198509, 148.456310);
	  ctx.lineTo(74.640760, 151.720790);
	  ctx.lineTo(77.724073, 153.691240);
	  ctx.lineTo(80.930955, 155.391120);
	  ctx.lineTo(84.420281, 157.038060);
	  ctx.lineTo(87.821341, 158.114460);
	  ctx.lineTo(91.457771, 158.643830);
	  ctx.lineTo(94.570506, 158.543830);
	  ctx.lineTo(91.446002, 158.255620);
	  ctx.lineTo(88.409760, 157.549790);
	  ctx.lineTo(84.696836, 156.367520);
	  ctx.lineTo(81.007452, 154.755860);
	  ctx.lineTo(77.718189, 152.756000);
	  ctx.lineTo(74.423043, 150.391460);
	  ctx.lineTo(71.916379, 147.768120);
	  ctx.lineTo(69.974598, 145.185950);
	  ctx.lineTo(68.162267, 142.392030);
	  ctx.lineTo(66.432315, 139.239300);
	  ctx.lineTo(64.937731, 135.816020);
	  ctx.lineTo(64.013912, 132.504480);
	  ctx.lineTo(63.490222, 128.698870);
	  ctx.lineTo(63.348999, 124.469760);
	  ctx.lineTo(63.843271, 120.622960);
	  ctx.lineTo(64.608216, 116.817350);
	  ctx.lineTo(66.032191, 112.541180);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path43
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.072300;
	  ctx.moveTo(124.364010, 143.970560);
	  ctx.lineTo(126.709160, 140.635860);
	  ctx.lineTo(128.340300, 136.641410);
	  ctx.lineTo(129.682140, 132.419050);
	  ctx.lineTo(130.174570, 128.706500);
	  ctx.lineTo(130.346910, 124.598080);
	  ctx.lineTo(129.829870, 120.867570);
	  ctx.lineTo(129.060460, 116.939080);
	  ctx.lineTo(127.755550, 113.652360);
	  ctx.lineTo(126.118250, 110.227700);
	  ctx.lineTo(123.643840, 106.659080);
	  ctx.lineTo(121.101720, 103.090480);
	  ctx.lineTo(117.500900, 99.761773);
	  ctx.lineTo(114.275550, 97.752556);
	  ctx.lineTo(110.920930, 96.019232);
	  ctx.lineTo(107.270860, 94.339888);
	  ctx.lineTo(103.713140, 93.242312);
	  ctx.lineTo(99.909181, 92.702526);
	  ctx.lineTo(96.653058, 92.804503);
	  ctx.lineTo(99.921493, 93.098383);
	  ctx.lineTo(103.097600, 93.818098);
	  ctx.lineTo(106.981570, 95.023630);
	  ctx.lineTo(110.840910, 96.666997);
	  ctx.lineTo(114.281700, 98.706204);
	  ctx.lineTo(117.728650, 101.117260);
	  ctx.lineTo(120.350790, 103.792210);
	  ctx.lineTo(122.382020, 106.425190);
	  ctx.lineTo(124.277830, 109.274080);
	  ctx.lineTo(126.087480, 112.488830);
	  ctx.lineTo(127.650910, 115.979470);
	  ctx.lineTo(128.617300, 119.356160);
	  ctx.lineTo(129.165100, 123.236640);
	  ctx.lineTo(129.312840, 127.548950);
	  ctx.lineTo(128.795800, 131.471450);
	  ctx.lineTo(127.995620, 135.351920);
	  ctx.lineTo(126.506030, 139.712230);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path44
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.092883;
	  ctx.moveTo(131.850910, 150.235550);
	  ctx.lineTo(134.815710, 145.882110);
	  ctx.lineTo(136.877850, 140.667340);
	  ctx.lineTo(138.574250, 135.155040);
	  ctx.lineTo(139.196800, 130.308300);
	  ctx.lineTo(139.414660, 124.944740);
	  ctx.lineTo(138.761000, 120.074560);
	  ctx.lineTo(137.788300, 114.945900);
	  ctx.lineTo(136.138590, 110.655090);
	  ctx.lineTo(134.068670, 106.184180);
	  ctx.lineTo(130.940450, 101.525350);
	  ctx.lineTo(127.726640, 96.866530);
	  ctx.lineTo(123.174370, 92.520897);
	  ctx.lineTo(119.096800, 89.897861);
	  ctx.lineTo(114.855770, 87.635000);
	  ctx.lineTo(110.241260, 85.442616);
	  ctx.lineTo(105.743490, 84.009727);
	  ctx.lineTo(100.934400, 83.305035);
	  ctx.lineTo(96.817926, 83.438168);
	  ctx.lineTo(100.949970, 83.821827);
	  ctx.lineTo(104.965300, 84.761417);
	  ctx.lineTo(109.875530, 86.335242);
	  ctx.lineTo(114.754620, 88.480660);
	  ctx.lineTo(119.104580, 91.142849);
	  ctx.lineTo(123.462310, 94.290488);
	  ctx.lineTo(126.777290, 97.782641);
	  ctx.lineTo(129.345220, 101.220010);
	  ctx.lineTo(131.741960, 104.939260);
	  ctx.lineTo(134.029780, 109.136080);
	  ctx.lineTo(136.006310, 113.693140);
	  ctx.lineTo(137.228040, 118.101420);
	  ctx.lineTo(137.920600, 123.167390);
	  ctx.lineTo(138.107360, 128.797120);
	  ctx.lineTo(137.453700, 133.917940);
	  ctx.lineTo(136.442110, 138.983910);
	  ctx.lineTo(134.558910, 144.676300);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path45
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.092883;
	  ctx.moveTo(60.361846, 101.605410);
	  ctx.lineTo(57.397056, 105.958850);
	  ctx.lineTo(55.334911, 111.173620);
	  ctx.lineTo(53.638511, 116.685920);
	  ctx.lineTo(53.015961, 121.532670);
	  ctx.lineTo(52.798101, 126.896240);
	  ctx.lineTo(53.451761, 131.766420);
	  ctx.lineTo(54.424461, 136.895080);
	  ctx.lineTo(56.074166, 141.185890);
	  ctx.lineTo(58.144096, 145.656790);
	  ctx.lineTo(61.272306, 150.315620);
	  ctx.lineTo(64.486116, 154.974440);
	  ctx.lineTo(69.038386, 159.320070);
	  ctx.lineTo(73.115956, 161.943100);
	  ctx.lineTo(77.356986, 164.205970);
	  ctx.lineTo(81.971496, 166.398350);
	  ctx.lineTo(86.469266, 167.831240);
	  ctx.lineTo(91.278356, 168.535930);
	  ctx.lineTo(95.394836, 168.402800);
	  ctx.lineTo(91.262786, 168.019140);
	  ctx.lineTo(87.247446, 167.079550);
	  ctx.lineTo(82.337216, 165.505720);
	  ctx.lineTo(77.458126, 163.360310);
	  ctx.lineTo(73.108166, 160.698120);
	  ctx.lineTo(68.750436, 157.550480);
	  ctx.lineTo(65.435456, 154.058320);
	  ctx.lineTo(62.867526, 150.620960);
	  ctx.lineTo(60.470796, 146.901710);
	  ctx.lineTo(58.182976, 142.704890);
	  ctx.lineTo(56.206446, 138.147830);
	  ctx.lineTo(54.984721, 133.739550);
	  ctx.lineTo(54.292161, 128.673580);
	  ctx.lineTo(54.105401, 123.043850);
	  ctx.lineTo(54.759061, 117.923040);
	  ctx.lineTo(55.770651, 112.857050);
	  ctx.lineTo(57.653836, 107.164660);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path46
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.116907;
	  ctx.moveTo(52.247817, 95.505285);
	  ctx.lineTo(48.456824, 100.898920);
	  ctx.lineTo(45.820017, 107.359700);
	  ctx.lineTo(43.650878, 114.189100);
	  ctx.lineTo(42.854841, 120.193910);
	  ctx.lineTo(42.576269, 126.839040);
	  ctx.lineTo(43.412086, 132.872890);
	  ctx.lineTo(44.655850, 139.226990);
	  ctx.lineTo(46.765281, 144.543030);
	  ctx.lineTo(49.412043, 150.082200);
	  ctx.lineTo(53.411997, 155.854190);
	  ctx.lineTo(57.521406, 161.626170);
	  ctx.lineTo(63.342265, 167.010160);
	  ctx.lineTo(68.556140, 170.259910);
	  ctx.lineTo(73.979026, 173.063470);
	  ctx.lineTo(79.879470, 175.779690);
	  ctx.lineTo(85.630643, 177.554950);
	  ctx.lineTo(91.779892, 178.428020);
	  ctx.lineTo(97.043519, 178.263080);
	  ctx.lineTo(91.759982, 177.787750);
	  ctx.lineTo(86.625679, 176.623650);
	  ctx.lineTo(80.347107, 174.673780);
	  ctx.lineTo(74.108351, 172.015750);
	  ctx.lineTo(68.546179, 168.717470);
	  ctx.lineTo(62.974073, 164.817730);
	  ctx.lineTo(58.735300, 160.491160);
	  ctx.lineTo(55.451760, 156.232490);
	  ctx.lineTo(52.387129, 151.624580);
	  ctx.lineTo(49.461758, 146.424980);
	  ctx.lineTo(46.934425, 140.779060);
	  ctx.lineTo(45.372239, 135.317480);
	  ctx.lineTo(44.486682, 129.041050);
	  ctx.lineTo(44.247877, 122.066170);
	  ctx.lineTo(45.083694, 115.721810);
	  ctx.lineTo(46.377185, 109.445360);
	  ctx.lineTo(48.785161, 102.392850);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path47
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.116907;
	  ctx.moveTo(140.294680, 155.841070);
	  ctx.lineTo(144.085680, 150.447440);
	  ctx.lineTo(146.722480, 143.986660);
	  ctx.lineTo(148.891620, 137.157260);
	  ctx.lineTo(149.687660, 131.152450);
	  ctx.lineTo(149.966230, 124.507320);
	  ctx.lineTo(149.130420, 118.473470);
	  ctx.lineTo(147.886650, 112.119370);
	  ctx.lineTo(145.777220, 106.803330);
	  ctx.lineTo(143.130460, 101.264160);
	  ctx.lineTo(139.130500, 95.492169);
	  ctx.lineTo(135.021100, 89.720189);
	  ctx.lineTo(129.200240, 84.336199);
	  ctx.lineTo(123.986360, 81.086449);
	  ctx.lineTo(118.563480, 78.282889);
	  ctx.lineTo(112.663030, 75.566668);
	  ctx.lineTo(106.911860, 73.791408);
	  ctx.lineTo(100.762610, 72.918337);
	  ctx.lineTo(95.498977, 73.083277);
	  ctx.lineTo(100.782520, 73.558608);
	  ctx.lineTo(105.916820, 74.722707);
	  ctx.lineTo(112.195390, 76.672578);
	  ctx.lineTo(118.434150, 79.330609);
	  ctx.lineTo(123.996320, 82.628889);
	  ctx.lineTo(129.568430, 86.528629);
	  ctx.lineTo(133.807200, 90.855199);
	  ctx.lineTo(137.090740, 95.113869);
	  ctx.lineTo(140.155370, 99.721779);
	  ctx.lineTo(143.080740, 104.921380);
	  ctx.lineTo(145.608080, 110.567300);
	  ctx.lineTo(147.170260, 116.028880);
	  ctx.lineTo(148.055820, 122.305310);
	  ctx.lineTo(148.294620, 129.280190);
	  ctx.lineTo(147.458810, 135.624550);
	  ctx.lineTo(146.165320, 141.901000);
	  ctx.lineTo(143.757340, 148.953510);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path48
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.139331;
	  ctx.moveTo(148.448770, 161.941190);
	  ctx.lineTo(152.985650, 155.539530);
	  ctx.lineTo(156.141240, 147.871280);
	  ctx.lineTo(158.737160, 139.765520);
	  ctx.lineTo(159.689820, 132.638460);
	  ctx.lineTo(160.023200, 124.751410);
	  ctx.lineTo(159.022940, 117.589880);
	  ctx.lineTo(157.534460, 110.048240);
	  ctx.lineTo(155.010000, 103.738670);
	  ctx.lineTo(151.842490, 97.164284);
	  ctx.lineTo(147.055540, 90.313553);
	  ctx.lineTo(142.137610, 83.462835);
	  ctx.lineTo(135.171500, 77.072619);
	  ctx.lineTo(128.931780, 73.215516);
	  ctx.lineTo(122.441950, 69.887992);
	  ctx.lineTo(115.380590, 66.664130);
	  ctx.lineTo(108.497880, 64.557088);
	  ctx.lineTo(101.138760, 63.520847);
	  ctx.lineTo(94.839504, 63.716613);
	  ctx.lineTo(101.162590, 64.280780);
	  ctx.lineTo(107.307060, 65.662439);
	  ctx.lineTo(114.820940, 67.976726);
	  ctx.lineTo(122.287180, 71.131522);
	  ctx.lineTo(128.943700, 75.046226);
	  ctx.lineTo(135.612130, 79.674796);
	  ctx.lineTo(140.684880, 84.809970);
	  ctx.lineTo(144.614450, 89.864552);
	  ctx.lineTo(148.282050, 95.333645);
	  ctx.lineTo(151.782990, 101.505010);
	  ctx.lineTo(154.807580, 108.206100);
	  ctx.lineTo(156.677120, 114.688410);
	  ctx.lineTo(157.736910, 122.137860);
	  ctx.lineTo(158.022700, 130.416280);
	  ctx.lineTo(157.022440, 137.946360);
	  ctx.lineTo(155.474460, 145.395830);
	  ctx.lineTo(152.592710, 153.766400);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path49
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 252, 252)';
	  ctx.lineWidth = 0.136250;
	  ctx.moveTo(43.542185, 91.540278);
	  ctx.lineTo(39.119487, 97.819988);
	  ctx.lineTo(36.043316, 105.342160);
	  ctx.lineTo(33.512729, 113.293510);
	  ctx.lineTo(32.584045, 120.284810);
	  ctx.lineTo(32.259055, 128.021610);
	  ctx.lineTo(33.234141, 135.046720);
	  ctx.lineTo(34.685160, 142.444690);
	  ctx.lineTo(37.146086, 148.634070);
	  ctx.lineTo(40.233876, 155.083220);
	  ctx.lineTo(44.900351, 161.803440);
	  ctx.lineTo(49.694509, 168.523660);
	  ctx.lineTo(56.485300, 174.792140);
	  ctx.lineTo(62.567982, 178.575760);
	  ctx.lineTo(68.894480, 181.839910);
	  ctx.lineTo(75.778124, 185.002350);
	  ctx.lineTo(82.487613, 187.069250);
	  ctx.lineTo(89.661523, 188.085750);
	  ctx.lineTo(95.802247, 187.893720);
	  ctx.lineTo(89.638293, 187.340300);
	  ctx.lineTo(83.648463, 185.984960);
	  ctx.lineTo(76.323689, 183.714760);
	  ctx.lineTo(69.045355, 180.620060);
	  ctx.lineTo(62.556362, 176.779930);
	  ctx.lineTo(56.055760, 172.239530);
	  ctx.lineTo(51.110678, 167.202180);
	  ctx.lineTo(47.280005, 162.243890);
	  ctx.lineTo(43.704709, 156.878980);
	  ctx.lineTo(40.291879, 150.825180);
	  ctx.lineTo(37.343410, 144.251740);
	  ctx.lineTo(35.520923, 137.892910);
	  ctx.lineTo(34.487805, 130.585370);
	  ctx.lineTo(34.209208, 122.464650);
	  ctx.lineTo(35.184294, 115.078020);
	  ctx.lineTo(36.693315, 107.770460);
	  ctx.lineTo(39.502538, 99.559342);
	  ctx.closePath();
	  ctx.fill();
	ctx.restore();
	}
  
	drawsun(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas

	  ctx.restore();
  
	  ctx.transform(0.6,0,0,0.6,180,200)
  
	  ctx.save();
  
	  const x=(5*(ms*1e-3))%10
	  if (x<5){
		  ctx.transform(1,0,0,1,10-x,0);
	  } else{
		  ctx.transform(1,0,0,1,x,0);
	  }
  
	  //ctx.save();
  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.851704;
	  ctx.lineCap = 'round';
	  ctx.moveTo(150.449540, 106.212340);
	  ctx.lineTo(136.065940, 120.198760);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path1
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 251, 1)';
	  ctx.lineWidth = 0.067173;
	  ctx.moveTo(106.710070, 117.011789);
	  ctx.bezierCurveTo(124.851975, 117.011789, 139.558894, 131.283591, 139.558894, 148.888750);
	  ctx.bezierCurveTo(139.558894, 166.493909, 124.851975, 180.765711, 106.710070, 180.765711);
	  ctx.bezierCurveTo(88.568165, 180.765711, 73.861246, 166.493909, 73.861246, 148.888750);
	  ctx.bezierCurveTo(73.861246, 131.283591, 88.568165, 117.011789, 106.710070, 117.011789);
	  ctx.fill();
	  
  // #path2
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(107.110610, 109.236910);
	  ctx.lineTo(107.110610, 89.410994);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path4
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(147.501270, 148.940360);
	  ctx.lineTo(167.327180, 148.940360);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path5
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(45.931952, 148.802920);
	  ctx.lineTo(65.757862, 148.802920);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path6
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(106.721870, 209.338350);
	  ctx.lineTo(106.721870, 189.512430);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.851704;
	  ctx.lineCap = 'round';
	  ctx.moveTo(78.143257, 177.546760);
	  ctx.lineTo(63.759657, 191.533180);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path8
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.851704;
	  ctx.lineCap = 'round';
	  ctx.moveTo(136.065080, 177.353110);
	  ctx.lineTo(150.061660, 191.726830);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path9
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.851704;
	  ctx.lineCap = 'round';
	  ctx.moveTo(65.119399, 107.573660);
	  ctx.lineTo(79.115979, 121.947380);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path11
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(91.743455, 112.346860);
	  ctx.lineTo(87.467278, 103.017010);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path12
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(126.730370, 195.149220);
	  ctx.lineTo(122.454190, 185.819370);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path13
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(60.060868, 168.325910);
	  ctx.lineTo(69.390718, 164.049740);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path14
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(144.806940, 133.922110);
	  ctx.lineTo(154.136790, 129.645940);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path15
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(69.919011, 133.781160);
	  ctx.lineTo(60.310059, 130.175630);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path16
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(155.053830, 168.573700);
	  ctx.lineTo(145.444880, 164.968170);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path17
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(123.178270, 111.708920);
	  ctx.lineTo(126.783800, 102.099970);
	  ctx.fill();
	  ctx.stroke();
	  
  // #path18
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(209, 160, 37)';
	  ctx.strokeStyle = 'rgb(209,92,42)';
	  ctx.lineWidth = 0.846667;
	  ctx.lineCap = 'round';
	  ctx.moveTo(87.608244, 196.066250);
	  ctx.lineTo(91.213774, 186.457300);
	  ctx.fill();
	  ctx.stroke();
	ctx.restore();
	}
  
	drawcloud1(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas
	  
	  ctx.restore();
  
  
	  ctx.transform(0.9,0,0,0.9,120,10)
  
	  ctx.save();
  
	  const x=(10*(ms*1e-3))%30
	  if (x<15){
		  ctx.transform(1,0,0,1,30-x,0);
	  } else{
		  ctx.transform(1,0,0,1,x,0);
	  }
   
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(252, 252, 252)';
	  ctx.strokeStyle = 'rgb(247, 253, 253)';
	  ctx.lineWidth = 0.052917;
	  ctx.lineCap = 'butt';
	  ctx.moveTo(82.523792, 164.118370);
	  ctx.bezierCurveTo(82.651456, 164.620860, 127.342300, 163.942900, 127.342300, 163.942900);
	  ctx.lineTo(130.023270, 162.810300);
	  ctx.lineTo(132.680310, 160.752480);
	  ctx.lineTo(134.651140, 158.367650);
	  ctx.lineTo(135.074030, 155.272950);
	  ctx.lineTo(135.289470, 151.755520);
	  ctx.lineTo(134.156440, 148.604980);
	  ctx.lineTo(131.443550, 145.470400);
	  ctx.lineTo(128.858330, 143.643890);
	  ctx.lineTo(126.416730, 142.894140);
	  ctx.lineTo(124.398020, 142.790460);
	  ctx.lineTo(123.687880, 140.453480);
	  ctx.lineTo(122.171860, 138.395660);
	  ctx.lineTo(120.711680, 136.433560);
	  ctx.lineTo(118.868510, 135.069660);
	  ctx.lineTo(116.953530, 134.319910);
	  ctx.lineTo(114.639600, 133.490400);
	  ctx.lineTo(112.229920, 133.003860);
	  ctx.lineTo(109.269680, 133.243140);
	  ctx.lineTo(106.461040, 134.144430);
	  ctx.lineTo(104.043380, 135.627980);
	  ctx.lineTo(101.976800, 137.637940);
	  ctx.lineTo(100.189480, 139.472420);
	  ctx.lineTo(99.607009, 141.641910);
	  ctx.lineTo(99.168158, 143.005810);
	  ctx.lineTo(97.093597, 142.734620);
	  ctx.lineTo(94.867432, 142.822320);
	  ctx.lineTo(92.409874, 143.388620);
	  ctx.lineTo(90.175732, 144.848230);
	  ctx.lineTo(88.875142, 146.682720);
	  ctx.lineTo(88.180961, 148.493280);
	  ctx.lineTo(87.949569, 150.160270);
	  ctx.lineTo(83.920131, 149.274930);
	  ctx.lineTo(80.521042, 149.761480);
	  ctx.lineTo(78.183170, 152.194160);
	  ctx.lineTo(76.379897, 154.890060);
	  ctx.lineTo(75.972965, 157.769410);
	  ctx.lineTo(76.507564, 160.696610);
	  ctx.lineTo(78.454458, 162.826210);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	ctx.restore();
	}
	drawcloud2(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas

	  ctx.restore();
	  
	  ctx.transform(0.8,0,0,0.8,-300,-25)
  
  
	  ctx.save();
  
	  const x=(10*(ms*1e-3))%20
	  if (x<10){
		  ctx.transform(1,0,0,1,x,0);
	  } else{
		  ctx.transform(1,0,0,1,20-x,0);
	  }
  
  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(251, 251, 251)';
	  ctx.strokeStyle = 'rgb(247, 253, 253)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(79.425786, 143.663330);
	  ctx.lineTo(123.157800, 143.891840);
	  ctx.lineTo(125.339900, 142.894690);
	  ctx.lineTo(127.556630, 140.685730);
	  ctx.lineTo(128.602650, 138.615260);
	  ctx.lineTo(128.554150, 136.253950);
	  ctx.lineTo(128.173150, 133.629510);
	  ctx.lineTo(126.891600, 131.572890);
	  ctx.lineTo(125.332960, 130.056390);
	  ctx.lineTo(123.067740, 129.073090);
	  ctx.lineTo(120.456140, 128.886130);
	  ctx.lineTo(118.003880, 129.640920);
	  ctx.lineTo(117.151820, 127.902830);
	  ctx.lineTo(115.981110, 126.019330);
	  ctx.lineTo(114.138450, 124.682870);
	  ctx.lineTo(111.852440, 123.124820);
	  ctx.lineTo(108.783650, 122.598550);
	  ctx.lineTo(106.282900, 122.695450);
	  ctx.lineTo(105.479330, 120.576510);
	  ctx.lineTo(104.578780, 118.602990);
	  ctx.lineTo(102.833110, 116.497890);
	  ctx.lineTo(100.547100, 114.635160);
	  ctx.lineTo(98.365000, 113.464900);
	  ctx.lineTo(95.268499, 112.841680);
	  ctx.lineTo(92.296691, 112.841680);
	  ctx.lineTo(89.345664, 113.499520);
	  ctx.lineTo(86.962673, 114.614390);
	  ctx.lineTo(84.579684, 116.373250);
	  ctx.lineTo(82.847860, 118.305230);
	  ctx.lineTo(81.614801, 120.327230);
	  ctx.lineTo(81.046764, 122.529260);
	  ctx.lineTo(79.460412, 122.515460);
	  ctx.lineTo(76.841895, 123.097130);
	  ctx.lineTo(74.625163, 124.412820);
	  ctx.lineTo(72.221391, 126.254770);
	  ctx.lineTo(70.822076, 128.089800);
	  ctx.lineTo(69.589017, 130.527280);
	  ctx.lineTo(68.937851, 133.130950);
	  ctx.lineTo(68.806234, 135.935430);
	  ctx.lineTo(69.679074, 137.998980);
	  ctx.lineTo(71.542515, 140.270260);
	  ctx.lineTo(73.759250, 141.862930);
	  ctx.lineTo(76.925024, 143.289410);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	ctx.restore();
	}
	drawcloud2a(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas

	  ctx.restore();
	  
	  ctx.transform(1.9,0,0,1.9,30,45)
  
  
	  ctx.save();
  
	  const x=(20*(ms*1e-3))%30
	  if (x<15){
		  ctx.transform(1,0,0,1,30-x,0);
	  } else{
		  ctx.transform(1,0,0,1,x,0);
	  }
  
  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(251, 251, 251)';
	  ctx.strokeStyle = 'rgb(247, 253, 253)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(79.425786, 143.663330);
	  ctx.lineTo(123.157800, 143.891840);
	  ctx.lineTo(125.339900, 142.894690);
	  ctx.lineTo(127.556630, 140.685730);
	  ctx.lineTo(128.602650, 138.615260);
	  ctx.lineTo(128.554150, 136.253950);
	  ctx.lineTo(128.173150, 133.629510);
	  ctx.lineTo(126.891600, 131.572890);
	  ctx.lineTo(125.332960, 130.056390);
	  ctx.lineTo(123.067740, 129.073090);
	  ctx.lineTo(120.456140, 128.886130);
	  ctx.lineTo(118.003880, 129.640920);
	  ctx.lineTo(117.151820, 127.902830);
	  ctx.lineTo(115.981110, 126.019330);
	  ctx.lineTo(114.138450, 124.682870);
	  ctx.lineTo(111.852440, 123.124820);
	  ctx.lineTo(108.783650, 122.598550);
	  ctx.lineTo(106.282900, 122.695450);
	  ctx.lineTo(105.479330, 120.576510);
	  ctx.lineTo(104.578780, 118.602990);
	  ctx.lineTo(102.833110, 116.497890);
	  ctx.lineTo(100.547100, 114.635160);
	  ctx.lineTo(98.365000, 113.464900);
	  ctx.lineTo(95.268499, 112.841680);
	  ctx.lineTo(92.296691, 112.841680);
	  ctx.lineTo(89.345664, 113.499520);
	  ctx.lineTo(86.962673, 114.614390);
	  ctx.lineTo(84.579684, 116.373250);
	  ctx.lineTo(82.847860, 118.305230);
	  ctx.lineTo(81.614801, 120.327230);
	  ctx.lineTo(81.046764, 122.529260);
	  ctx.lineTo(79.460412, 122.515460);
	  ctx.lineTo(76.841895, 123.097130);
	  ctx.lineTo(74.625163, 124.412820);
	  ctx.lineTo(72.221391, 126.254770);
	  ctx.lineTo(70.822076, 128.089800);
	  ctx.lineTo(69.589017, 130.527280);
	  ctx.lineTo(68.937851, 133.130950);
	  ctx.lineTo(68.806234, 135.935430);
	  ctx.lineTo(69.679074, 137.998980);
	  ctx.lineTo(71.542515, 140.270260);
	  ctx.lineTo(73.759250, 141.862930);
	  ctx.lineTo(76.925024, 143.289410);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	ctx.restore();
	}
	drawcloud3(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas 

	  ctx.restore();
  
	  ctx.transform(0.8,0,0,0.8,230,-90)
  
	  ctx.save();
  
	  const x=(15*(ms*1e-3))%40
	  if (x<20){
		  ctx.transform(1,0,0,1,x,0);
	  } else{
		  ctx.transform(1,0,0,1,40-x,0);
	  }
  
  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 255, 255)';
	  ctx.strokeStyle = 'rgb(247, 253, 253)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(48.385497, 178.364340);
	  ctx.lineTo(154.988780, 178.330140);
	  ctx.lineTo(157.548770, 177.123380);
	  ctx.lineTo(159.954640, 174.615730);
	  ctx.lineTo(161.581390, 172.356270);
	  ctx.lineTo(162.103660, 169.326540);
	  ctx.lineTo(162.343390, 165.321140);
	  ctx.lineTo(161.641320, 162.351320);
	  ctx.lineTo(159.543670, 159.218890);
	  ctx.lineTo(157.548770, 157.181960);
	  ctx.lineTo(154.637750, 155.778350);
	  ctx.lineTo(152.069200, 155.427450);
	  ctx.lineTo(151.076030, 152.637360);
	  ctx.lineTo(150.082850, 150.780160);
	  ctx.lineTo(148.276310, 148.512140);
	  ctx.lineTo(145.759130, 146.654930);
	  ctx.lineTo(143.199150, 145.559440);
	  ctx.lineTo(140.099770, 145.208540);
	  ctx.lineTo(136.649350, 145.773400);
	  ctx.lineTo(134.200670, 147.476560);
	  ctx.lineTo(131.751990, 149.504930);
	  ctx.lineTo(130.287910, 152.004030);
	  ctx.lineTo(129.739960, 154.169350);
	  ctx.lineTo(129.808460, 156.266190);
	  ctx.lineTo(128.019030, 155.735570);
	  ctx.lineTo(126.520710, 155.778370);
	  ctx.lineTo(124.885400, 155.975220);
	  ctx.lineTo(123.224410, 156.831070);
	  ctx.lineTo(122.231240, 154.922520);
	  ctx.lineTo(121.349370, 153.510360);
	  ctx.lineTo(120.236330, 152.354950);
	  ctx.lineTo(118.883560, 151.225220);
	  ctx.lineTo(117.325310, 150.549100);
	  ctx.lineTo(115.373210, 149.890090);
	  ctx.lineTo(113.087210, 149.419370);
	  ctx.lineTo(111.451900, 149.504970);
	  ctx.lineTo(109.790910, 149.607680);
	  ctx.lineTo(109.208700, 146.697770);
	  ctx.lineTo(108.754920, 144.695060);
	  ctx.lineTo(108.224090, 142.752270);
	  ctx.lineTo(107.230920, 141.348670);
	  ctx.lineTo(106.135010, 139.722550);
	  ctx.lineTo(104.431200, 138.156330);
	  ctx.lineTo(102.924320, 136.521650);
	  ctx.lineTo(101.109220, 135.246420);
	  ctx.lineTo(99.054376, 134.664440);
	  ctx.lineTo(97.316326, 134.253630);
	  ctx.lineTo(94.542294, 134.296430);
	  ctx.lineTo(92.316219, 134.116700);
	  ctx.lineTo(89.987405, 134.527510);
	  ctx.lineTo(87.230497, 135.520310);
	  ctx.lineTo(85.201344, 136.966700);
	  ctx.lineTo(83.429045, 138.815350);
	  ctx.lineTo(82.667043, 140.099130);
	  ctx.lineTo(80.038563, 139.696880);
	  ctx.lineTo(77.307341, 139.808140);
	  ctx.lineTo(74.216522, 140.749590);
	  ctx.lineTo(71.399682, 142.427060);
	  ctx.lineTo(69.010931, 144.575260);
	  ctx.lineTo(67.367062, 147.134260);
	  ctx.lineTo(66.784857, 149.890120);
	  ctx.lineTo(64.456042, 149.419400);
	  ctx.lineTo(61.185424, 149.539220);
	  ctx.lineTo(57.555211, 151.096870);
	  ctx.lineTo(55.166460, 153.262190);
	  ctx.lineTo(53.068815, 155.650020);
	  ctx.lineTo(51.767417, 158.636960);
	  ctx.lineTo(51.142405, 161.572540);
	  ctx.lineTo(50.962604, 164.088760);
	  ctx.lineTo(51.022534, 165.945960);
	  ctx.lineTo(50.902670, 167.161280);
	  ctx.lineTo(48.805021, 166.810380);
	  ctx.lineTo(47.289578, 167.101370);
	  ctx.lineTo(45.003570, 168.736050);
	  ctx.lineTo(44.138827, 170.362180);
	  ctx.lineTo(43.839162, 172.570280);
	  ctx.lineTo(44.138827, 175.480190);
	  ctx.lineTo(45.114875, 176.815330);
	  ctx.lineTo(46.407711, 177.868030);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	ctx.restore();
	  
	}
  
	drawcloud4(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas

	  ctx.restore();
  
	  ctx.transform(0.9,0,0,0.9,-370,70)
  
	  ctx.save();
  
	  const x=(15*(ms*1e-3))%20
	  if (x<10){
		  ctx.transform(1,0,0,1,20-x,0);
	  } else{
		  ctx.transform(1,0,0,1,x,0);
	  }
	  
	  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 255, 255)';
	  ctx.strokeStyle = 'rgb(247, 253, 253)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(44.450399, 183.027260);
	  ctx.lineTo(166.950890, 182.860170);
	  ctx.lineTo(168.691210, 181.906800);
	  ctx.lineTo(170.362690, 180.206470);
	  ctx.lineTo(171.434410, 178.653560);
	  ctx.lineTo(172.112840, 176.599400);
	  ctx.lineTo(171.404920, 173.778610);
	  ctx.lineTo(169.782590, 171.842390);
	  ctx.lineTo(168.268420, 170.495880);
	  ctx.lineTo(165.613700, 169.768570);
	  ctx.lineTo(163.283450, 170.613820);
	  ctx.lineTo(163.155630, 168.618630);
	  ctx.lineTo(162.811500, 166.279440);
	  ctx.lineTo(162.477200, 164.264590);
	  ctx.lineTo(161.877430, 162.269400);
	  ctx.lineTo(160.953190, 159.674670);
	  ctx.lineTo(159.665170, 157.394440);
	  ctx.lineTo(158.603280, 155.350110);
	  ctx.lineTo(156.558170, 153.453200);
	  ctx.lineTo(154.237740, 152.391720);
	  ctx.lineTo(151.563360, 151.349900);
	  ctx.lineTo(148.869310, 150.976410);
	  ctx.lineTo(146.853690, 150.848640);
	  ctx.lineTo(143.972830, 150.917440);
	  ctx.lineTo(143.166580, 148.312880);
	  ctx.lineTo(141.957210, 145.904890);
	  ctx.lineTo(140.374210, 143.831070);
	  ctx.lineTo(138.270110, 142.494390);
	  ctx.lineTo(135.526890, 141.373940);
	  ctx.lineTo(133.511280, 140.833370);
	  ctx.lineTo(130.935220, 140.430400);
	  ctx.lineTo(128.575470, 140.705600);
	  ctx.lineTo(127.474250, 140.646600);
	  ctx.lineTo(126.294380, 139.241120);
	  ctx.lineTo(124.613050, 137.226270);
	  ctx.lineTo(122.174650, 135.427650);
	  ctx.lineTo(119.647750, 134.100800);
	  ctx.lineTo(117.641960, 133.432460);
	  ctx.lineTo(114.446470, 132.685490);
	  ctx.lineTo(110.700360, 132.488920);
	  ctx.lineTo(107.740850, 133.157260);
	  ctx.lineTo(104.329040, 134.238410);
	  ctx.lineTo(101.635000, 136.381030);
	  ctx.lineTo(99.039270, 138.631760);
	  ctx.lineTo(97.269458, 141.138030);
	  ctx.lineTo(95.715954, 144.027620);
	  ctx.lineTo(94.811386, 146.592870);
	  ctx.lineTo(94.752396, 149.128630);
	  ctx.lineTo(94.663906, 150.426000);
	  ctx.lineTo(92.107513, 150.170450);
	  ctx.lineTo(89.688768, 150.288400);
	  ctx.lineTo(86.945562, 151.251590);
	  ctx.lineTo(84.516985, 152.725870);
	  ctx.lineTo(82.835663, 154.622780);
	  ctx.lineTo(81.596794, 156.303460);
	  ctx.lineTo(80.515244, 158.052940);
	  ctx.lineTo(79.856479, 159.173390);
	  ctx.lineTo(78.096500, 158.052940);
	  ctx.lineTo(76.493836, 157.748260);
	  ctx.lineTo(74.645364, 157.728560);
	  ctx.lineTo(73.219684, 158.505010);
	  ctx.lineTo(72.590417, 156.460670);
	  ctx.lineTo(71.430206, 154.052680);
	  ctx.lineTo(70.319157, 152.657030);
	  ctx.lineTo(68.991798, 150.848580);
	  ctx.lineTo(67.575949, 149.590530);
	  ctx.lineTo(65.963454, 148.460250);
	  ctx.lineTo(64.134649, 147.300480);
	  ctx.lineTo(61.892887, 146.995800);
	  ctx.lineTo(59.031691, 146.445400);
	  ctx.lineTo(55.983681, 147.113740);
	  ctx.lineTo(52.719361, 148.391450);
	  ctx.lineTo(50.280952, 150.406300);
	  ctx.lineTo(48.756947, 152.892920);
	  ctx.lineTo(47.813048, 154.760340);
	  ctx.lineTo(47.223110, 156.588450);
	  ctx.lineTo(47.016631, 158.436210);
	  ctx.lineTo(44.715876, 158.573810);
	  ctx.lineTo(42.188978, 158.907980);
	  ctx.lineTo(39.976715, 159.959630);
	  ctx.lineTo(38.157740, 161.768080);
	  ctx.lineTo(36.948368, 163.841900);
	  ctx.lineTo(36.053629, 166.014010);
	  ctx.lineTo(35.375203, 168.952740);
	  ctx.lineTo(35.040903, 171.635930);
	  ctx.lineTo(35.680001, 174.161860);
	  ctx.lineTo(36.269937, 176.363450);
	  ctx.lineTo(37.616963, 178.692810);
	  ctx.lineTo(39.308116, 180.874750);
	  ctx.lineTo(41.490883, 182.447320);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	ctx.restore(); 
	}
	drawcloud5(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas

	  ctx.restore();
	  
	  
	  ctx.transform(1,0,0,1,170,-70)
  
	  ctx.save();
  
	  const x=(10*(ms*1e-3))%30
	  if (x<15){
		  ctx.transform(1,0,0,1,x,0);
	  } else{
		  ctx.transform(1,0,0,1,30-x,0);
	  }
  
  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 255, 255)';
	  ctx.strokeStyle = 'rgb(247, 253, 253)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(30.925915, 173.552550);
	  ctx.lineTo(159.601090, 173.306840);
	  ctx.lineTo(161.292240, 172.156900);
	  ctx.lineTo(162.973560, 170.368110);
	  ctx.lineTo(164.182930, 167.891320);
	  ctx.lineTo(164.133730, 165.512810);
	  ctx.lineTo(163.121010, 163.380020);
	  ctx.lineTo(161.233210, 161.964710);
	  ctx.lineTo(158.696480, 160.706660);
	  ctx.lineTo(156.612030, 160.903230);
	  ctx.lineTo(154.203120, 161.630540);
	  ctx.lineTo(153.603350, 158.829410);
	  ctx.lineTo(152.728280, 156.156050);
	  ctx.lineTo(151.459910, 153.748060);
	  ctx.lineTo(149.306640, 151.487500);
	  ctx.lineTo(146.297960, 149.482470);
	  ctx.lineTo(143.269610, 148.617570);
	  ctx.lineTo(140.398590, 148.204770);
	  ctx.lineTo(136.976950, 148.617570);
	  ctx.lineTo(134.351730, 149.354700);
	  ctx.lineTo(131.883820, 150.160640);
	  ctx.lineTo(129.996020, 150.809330);
	  ctx.lineTo(129.120950, 148.951740);
	  ctx.lineTo(127.183990, 146.946710);
	  ctx.lineTo(125.571490, 145.806610);
	  ctx.lineTo(123.015100, 145.334830);
	  ctx.lineTo(120.812660, 145.266030);
	  ctx.lineTo(118.728220, 145.472420);
	  ctx.lineTo(117.361530, 145.688650);
	  ctx.lineTo(116.348800, 143.074260);
	  ctx.lineTo(114.736310, 140.872670);
	  ctx.lineTo(113.458110, 138.936450);
	  ctx.lineTo(111.393330, 137.059200);
	  ctx.lineTo(109.672680, 135.860120);
	  ctx.lineTo(107.067120, 134.130300);
	  ctx.lineTo(104.845030, 132.862420);
	  ctx.lineTo(101.974000, 131.918880);
	  ctx.lineTo(98.355717, 131.329170);
	  ctx.lineTo(94.816092, 131.112940);
	  ctx.lineTo(91.207641, 131.358650);
	  ctx.lineTo(87.854831, 132.154760);
	  ctx.lineTo(84.305374, 133.294870);
	  ctx.lineTo(81.109880, 134.975550);
	  ctx.lineTo(78.101199, 137.157490);
	  ctx.lineTo(75.829942, 139.103540);
	  ctx.lineTo(74.010969, 141.157700);
	  ctx.lineTo(72.516459, 143.005460);
	  ctx.lineTo(71.336584, 144.981000);
	  ctx.lineTo(69.281637, 143.909690);
	  ctx.lineTo(66.656415, 143.369120);
	  ctx.lineTo(64.542473, 143.359120);
	  ctx.lineTo(61.779599, 144.450090);
	  ctx.lineTo(60.078614, 145.619690);
	  ctx.lineTo(58.967565, 146.917050);
	  ctx.lineTo(58.023664, 148.440470);
	  ctx.lineTo(56.883119, 149.570760);
	  ctx.lineTo(54.375885, 148.745160);
	  ctx.lineTo(51.957141, 148.008020);
	  ctx.lineTo(48.506009, 147.722990);
	  ctx.lineTo(44.936888, 148.578070);
	  ctx.lineTo(42.164182, 149.708360);
	  ctx.lineTo(40.128898, 150.828810);
	  ctx.lineTo(38.408247, 152.607770);
	  ctx.lineTo(37.012062, 154.553820);
	  ctx.lineTo(36.127155, 156.607980);
	  ctx.lineTo(35.753529, 158.573690);
	  ctx.lineTo(35.468393, 160.922710);
	  ctx.lineTo(33.079147, 160.922710);
	  ctx.lineTo(30.788223, 161.541910);
	  ctx.lineTo(28.418641, 162.652530);
	  ctx.lineTo(27.160108, 164.667380);
	  ctx.lineTo(26.884804, 166.868970);
	  ctx.lineTo(27.425581, 168.923130);
	  ctx.lineTo(28.625119, 171.321300);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	ctx.restore();
	  
	}
  
  
	drawcloud5a(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas 

	  ctx.restore();
  
  
	  ctx.transform(1,0,0,1,250,150)
  
	  ctx.save();
  
	  const x=(15*(ms*1e-3))%36
	  if (x<18){
		  ctx.transform(1,0,0,1,x,0);
	  } else{
		  ctx.transform(1,0,0,1,36-x,0);
	  }
  
  
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 255, 255)';
	  ctx.strokeStyle = 'rgb(247, 253, 253)';
	  ctx.lineWidth = 0.052917;
	  ctx.moveTo(30.925915, 173.552550);
	  ctx.lineTo(159.601090, 173.306840);
	  ctx.lineTo(161.292240, 172.156900);
	  ctx.lineTo(162.973560, 170.368110);
	  ctx.lineTo(164.182930, 167.891320);
	  ctx.lineTo(164.133730, 165.512810);
	  ctx.lineTo(163.121010, 163.380020);
	  ctx.lineTo(161.233210, 161.964710);
	  ctx.lineTo(158.696480, 160.706660);
	  ctx.lineTo(156.612030, 160.903230);
	  ctx.lineTo(154.203120, 161.630540);
	  ctx.lineTo(153.603350, 158.829410);
	  ctx.lineTo(152.728280, 156.156050);
	  ctx.lineTo(151.459910, 153.748060);
	  ctx.lineTo(149.306640, 151.487500);
	  ctx.lineTo(146.297960, 149.482470);
	  ctx.lineTo(143.269610, 148.617570);
	  ctx.lineTo(140.398590, 148.204770);
	  ctx.lineTo(136.976950, 148.617570);
	  ctx.lineTo(134.351730, 149.354700);
	  ctx.lineTo(131.883820, 150.160640);
	  ctx.lineTo(129.996020, 150.809330);
	  ctx.lineTo(129.120950, 148.951740);
	  ctx.lineTo(127.183990, 146.946710);
	  ctx.lineTo(125.571490, 145.806610);
	  ctx.lineTo(123.015100, 145.334830);
	  ctx.lineTo(120.812660, 145.266030);
	  ctx.lineTo(118.728220, 145.472420);
	  ctx.lineTo(117.361530, 145.688650);
	  ctx.lineTo(116.348800, 143.074260);
	  ctx.lineTo(114.736310, 140.872670);
	  ctx.lineTo(113.458110, 138.936450);
	  ctx.lineTo(111.393330, 137.059200);
	  ctx.lineTo(109.672680, 135.860120);
	  ctx.lineTo(107.067120, 134.130300);
	  ctx.lineTo(104.845030, 132.862420);
	  ctx.lineTo(101.974000, 131.918880);
	  ctx.lineTo(98.355717, 131.329170);
	  ctx.lineTo(94.816092, 131.112940);
	  ctx.lineTo(91.207641, 131.358650);
	  ctx.lineTo(87.854831, 132.154760);
	  ctx.lineTo(84.305374, 133.294870);
	  ctx.lineTo(81.109880, 134.975550);
	  ctx.lineTo(78.101199, 137.157490);
	  ctx.lineTo(75.829942, 139.103540);
	  ctx.lineTo(74.010969, 141.157700);
	  ctx.lineTo(72.516459, 143.005460);
	  ctx.lineTo(71.336584, 144.981000);
	  ctx.lineTo(69.281637, 143.909690);
	  ctx.lineTo(66.656415, 143.369120);
	  ctx.lineTo(64.542473, 143.359120);
	  ctx.lineTo(61.779599, 144.450090);
	  ctx.lineTo(60.078614, 145.619690);
	  ctx.lineTo(58.967565, 146.917050);
	  ctx.lineTo(58.023664, 148.440470);
	  ctx.lineTo(56.883119, 149.570760);
	  ctx.lineTo(54.375885, 148.745160);
	  ctx.lineTo(51.957141, 148.008020);
	  ctx.lineTo(48.506009, 147.722990);
	  ctx.lineTo(44.936888, 148.578070);
	  ctx.lineTo(42.164182, 149.708360);
	  ctx.lineTo(40.128898, 150.828810);
	  ctx.lineTo(38.408247, 152.607770);
	  ctx.lineTo(37.012062, 154.553820);
	  ctx.lineTo(36.127155, 156.607980);
	  ctx.lineTo(35.753529, 158.573690);
	  ctx.lineTo(35.468393, 160.922710);
	  ctx.lineTo(33.079147, 160.922710);
	  ctx.lineTo(30.788223, 161.541910);
	  ctx.lineTo(28.418641, 162.652530);
	  ctx.lineTo(27.160108, 164.667380);
	  ctx.lineTo(26.884804, 166.868970);
	  ctx.lineTo(27.425581, 168.923130);
	  ctx.lineTo(28.625119, 171.321300);
	  ctx.closePath();
	  ctx.fill();
	  ctx.stroke();
	ctx.restore();
	  
	}
	drawmusic(ms){
		const canvas = this.el
		const ctx = canvas.getContext('2d')
		const {width: W, height: H} = canvas
		//ctx.save();

		ctx.restore();
		
	
		ctx.transform(0.8,0,0,0.8,120,-200)
	
		ctx.save();
		ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -1.166230, 13.606000);
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.font = "normal normal 18.3444px Arial";
		ctx.fillText("JOURNEY SONG", 17.493456, 104.960720);
		ctx.restore();
		
		
	// #text2
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.font = "normal normal 8.46667px Arial";
		ctx.fillText("01:02", 19.825916, 144.223820);
		
	// #text2-0
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.font = "normal normal 8.46667px Arial";
		ctx.fillText("02:00", 163.138210, 143.982120);
		
	// #path2
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.396875;
		ctx.moveTo(22.158377, 132.561520);
		ctx.lineTo(180.765700, 132.950260);
		ctx.fill();
		ctx.stroke();
		
	// #path7
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(19.501666, 168.070080);
		ctx.bezierCurveTo(20.741270, 167.947890, 23.187364, 168.044480, 23.187364, 168.044480);
		ctx.lineTo(28.494838, 175.273520);
		ctx.lineTo(30.142048, 175.345120);
		ctx.lineTo(30.224068, 173.820180);
		ctx.lineTo(33.674002, 176.055320);
		ctx.lineTo(30.314048, 178.106490);
		ctx.lineTo(30.191889, 176.725600);
		ctx.lineTo(28.143376, 176.776500);
		ctx.lineTo(22.733272, 169.745010);
		ctx.lineTo(19.532378, 169.788510);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	// #path8
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(19.450186, 174.987320);
		ctx.lineTo(19.444586, 176.519480);
		ctx.lineTo(22.997094, 176.477480);
		ctx.lineTo(28.257538, 169.669360);
		ctx.lineTo(30.165171, 169.669360);
		ctx.lineTo(30.033790, 171.292590);
		ctx.lineTo(33.738698, 168.844610);
		ctx.lineTo(30.291294, 166.527960);
		ctx.lineTo(30.144149, 168.056630);
		ctx.lineTo(27.803190, 168.039430);
		ctx.lineTo(22.698208, 174.917320);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	// #path9
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(63.536684, 166.643500);
		ctx.bezierCurveTo(63.121524, 166.911410, 55.469967, 171.271550, 55.469967, 171.271550);
		ctx.lineTo(55.517267, 167.168810);
		ctx.lineTo(53.000032, 167.095310);
		ctx.lineTo(52.942222, 177.669960);
		ctx.lineTo(55.389969, 177.716160);
		ctx.lineTo(55.406899, 173.593530);
		ctx.lineTo(63.647035, 178.500000);
		ctx.lineTo(63.626015, 166.664580);
		ctx.fill();
		ctx.stroke();
		
	// #path10
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(142.615350, 166.816850);
		ctx.lineTo(142.715250, 177.948340);
		ctx.lineTo(150.519200, 173.588200);
		ctx.lineTo(150.645870, 177.628670);
		ctx.lineTo(153.414810, 177.617470);
		ctx.lineTo(153.362310, 167.242440);
		ctx.lineTo(150.647700, 167.210840);
		ctx.bezierCurveTo(150.647700, 167.210840, 150.750460, 170.756800, 150.671700, 171.124520);
		ctx.bezierCurveTo(150.592900, 171.492240, 142.752130, 166.538490, 142.752130, 166.538490);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	// #path11
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(171.274480, 171.442760);
		ctx.lineTo(168.972900, 174.696620);
		ctx.lineTo(170.602010, 174.759620);
		ctx.lineTo(170.703420, 176.115230);
		ctx.lineTo(171.067480, 177.100110);
		ctx.lineTo(171.759120, 177.560050);
		ctx.lineTo(172.551680, 177.722420);
		ctx.lineTo(182.641650, 177.543810);
		ctx.lineTo(183.419410, 177.260140);
		ctx.lineTo(183.741630, 176.540650);
		ctx.lineTo(183.755730, 174.365630);
		ctx.lineTo(183.328220, 173.722310);
		ctx.lineTo(182.491570, 173.804410);
		ctx.lineTo(182.289540, 174.759610);
		ctx.lineTo(182.315840, 176.403860);
		ctx.lineTo(173.334720, 176.477360);
		ctx.lineTo(172.421580, 176.428660);
		ctx.lineTo(172.036690, 175.831250);
		ctx.lineTo(172.020890, 174.759600);
		ctx.lineTo(173.234840, 174.654540);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	// #path12
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(170.513490, 170.760760);
		ctx.lineTo(171.131550, 171.062630);
		ctx.lineTo(171.814540, 170.749470);
		ctx.lineTo(171.893540, 168.385350);
		ctx.lineTo(181.387520, 168.323250);
		ctx.lineTo(181.963260, 168.548940);
		ctx.lineTo(182.392240, 169.110350);
		ctx.lineTo(182.296240, 169.759210);
		ctx.lineTo(180.811750, 169.702810);
		ctx.lineTo(182.965110, 173.091020);
		ctx.lineTo(185.095900, 169.742310);
		ctx.lineTo(183.854110, 169.657710);
		ctx.lineTo(183.591650, 168.862150);
		ctx.lineTo(183.433600, 168.069400);
		ctx.lineTo(182.781660, 167.409250);
		ctx.lineTo(181.827750, 166.881700);
		ctx.lineTo(172.266030, 166.943700);
		ctx.lineTo(171.286720, 167.022700);
		ctx.lineTo(170.778720, 167.474080);
		ctx.lineTo(170.519070, 168.058060);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	// #path13
		ctx.beginPath();
		ctx.fillStyle = 'rgb(254, 254, 254)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.264583;
		ctx.moveTo(126.423200, 171.974980);
		ctx.bezierCurveTo(126.423199, 185.008209, 115.914850, 195.575837, 102.947250, 195.583360);
		ctx.bezierCurveTo(89.979645, 195.590882, 79.459164, 185.035445, 79.444201, 172.002220);
		ctx.bezierCurveTo(79.429238, 158.969000, 89.925448, 148.389192, 102.893030, 148.366630);
		ctx.bezierCurveTo(115.860612, 148.344067, 126.393204, 158.887286, 126.423140, 171.920480);
		ctx.fill();
		ctx.stroke();
		
	// #path14-4
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(104.963920, 162.389040);
		ctx.lineTo(104.884020, 182.397640);
		ctx.lineTo(107.889660, 182.205870);
		ctx.lineTo(108.049530, 162.269200);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	// #path14
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(96.380970, 162.503700);
		ctx.lineTo(96.301030, 182.512300);
		ctx.lineTo(99.306666, 182.320530);
		ctx.lineTo(99.466539, 162.383860);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		
	// #path15
		ctx.beginPath();
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;
		ctx.moveTo(175.115880, 120.087020);
		ctx.lineTo(179.827640, 116.009270);
		ctx.lineTo(181.628410, 113.993340);
		ctx.lineTo(182.831320, 112.157820);
		ctx.lineTo(183.087250, 109.704690);
		ctx.lineTo(182.734840, 108.051780);
		ctx.lineTo(181.639380, 106.733630);
		ctx.lineTo(180.120580, 106.306090);
		ctx.lineTo(178.325450, 106.225190);
		ctx.lineTo(176.665680, 106.751700);
		ctx.lineTo(175.951370, 107.548750);
		ctx.lineTo(175.524380, 108.114980);
		ctx.lineTo(174.888810, 108.829190);
		ctx.lineTo(174.123540, 108.106100);
		ctx.lineTo(173.419470, 107.333400);
		ctx.lineTo(172.290070, 106.531050);
		ctx.lineTo(170.405180, 106.256790);
		ctx.lineTo(168.539940, 106.606380);
		ctx.lineTo(167.167440, 107.680870);
		ctx.lineTo(166.481030, 109.110460);
		ctx.lineTo(166.507530, 110.706240);
		ctx.lineTo(167.011990, 112.409690);
		ctx.lineTo(167.835250, 113.731290);
		ctx.lineTo(169.307620, 115.494500);
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		ctx.restore();
	  }
	
  
	drawcar(ms){
	  const canvas = this.el
	  const ctx = canvas.getContext('2d')
	  const {width: W, height: H} = canvas
	  ctx.restore();
  
	  ctx.transform(0.7,0,0,0.7,-80,200)
  
  
	  ctx.save();
  
	  const x=(40*(ms*1e-3))%30
	  if (x<15){
		  ctx.transform(1,0,0,1,15-x,0);
	  } else{
		  ctx.transform(1,0,0,1,x-15,0);
	  }
	  
	  
  
  
	  ctx.save();
	  ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 0.443978, -0.215907);
	  
  // #path1
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(35, 48, 56)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(47.614980, 126.559630);
	  ctx.lineTo(59.482397, 100.938680);
	  ctx.lineTo(63.718190, 95.648959);
	  ctx.lineTo(68.229969, 94.317533);
	  ctx.lineTo(74.205676, 92.758206);
	  ctx.lineTo(81.249331, 91.714655);
	  ctx.lineTo(89.396931, 91.138903);
	  ctx.lineTo(97.016558, 90.899008);
	  ctx.lineTo(104.012220, 90.683100);
	  ctx.lineTo(111.775840, 90.683100);
	  ctx.lineTo(118.903490, 91.018957);
	  ctx.lineTo(126.739100, 91.462764);
	  ctx.lineTo(134.358730, 92.206444);
	  ctx.lineTo(140.970410, 93.166029);
	  ctx.lineTo(148.338040, 95.073207);
	  ctx.lineTo(152.117860, 100.195000);
	  ctx.lineTo(164.359310, 127.026960);
	  ctx.lineTo(165.653190, 128.058980);
	  ctx.lineTo(173.056830, 149.481740);
	  ctx.lineTo(174.292770, 154.627520);
	  ctx.lineTo(174.628750, 158.189990);
	  ctx.lineTo(175.192730, 162.843980);
	  ctx.lineTo(175.276730, 167.162120);
	  ctx.lineTo(174.460770, 171.384290);
	  ctx.lineTo(173.560820, 173.951190);
	  ctx.lineTo(174.256780, 175.798390);
	  ctx.lineTo(174.004800, 179.132950);
	  ctx.lineTo(171.784900, 182.887330);
	  ctx.lineTo(167.621110, 189.448500);
	  ctx.lineTo(164.825250, 191.475630);
	  ctx.lineTo(159.713500, 193.202890);
	  ctx.lineTo(149.981970, 193.610710);
	  ctx.lineTo(126.103140, 194.450350);
	  ctx.lineTo(89.516935, 194.162470);
	  ctx.lineTo(76.437576, 193.754650);
	  ctx.lineTo(54.766640, 192.579150);
	  ctx.lineTo(47.806979, 191.439650);
	  ctx.lineTo(44.255154, 189.616430);
	  ctx.lineTo(43.391197, 188.237030);
	  ctx.lineTo(38.483436, 178.221350);
	  ctx.lineTo(37.907464, 175.114690);
	  ctx.lineTo(38.723426, 173.987170);
	  ctx.lineTo(36.731524, 168.925360);
	  ctx.lineTo(36.839516, 156.534700);
	  ctx.lineTo(38.075456, 151.712780);
	  ctx.lineTo(38.999410, 148.642100);
	  ctx.lineTo(46.511042, 127.519210);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path2
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(20, 18, 25)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(48.846999, 130.963920);
	  ctx.lineTo(49.494929, 127.470090);
	  ctx.lineTo(62.754684, 102.994980);
	  ctx.lineTo(66.423246, 97.165838);
	  ctx.lineTo(68.403541, 95.432603);
	  ctx.lineTo(84.008621, 93.799711);
	  ctx.lineTo(102.260170, 92.458734);
	  ctx.lineTo(120.219710, 92.923972);
	  ctx.lineTo(141.984690, 95.231911);
	  ctx.lineTo(145.133080, 97.621950);
	  ctx.lineTo(161.203570, 126.658200);
	  ctx.lineTo(162.590690, 130.480440);
	  ctx.lineTo(145.288220, 131.903520);
	  ctx.lineTo(127.739350, 132.587690);
	  ctx.lineTo(109.204890, 133.463430);
	  ctx.lineTo(86.627718, 132.879600);
	  ctx.lineTo(64.990501, 131.839660);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path3
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(41, 45, 56)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(67.125647, 97.995031);
	  ctx.lineTo(68.337753, 96.288387);
	  ctx.lineTo(73.740500, 95.327936);
	  ctx.lineTo(81.626586, 94.404429);
	  ctx.lineTo(91.596903, 93.916815);
	  ctx.lineTo(104.035780, 93.613904);
	  ctx.lineTo(115.935120, 93.968531);
	  ctx.lineTo(126.127170, 94.663012);
	  ctx.lineTo(136.260090, 95.822937);
	  ctx.lineTo(142.557130, 96.613462);
	  ctx.lineTo(144.427030, 98.283165);
	  ctx.lineTo(133.237210, 97.270999);
	  ctx.lineTo(121.389610, 95.918983);
	  ctx.lineTo(108.640310, 95.061966);
	  ctx.lineTo(97.073556, 95.254056);
	  ctx.lineTo(84.819453, 96.465700);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path4
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(77, 190, 234)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(66.204835, 100.337050);
	  ctx.lineTo(60.868608, 109.631240);
	  ctx.lineTo(54.963282, 119.959760);
	  ctx.lineTo(52.539069, 125.197900);
	  ctx.lineTo(52.309951, 127.096640);
	  ctx.lineTo(58.451786, 128.057090);
	  ctx.lineTo(71.533670, 128.973200);
	  ctx.lineTo(90.942162, 130.000150);
	  ctx.lineTo(113.173980, 130.317840);
	  ctx.lineTo(130.926910, 129.630740);
	  ctx.lineTo(151.554900, 128.079250);
	  ctx.lineTo(158.916230, 127.502980);
	  ctx.lineTo(158.598430, 125.486040);
	  ctx.lineTo(156.854170, 121.031030);
	  ctx.lineTo(150.416700, 109.468690);
	  ctx.lineTo(145.302200, 100.809880);
	  ctx.lineTo(127.970550, 99.975034);
	  ctx.lineTo(106.278270, 99.428315);
	  ctx.lineTo(84.305140, 99.428315);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path5
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(112, 207, 237)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(60.945881, 109.495560);
	  ctx.lineTo(65.868893, 101.075850);
	  ctx.lineTo(66.265420, 100.362640);
	  ctx.lineTo(82.397018, 99.478102);
	  ctx.lineTo(99.730155, 99.427872);
	  ctx.lineTo(122.213380, 99.789515);
	  ctx.lineTo(138.413130, 100.435130);
	  ctx.lineTo(145.257190, 100.824030);
	  ctx.lineTo(150.381450, 109.490720);
	  ctx.lineTo(146.285190, 111.515200);
	  ctx.lineTo(141.739790, 113.066690);
	  ctx.lineTo(137.061350, 114.315280);
	  ctx.lineTo(132.826370, 115.356990);
	  ctx.lineTo(127.682300, 116.110580);
	  ctx.lineTo(123.446780, 116.784740);
	  ctx.lineTo(118.753640, 117.227730);
	  ctx.lineTo(112.693570, 117.477370);
	  ctx.lineTo(106.854760, 117.477370);
	  ctx.lineTo(101.060300, 117.477370);
	  ctx.lineTo(95.360498, 117.282960);
	  ctx.lineTo(89.400303, 116.762730);
	  ctx.lineTo(83.176493, 116.101590);
	  ctx.lineTo(77.455559, 115.107190);
	  ctx.lineTo(71.821766, 113.702420);
	  ctx.lineTo(66.575201, 111.894290);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path6
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(60, 69, 86)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(49.129985, 131.081420);
	  ctx.lineTo(45.166609, 135.320530);
	  ctx.lineTo(52.597104, 136.050270);
	  ctx.lineTo(65.313406, 139.220600);
	  ctx.lineTo(80.480675, 140.489690);
	  ctx.lineTo(97.645931, 141.353270);
	  ctx.lineTo(113.878250, 141.717050);
	  ctx.lineTo(130.965350, 140.617260);
	  ctx.lineTo(148.052450, 138.443060);
	  ctx.lineTo(156.244780, 136.920280);
	  ctx.lineTo(165.766100, 135.469710);
	  ctx.lineTo(162.896770, 130.457740);
	  ctx.lineTo(143.963950, 131.964600);
	  ctx.lineTo(121.433710, 132.918110);
	  ctx.lineTo(91.258236, 132.927110);
	  ctx.lineTo(64.668116, 131.717340);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path7
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(19, 21, 23)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(39.661926, 155.070180);
	  ctx.lineTo(54.100058, 155.070180);
	  ctx.lineTo(61.725357, 154.723330);
	  ctx.lineTo(65.643796, 152.506830);
	  ctx.lineTo(68.115035, 148.310710);
	  ctx.lineTo(68.724382, 143.505480);
	  ctx.lineTo(65.288343, 139.283980);
	  ctx.lineTo(58.280856, 136.965960);
	  ctx.lineTo(50.706335, 135.536240);
	  ctx.lineTo(45.019099, 135.130160);
	  ctx.lineTo(41.879269, 140.552970);
	  ctx.lineTo(39.678851, 146.551050);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path8
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(19, 21, 23)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(171.695530, 154.917900);
	  ctx.lineTo(156.969650, 155.290140);
	  ctx.lineTo(150.122960, 154.841770);
	  ctx.lineTo(146.069110, 152.515290);
	  ctx.lineTo(143.301660, 147.845410);
	  ctx.lineTo(142.971600, 143.175540);
	  ctx.lineTo(146.043720, 139.715440);
	  ctx.lineTo(152.120260, 137.439720);
	  ctx.lineTo(160.346450, 135.790040);
	  ctx.lineTo(165.864420, 135.223220);
	  ctx.lineTo(169.368160, 140.358390);
	  ctx.lineTo(171.365470, 146.652570);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path9
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(123, 21, 29)';
	  ctx.lineWidth = 0.070882;
	  ctx.moveTo(52.038916, 137.081780);
	  ctx.lineTo(55.047933, 154.596430);
	  ctx.lineTo(60.168139, 153.937240);
	  ctx.lineTo(63.951165, 152.462750);
	  ctx.lineTo(66.253142, 149.852040);
	  ctx.lineTo(67.615710, 145.411220);
	  ctx.lineTo(66.346238, 141.603570);
	  ctx.lineTo(59.144097, 138.177540);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path10
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(125, 20, 30)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(50.782503, 137.169000);
	  ctx.lineTo(54.040815, 154.063460);
	  ctx.lineTo(40.508240, 153.851940);
	  ctx.lineTo(40.635187, 148.285320);
	  ctx.lineTo(41.811564, 144.004600);
	  ctx.lineTo(43.444954, 139.224750);
	  ctx.lineTo(45.425331, 136.517570);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path11
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(123, 21, 29)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(159.693140, 137.776370);
	  ctx.lineTo(156.065020, 154.101560);
	  ctx.lineTo(152.191100, 154.455390);
	  ctx.lineTo(149.113590, 153.649450);
	  ctx.lineTo(146.291730, 151.133350);
	  ctx.lineTo(144.315440, 148.440330);
	  ctx.lineTo(144.344940, 143.319660);
	  ctx.lineTo(148.110710, 140.056590);
	  ctx.lineTo(152.977690, 138.464370);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path12
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(123, 21, 29)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(160.617370, 137.687920);
	  ctx.lineTo(157.185900, 153.796880);
	  ctx.lineTo(170.528320, 153.649450);
	  ctx.lineTo(170.842950, 149.541130);
	  ctx.lineTo(170.007230, 145.757140);
	  ctx.lineTo(168.729030, 141.619330);
	  ctx.lineTo(166.034980, 136.823010);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path41
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(86, 16, 24)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(47.137276, 140.865312);
	  ctx.bezierCurveTo(49.749192, 140.865312, 51.866568, 142.952645, 51.866568, 145.527500);
	  ctx.bezierCurveTo(51.866568, 148.102355, 49.749192, 150.189688, 47.137276, 150.189688);
	  ctx.bezierCurveTo(44.525360, 150.189688, 42.407984, 148.102355, 42.407984, 145.527500);
	  ctx.bezierCurveTo(42.407984, 142.952645, 44.525360, 140.865312, 47.137276, 140.865312);
	  ctx.fill();
	  
  // #path42
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(86, 16, 24)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(59.300179, 141.857807);
	  ctx.bezierCurveTo(61.609055, 141.857807, 63.480769, 143.717111, 63.480769, 146.010680);
	  ctx.bezierCurveTo(63.480769, 148.304249, 61.609055, 150.163554, 59.300179, 150.163554);
	  ctx.bezierCurveTo(56.991303, 150.163554, 55.119589, 148.304249, 55.119589, 146.010680);
	  ctx.bezierCurveTo(55.119589, 143.717111, 56.991303, 141.857807, 59.300179, 141.857807);
	  ctx.fill();
	  
  // #path43
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(86, 16, 24)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(164.102340, 141.035075);
	  ctx.bezierCurveTo(166.880207, 141.035075, 169.132112, 143.239345, 169.132112, 145.958450);
	  ctx.bezierCurveTo(169.132112, 148.677555, 166.880207, 150.881825, 164.102340, 150.881825);
	  ctx.bezierCurveTo(161.324473, 150.881825, 159.072568, 148.677555, 159.072568, 145.958450);
	  ctx.bezierCurveTo(159.072568, 143.239345, 161.324473, 141.035075, 164.102340, 141.035075);
	  ctx.fill();
	  
  // #path44
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(86, 16, 24)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(152.461990, 142.288778);
	  ctx.bezierCurveTo(154.749220, 142.288778, 156.603386, 144.072074, 156.603386, 146.271880);
	  ctx.bezierCurveTo(156.603386, 148.471686, 154.749220, 150.254982, 152.461990, 150.254982);
	  ctx.bezierCurveTo(150.174760, 150.254982, 148.320593, 148.471686, 148.320593, 146.271880);
	  ctx.bezierCurveTo(148.320593, 144.072074, 150.174760, 142.288778, 152.461990, 142.288778);
	  ctx.fill();
	  
  // #path13
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(170, 40, 56)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(47.142693, 141.895139);
	  ctx.bezierCurveTo(49.203463, 141.895139, 50.874047, 143.540883, 50.874047, 145.571010);
	  ctx.bezierCurveTo(50.874047, 147.601137, 49.203463, 149.246881, 47.142693, 149.246881);
	  ctx.bezierCurveTo(45.081923, 149.246881, 43.411339, 147.601137, 43.411339, 145.571010);
	  ctx.bezierCurveTo(43.411339, 143.540883, 45.081923, 141.895139, 47.142693, 141.895139);
	  ctx.fill();
	  
  // #path14
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(170, 40, 56)';
	  ctx.lineWidth = 0.073165;
	  ctx.moveTo(59.295406, 142.984872);
	  ctx.bezierCurveTo(61.046905, 142.984872, 62.466775, 144.326096, 62.466775, 145.980580);
	  ctx.bezierCurveTo(62.466775, 147.635064, 61.046905, 148.976288, 59.295406, 148.976288);
	  ctx.bezierCurveTo(57.543907, 148.976288, 56.124037, 147.635064, 56.124037, 145.980580);
	  ctx.bezierCurveTo(56.124037, 144.326096, 57.543907, 142.984872, 59.295406, 142.984872);
	  ctx.fill();
	  
  // #path15
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(170, 40, 56)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(152.609440, 143.220761);
	  ctx.bezierCurveTo(154.333536, 143.220761, 155.731192, 144.514474, 155.731192, 146.110350);
	  ctx.bezierCurveTo(155.731192, 147.706226, 154.333536, 148.999939, 152.609440, 148.999939);
	  ctx.bezierCurveTo(150.885344, 148.999939, 149.487688, 147.706226, 149.487688, 146.110350);
	  ctx.bezierCurveTo(149.487688, 144.514474, 150.885344, 143.220761, 152.609440, 143.220761);
	  ctx.fill();
	  
  // #path16
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(170, 40, 56)';
	  ctx.lineWidth = 0.076590;
	  ctx.moveTo(163.994770, 141.894509);
	  ctx.bezierCurveTo(166.098982, 141.894509, 167.804782, 143.659063, 167.804782, 145.835750);
	  ctx.bezierCurveTo(167.804782, 148.012437, 166.098982, 149.776991, 163.994770, 149.776991);
	  ctx.bezierCurveTo(161.890558, 149.776991, 160.184758, 148.012437, 160.184758, 145.835750);
	  ctx.bezierCurveTo(160.184758, 143.659063, 161.890558, 141.894509, 163.994770, 141.894509);
	  ctx.fill();
	  
  // #path24
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(22, 29, 37)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(38.099654, 151.981360);
	  ctx.lineTo(39.645662, 152.103530);
	  ctx.lineTo(40.132068, 154.759200);
	  ctx.lineTo(54.685229, 154.828900);
	  ctx.lineTo(60.409075, 154.771800);
	  ctx.lineTo(62.439044, 154.342060);
	  ctx.lineTo(63.856423, 153.396250);
	  ctx.lineTo(82.539473, 154.947230);
	  ctx.lineTo(96.458717, 156.212130);
	  ctx.lineTo(112.687060, 156.442950);
	  ctx.lineTo(125.858150, 155.436570);
	  ctx.lineTo(144.755810, 153.931610);
	  ctx.lineTo(148.595840, 153.749770);
	  ctx.lineTo(151.349510, 154.932540);
	  ctx.lineTo(154.715500, 154.942540);
	  ctx.lineTo(158.592060, 155.071790);
	  ctx.lineTo(165.286010, 154.927870);
	  ctx.lineTo(171.693890, 154.919870);
	  ctx.lineTo(171.634890, 153.961140);
	  ctx.lineTo(171.647290, 152.338740);
	  ctx.lineTo(173.514260, 152.767010);
	  ctx.lineTo(175.042210, 160.112570);
	  ctx.lineTo(175.370910, 165.221870);
	  ctx.lineTo(175.371190, 167.746650);
	  ctx.lineTo(174.434640, 172.431110);
	  ctx.lineTo(173.804530, 174.011290);
	  ctx.lineTo(174.423500, 175.954940);
	  ctx.lineTo(174.223560, 178.988070);
	  ctx.lineTo(171.504800, 183.631520);
	  ctx.lineTo(167.509390, 189.644700);
	  ctx.lineTo(164.898060, 191.504300);
	  ctx.lineTo(160.249170, 193.195140);
	  ctx.lineTo(152.181860, 193.494390);
	  ctx.lineTo(130.177520, 194.341380);
	  ctx.lineTo(112.042670, 194.320480);
	  ctx.lineTo(85.580681, 193.894270);
	  ctx.lineTo(55.265208, 192.601810);
	  ctx.lineTo(47.875551, 191.325770);
	  ctx.lineTo(44.079530, 189.547640);
	  ctx.lineTo(38.449405, 178.188910);
	  ctx.lineTo(37.964223, 175.241860);
	  ctx.lineTo(38.947218, 173.885710);
	  ctx.lineTo(36.975113, 169.085850);
	  ctx.lineTo(36.623587, 163.966080);
	  ctx.lineTo(37.043299, 156.630720);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path18
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(24, 18, 20)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(43.847009, 180.490530);
	  ctx.bezierCurveTo(45.810694, 184.809530, 45.781940, 184.514800, 46.898339, 186.682520);
	  ctx.lineTo(48.358785, 187.210460);
	  ctx.lineTo(50.605640, 187.945070);
	  ctx.lineTo(58.550945, 188.631510);
	  ctx.lineTo(66.917911, 189.053010);
	  ctx.lineTo(67.984113, 188.270230);
	  ctx.lineTo(68.104588, 186.993690);
	  ctx.lineTo(65.478239, 180.809670);
	  ctx.lineTo(64.273493, 178.641960);
	  ctx.lineTo(62.743463, 178.021750);
	  ctx.lineTo(51.358606, 177.859170);
	  ctx.lineTo(45.172230, 178.045830);
	  ctx.lineTo(43.979531, 178.690130);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path19
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(24, 18, 20)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(148.083420, 177.877230);
	  ctx.lineTo(163.076490, 178.033790);
	  ctx.lineTo(166.395570, 177.907340);
	  ctx.lineTo(167.305160, 178.611850);
	  ctx.lineTo(167.467790, 179.954630);
	  ctx.lineTo(163.968010, 185.813480);
	  ctx.lineTo(162.606640, 186.975620);
	  ctx.lineTo(160.582670, 187.776470);
	  ctx.lineTo(147.372620, 188.631510);
	  ctx.lineTo(144.071610, 188.896460);
	  ctx.lineTo(142.601820, 187.963130);
	  ctx.lineTo(142.890960, 185.813480);
	  ctx.lineTo(145.384780, 180.514620);
	  ctx.lineTo(146.282320, 178.647980);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path20
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(39, 46, 60)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(45.576263, 183.965640);
	  ctx.lineTo(62.609474, 185.506390);
	  ctx.lineTo(64.109384, 185.145100);
	  ctx.lineTo(64.567187, 184.085330);
	  ctx.lineTo(64.422616, 182.893080);
	  ctx.lineTo(63.669652, 181.905570);
	  ctx.lineTo(50.435506, 181.953770);
	  ctx.lineTo(48.983785, 181.387760);
	  ctx.lineTo(46.864944, 178.023920);
	  ctx.lineTo(45.123981, 178.191980);
	  ctx.lineTo(43.817081, 178.657290);
	  ctx.lineTo(43.867241, 180.303340);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path21
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(239, 72, 32)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(50.496638, 181.983850);
	  ctx.lineTo(63.808326, 182.035850);
	  ctx.lineTo(64.845174, 181.339520);
	  ctx.lineTo(65.212621, 180.448350);
	  ctx.lineTo(64.074135, 179.123630);
	  ctx.lineTo(62.492039, 177.984940);
	  ctx.lineTo(46.852279, 178.015640);
	  ctx.lineTo(48.792184, 181.388320);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path22
	  ctx.save();
	  ctx.beginPath();
	  ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -0.443978, 0.215907);
	  ctx.fillStyle = 'rgb(40, 46, 59)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(147.761730, 185.158010);
	  ctx.lineTo(164.890060, 184.136210);
	  ctx.lineTo(166.064660, 183.627160);
	  ctx.lineTo(167.752220, 179.751720);
	  ctx.lineTo(167.993830, 178.503250);
	  ctx.lineTo(166.967910, 177.774990);
	  ctx.lineTo(164.611280, 177.897600);
	  ctx.lineTo(163.514740, 180.037830);
	  ctx.lineTo(162.726720, 180.966740);
	  ctx.lineTo(162.146850, 181.542670);
	  ctx.lineTo(161.258470, 181.568670);
	  ctx.lineTo(149.040410, 181.639270);
	  ctx.lineTo(147.456930, 181.646270);
	  ctx.lineTo(147.018310, 182.541750);
	  ctx.lineTo(146.687500, 183.931400);
	  ctx.lineTo(147.022030, 184.826880);
	  ctx.closePath();
	  ctx.fill();
	  ctx.restore();
	  
  // #path23
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(240, 73, 29)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(147.569620, 181.884910);
	  ctx.lineTo(160.962280, 181.925810);
	  ctx.lineTo(162.103430, 181.446490);
	  ctx.lineTo(163.404400, 179.915640);
	  ctx.lineTo(164.073480, 178.057800);
	  ctx.lineTo(150.532140, 178.013200);
	  ctx.lineTo(147.681130, 178.343900);
	  ctx.lineTo(146.599460, 178.916110);
	  ctx.lineTo(146.049330, 179.956500);
	  ctx.lineTo(146.015930, 181.048900);
	  ctx.lineTo(146.714740, 181.539370);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path25
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(39, 46, 56)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(47.319847, 163.564310);
	  ctx.lineTo(57.009230, 163.422420);
	  ctx.lineTo(73.967521, 163.422420);
	  ctx.lineTo(101.115730, 163.370120);
	  ctx.lineTo(129.100640, 163.063940);
	  ctx.lineTo(154.366260, 163.422390);
	  ctx.lineTo(163.925520, 163.407490);
	  ctx.lineTo(163.058930, 166.596230);
	  ctx.lineTo(161.781460, 168.784280);
	  ctx.lineTo(159.854040, 170.710960);
	  ctx.lineTo(157.463440, 172.226920);
	  ctx.lineTo(154.863670, 173.212660);
	  ctx.lineTo(136.217020, 173.705530);
	  ctx.lineTo(101.934380, 173.414290);
	  ctx.lineTo(73.762697, 173.615920);
	  ctx.lineTo(58.810849, 173.578620);
	  ctx.lineTo(55.142780, 172.839310);
	  ctx.lineTo(52.393595, 171.271080);
	  ctx.lineTo(49.801292, 168.836590);
	  ctx.lineTo(48.008346, 165.834560);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path26
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(22, 29, 37)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(58.032939, 165.954000);
	  ctx.lineTo(89.738215, 165.968900);
	  ctx.lineTo(121.787140, 165.864350);
	  ctx.lineTo(146.395340, 165.864350);
	  ctx.lineTo(152.461470, 166.170530);
	  ctx.lineTo(151.288590, 168.097210);
	  ctx.lineTo(148.098640, 169.747580);
	  ctx.lineTo(139.425260, 169.964150);
	  ctx.lineTo(122.257790, 169.822260);
	  ctx.lineTo(100.107430, 169.829260);
	  ctx.lineTo(76.612352, 170.008490);
	  ctx.lineTo(62.956071, 169.776990);
	  ctx.lineTo(59.713825, 168.223690);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path17
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(24, 18, 20)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(54.989087, 155.143390);
	  ctx.lineTo(58.636866, 166.446200);
	  ctx.lineTo(59.555778, 168.002840);
	  ctx.lineTo(61.950348, 169.237510);
	  ctx.lineTo(64.929533, 169.620820);
	  ctx.lineTo(73.070667, 170.063100);
	  ctx.lineTo(88.635181, 169.856700);
	  ctx.lineTo(108.221100, 169.787900);
	  ctx.lineTo(128.269140, 170.092590);
	  ctx.lineTo(147.341960, 169.771780);
	  ctx.lineTo(150.008870, 168.843590);
	  ctx.lineTo(151.902010, 166.901850);
	  ctx.lineTo(153.199160, 163.956160);
	  ctx.lineTo(154.589560, 158.906590);
	  ctx.lineTo(155.734110, 154.681100);
	  ctx.lineTo(156.546810, 154.740400);
	  ctx.lineTo(154.550850, 162.416480);
	  ctx.lineTo(153.066170, 166.426520);
	  ctx.lineTo(151.434020, 168.598630);
	  ctx.lineTo(149.115930, 170.036430);
	  ctx.lineTo(146.409720, 170.593820);
	  ctx.lineTo(129.684990, 170.780570);
	  ctx.lineTo(108.988020, 170.397250);
	  ctx.lineTo(84.240147, 170.662620);
	  ctx.lineTo(69.963665, 170.800220);
	  ctx.lineTo(63.073444, 170.457930);
	  ctx.lineTo(60.033051, 169.424230);
	  ctx.lineTo(58.066593, 167.812350);
	  ctx.lineTo(57.211185, 165.404360);
	  ctx.lineTo(55.274223, 159.005980);
	  ctx.lineTo(54.831849, 157.184090);
	  ctx.lineTo(54.088869, 154.767480);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path27
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(39, 46, 56)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(77.800178, 177.835200);
	  ctx.lineTo(97.985772, 177.529020);
	  ctx.lineTo(123.206560, 177.685840);
	  ctx.lineTo(136.601370, 177.782940);
	  ctx.lineTo(137.983430, 178.484910);
	  ctx.lineTo(138.528780, 180.314510);
	  ctx.lineTo(137.931130, 181.539220);
	  ctx.lineTo(134.464770, 187.065370);
	  ctx.lineTo(132.993060, 188.439430);
	  ctx.lineTo(131.715590, 189.051790);
	  ctx.lineTo(129.788170, 190.022600);
	  ctx.lineTo(119.448840, 190.269030);
	  ctx.lineTo(93.458580, 190.164480);
	  ctx.lineTo(84.538671, 190.164480);
	  ctx.lineTo(82.558958, 189.313160);
	  ctx.lineTo(80.407422, 187.894290);
	  ctx.lineTo(79.040299, 186.460480);
	  ctx.lineTo(76.216409, 181.307720);
	  ctx.lineTo(75.805524, 179.978460);
	  ctx.lineTo(76.216409, 178.410230);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path28
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(16, 20, 30)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(77.411706, 177.835200);
	  ctx.lineTo(84.725435, 177.446880);
	  ctx.lineTo(127.255630, 177.738120);
	  ctx.lineTo(136.601370, 177.745120);
	  ctx.lineTo(134.554420, 181.247500);
	  ctx.lineTo(133.135000, 182.606630);
	  ctx.lineTo(132.111530, 183.271260);
	  ctx.lineTo(130.490410, 183.786530);
	  ctx.lineTo(123.961090, 184.025500);
	  ctx.lineTo(103.902500, 184.092700);
	  ctx.lineTo(88.296387, 183.988150);
	  ctx.lineTo(84.628317, 183.883600);
	  ctx.lineTo(81.916486, 183.233910);
	  ctx.lineTo(79.779891, 181.770230);
	  ctx.lineTo(78.457591, 180.187070);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path29
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 255, 255)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(96.035398, 177.939750);
	  ctx.lineTo(95.983098, 186.766640);
	  ctx.lineTo(119.978710, 186.818940);
	  ctx.lineTo(119.851710, 177.939780);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path30
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(16, 17, 29)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(50.651867, 120.646600);
	  ctx.lineTo(41.186602, 121.475520);
	  ctx.lineTo(38.340299, 121.833970);
	  ctx.lineTo(36.577235, 123.148300);
	  ctx.lineTo(33.850460, 128.510150);
	  ctx.lineTo(33.753340, 130.563780);
	  ctx.lineTo(35.344581, 131.467380);
	  ctx.lineTo(38.123648, 131.975190);
	  ctx.lineTo(45.056377, 132.027490);
	  ctx.lineTo(46.132146, 129.234550);
	  ctx.lineTo(47.850386, 126.949410);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path31
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(71, 188, 237)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(48.963509, 121.729420);
	  ctx.lineTo(40.768250, 122.394050);
	  ctx.lineTo(38.579360, 122.752510);
	  ctx.lineTo(37.458767, 123.924950);
	  ctx.lineTo(36.114057, 125.605190);
	  ctx.lineTo(35.157818, 128.032210);
	  ctx.lineTo(34.634877, 129.779670);
	  ctx.lineTo(36.487588, 130.817690);
	  ctx.lineTo(38.952891, 130.944640);
	  ctx.lineTo(43.988083, 130.944640);
	  ctx.lineTo(45.444853, 128.263710);
	  ctx.lineTo(46.767150, 126.986730);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path32
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(105, 208, 236)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(36.188765, 125.776950);
	  ctx.lineTo(37.204767, 123.753180);
	  ctx.lineTo(38.893126, 122.573280);
	  ctx.lineTo(41.537722, 122.132680);
	  ctx.lineTo(48.926158, 121.669680);
	  ctx.lineTo(46.580386, 127.195820);
	  ctx.lineTo(45.825853, 127.703630);
	  ctx.lineTo(43.524904, 127.912730);
	  ctx.lineTo(40.618837, 127.606550);
	  ctx.lineTo(38.078829, 126.688010);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path33
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(5, 23, 38)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(161.404090, 120.609260);
	  ctx.lineTo(168.971820, 121.012520);
	  ctx.lineTo(173.992070, 121.893710);
	  ctx.lineTo(175.882140, 123.551560);
	  ctx.lineTo(177.607850, 126.949390);
	  ctx.lineTo(178.414680, 129.017950);
	  ctx.lineTo(178.362380, 130.533910);
	  ctx.lineTo(176.688960, 131.415100);
	  ctx.lineTo(170.652710, 131.773560);
	  ctx.lineTo(166.820290, 131.773560);
	  ctx.lineTo(165.072160, 127.867920);
	  ctx.lineTo(164.168210, 127.218230);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path34
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(76, 190, 226)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(161.964380, 121.744360);
	  ctx.lineTo(169.487290, 122.140150);
	  ctx.lineTo(173.596120, 122.939200);
	  ctx.lineTo(175.023010, 124.611980);
	  ctx.lineTo(176.457370, 127.867920);
	  ctx.lineTo(176.517170, 130.153050);
	  ctx.lineTo(174.791460, 130.907300);
	  ctx.lineTo(166.521500, 130.922200);
	  ctx.lineTo(165.385960, 128.293550);
	  ctx.lineTo(163.929190, 127.053900);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path35
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(117, 207, 234)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(161.620740, 121.565130);
	  ctx.lineTo(169.225820, 121.766760);
	  ctx.lineTo(173.491540, 122.812240);
	  ctx.lineTo(175.232190, 124.828540);
	  ctx.lineTo(175.792490, 125.941240);
	  ctx.lineTo(173.655890, 126.702950);
	  ctx.lineTo(171.168180, 127.367580);
	  ctx.lineTo(168.097760, 127.434780);
	  ctx.lineTo(164.594040, 127.472080);
	  ctx.lineTo(163.996390, 126.389250);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path36
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(15, 18, 23)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(39.135203, 148.179170);
	  ctx.lineTo(37.106026, 151.142140);
	  ctx.lineTo(35.776257, 155.047780);
	  ctx.lineTo(34.625782, 159.782340);
	  ctx.lineTo(34.162605, 165.002300);
	  ctx.lineTo(34.558549, 169.759260);
	  ctx.lineTo(35.021726, 171.379770);
	  ctx.lineTo(36.284259, 172.641820);
	  ctx.lineTo(37.233026, 172.910660);
	  ctx.lineTo(37.464616, 175.143520);
	  ctx.lineTo(36.695144, 176.405570);
	  ctx.lineTo(36.530790, 203.543400);
	  ctx.lineTo(37.195675, 205.723980);
	  ctx.lineTo(38.958739, 207.434100);
	  ctx.lineTo(40.094272, 207.956840);
	  ctx.lineTo(54.363140, 208.009140);
	  ctx.lineTo(56.395148, 206.627600);
	  ctx.lineTo(57.978918, 204.857740);
	  ctx.lineTo(58.060308, 192.737960);
	  ctx.lineTo(48.954418, 191.609940);
	  ctx.lineTo(44.371945, 189.315930);
	  ctx.lineTo(41.795921, 184.334380);
	  ctx.lineTo(38.846445, 178.305780);
	  ctx.lineTo(38.231730, 175.587670);
	  ctx.lineTo(38.934204, 174.006860);
	  ctx.lineTo(36.917770, 169.331810);
	  ctx.lineTo(37.358848, 157.968160);
	  ctx.closePath();
	  ctx.fill();
	  
  // #path37
	  ctx.beginPath();
	  ctx.fillStyle = 'rgb(15, 18, 23)';
	  ctx.lineWidth = 0.070004;
	  ctx.moveTo(172.789900, 149.276140);
	  ctx.lineTo(175.307500, 154.085380);
	  ctx.lineTo(176.749330, 158.655640);
	  ctx.lineTo(177.369390, 164.129510);
	  ctx.lineTo(177.541210, 169.132910);
	  ctx.lineTo(176.943560, 171.910910);
	  ctx.lineTo(174.964410, 173.445380);
	  ctx.lineTo(174.281510, 175.441040);
	  ctx.lineTo(175.090850, 176.555860);
	  ctx.lineTo(175.165550, 204.089480);
	  ctx.lineTo(175.090850, 205.807070);
	  ctx.lineTo(173.365140, 207.479840);
	  ctx.lineTo(171.602070, 208.398380);
	  ctx.lineTo(157.684320, 208.428280);
	  ctx.lineTo(155.562670, 207.644160);
	  ctx.lineTo(153.926610, 205.642800);
	  ctx.lineTo(153.874310, 193.477830);
	  ctx.lineTo(163.425490, 191.840150);
	  ctx.lineTo(166.011300, 190.770960);
	  ctx.lineTo(168.526070, 187.706670);
	  ctx.lineTo(170.927600, 184.243680);
	  ctx.lineTo(173.494130, 176.999980);
	  ctx.lineTo(173.684400, 174.071990);
	  ctx.lineTo(174.871950, 170.723740);
	  ctx.lineTo(175.264110, 162.467380);
	  ctx.closePath();
	  ctx.fill();
	  ctx.restore();
	}

	drawcircle(ms){

		const canvas = this.el
		const ctx = canvas.getContext('2d')
		const {width: W, height: H} = canvas

		ctx.restore();
		ctx.transform(1,0,0,1,40,132.5)

		ctx.save();
		const x=ms*1e-3;
		ctx.transform(1,0,0,1,x,0)
		//ctx.restore();

		
		ctx.fillStyle = 'rgb(0, 0, 0)';
		ctx.strokeStyle = 'rgb(0, 0, 0)';
		ctx.lineWidth = 0.000000;

		ctx.beginPath()
		ctx.arc(0,0,5,0,2*Math.PI)
		ctx.fill()
		
		ctx.restore();
	}

	drawlines(ms){
		const canvas = this.el
		const ctx = canvas.getContext('2d')
		const {width: W, height: H} = canvas
		ctx.restore();

		ctx.save();
		ctx.beginPath();
	  ctx.fillStyle = 'rgb(255, 255, 255)';
	  ctx.strokeStyle = 'rgb(255, 255, 255)';
	  ctx.lineWidth = 4;
	  ctx.lineCap = 'round';
	  ctx.moveTo(-5, 270);
	  ctx.lineTo(-220,470);
	  ctx.moveTo(5, 270);
	  ctx.lineTo(220,470);
	  ctx.fill();
	  ctx.stroke();
	  ctx.restore();
	}
  
	
  
	// steppersStartMaybe(ms) {
  
	//   if (this.T<0) {
	//     this.T = new Date()
	  // - new Date(new Date().toISOString().split('T').shift()).getTime()
	  // - new Date().getTimezoneOffset() * 60000
	//   }
  
	//   let T = this.T
	//   // console.log({T})
  
	//   if (!this.stepperHours.isActive) {
	//     this.stepperHours.start()
	//     this.stepperHours.rotr.phase = ((T/3600000)%12)/12
	//   }
  
	//   T %= 3600000
	//   if (!this.stepperMinutes.isActive) {
	//     this.stepperMinutes.start()
	//     this.stepperMinutes.rotr.phase = ((T/60000)%60)/60
	//   }
  
	//   T %= 60000
	//   if (!this.stepperSeconds.isActive) {
	//     this.stepperSeconds.start()
	//     this.stepperSeconds.rotr.phase = ((T/1000)%60)/60
  
	//     console.log({
	  // rotrs: {
	  //   hours: this.stepperHours.rotr,
	  //   minutes: this.stepperMinutes.rotr,
	  //   seconds: this.stepperSeconds.rotr,
	  // }
	//     })
	//   }
  
	// }
  
	// drawHands(ms) {
	//   let cost, sint
  
	//   this.steppersStartMaybe(ms)
  
	//   const {radians: secondsRadians}
	  //   = this.stepperSeconds.step(ms)
	//   const {radians: minutesRadians}
	  //   = this.stepperMinutes.step(ms)
	//   const {radians: hoursRadians}
	  //   = this.stepperHours.step(ms)
  
	//   const canvas = this.el
	//   const ctx = canvas.getContext('2d')
	//   const {width: W, height: H} = canvas
  
	//   // #layer2
  
	  
	//   // #hour-hand
	//   cost = Math.cos(hoursRadians)
	//   sint = Math.sin(hoursRadians)
  
	//   ctx.save();
	//   ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 128, 128);
	//   ctx.transform(cost, sint, -sint, cost, 0, 0);
	//   ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -128, -128);
  
	//   ctx.beginPath();
	//   ctx.fillStyle = 'rgb(128, 0, 0)';
	//   ctx.lineWidth = 0.279296;
	//   ctx.moveTo(129.412990, 60.188843);
	//   ctx.lineTo(134.027040, 66.472660);
	//   ctx.lineTo(138.141510, 127.383510);
	//   ctx.bezierCurveTo(138.520540, 132.994810, 133.613790, 137.535320, 127.989720, 137.535320);
	//   ctx.bezierCurveTo(122.365610, 137.535320, 117.837900, 133.007610, 117.837900, 127.383510);
	//   ctx.lineTo(122.190920, 66.472660);
	//   ctx.lineTo(126.666670, 60.195839);
	//   ctx.closePath();
	//   ctx.fill();
  
	//   ctx.restore();
	  
	//   // #minute-hand
	//   cost = Math.cos(minutesRadians)
	//   sint = Math.sin(minutesRadians)
	//   ctx.save();
	//   ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 128, 128);
	//   ctx.transform(cost, sint, -sint, cost, 0, 0);
	//   ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -128, -128);
  
	//   ctx.beginPath();
	//   ctx.fillStyle = 'rgb(0, 128, 0)';
	//   ctx.lineWidth = 0.282287;
	//   ctx.moveTo(129.862710, 40.032634);
	//   ctx.lineTo(132.868020, 45.782080);
	//   ctx.lineTo(136.191290, 124.695940);
	//   ctx.bezierCurveTo(136.490170, 131.793090, 132.534250, 135.128950, 127.991690, 135.128950);
	//   ctx.bezierCurveTo(123.449110, 135.128950, 119.792080, 131.808950, 119.792080, 124.695940);
	//   ctx.lineTo(123.308010, 45.782080);
	//   ctx.lineTo(126.125010, 40.035298);
	//   ctx.closePath();
	//   ctx.fill();
  
	//   ctx.restore();
	  
	//   // #seconds-hand
	//   cost = Math.cos(secondsRadians)
	//   sint = Math.sin(secondsRadians)
	//   ctx.save();
	//   ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, 128, 128);
	//   ctx.transform(cost, sint, -sint, cost, 0, 0);
	//   ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -128, -128);
  
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(255, 204, 0)';
	//   ctx.lineWidth = 4.189440;
	//   ctx.moveTo(128.000000, 138.535900);
	//   ctx.lineTo(128.000000, 31.926484);
	//   ctx.stroke();
	  
	//   // #seconds-pivot
	//   ctx.beginPath();
	//   ctx.fillStyle = 'rgb(255, 204, 0)';
	//   ctx.lineWidth = 2.140090;
	//   ctx.arc(128.000000, 128.000020, 5.571456, 0.000000, 6.28318531, 1);
	//   ctx.fill();
  
	// }
  
	// drawDial(ms) {
	//   const canvas = this.el
	//   const ctx = canvas.getContext('2d')
  
	//   // #layer1
	//   ctx.save();
	//   ctx.transform(1.000000, 0.000000, 0.000000, 1.000000, -46.183300, -39.385200);
	  
	//   // #path1
	//   ctx.beginPath();
	//   ctx.fillStyle = 'rgb(128, 128, 0)';
	//   ctx.lineWidth = 0.279296;
	//   ctx.arc(174.183350, 167.385210, 122.394130, 0.000000, 6.28318531, 1);
	//   ctx.fill();
	  
	//   // #path9
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 5.585920;
	//   ctx.moveTo(280.421620, 167.385190);
	//   ctx.lineTo(294.284510, 167.385190);
	//   ctx.stroke();
	  
	//   // #path10
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 5.585920;
	//   ctx.moveTo(67.945071, 167.385190);
	//   ctx.lineTo(54.082183, 167.385190);
	//   ctx.stroke();
	  
	//   // #path12
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 5.586370;
	//   ctx.moveTo(174.183350, 61.146928);
	//   ctx.lineTo(174.183350, 47.284039);
	//   ctx.stroke();
	  
	//   // #path13
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 5.585920;
	//   ctx.moveTo(174.183350, 273.623470);
	//   ctx.lineTo(174.183350, 287.486360);
	//   ctx.stroke();
	  
	//   // #path14
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 2.792960;
	//   ctx.moveTo(227.302480, 75.380160);
	//   ctx.lineTo(234.233920, 63.374546);
	//   ctx.stroke();
	  
	//   // #path15
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 2.792960;
	//   ctx.moveTo(121.064200, 259.390250);
	//   ctx.lineTo(114.132760, 271.395860);
	//   ctx.stroke();
	  
	//   // #path16
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 2.792960;
	//   ctx.moveTo(266.188380, 114.266060);
	//   ctx.lineTo(278.194000, 107.334610);
	//   ctx.stroke();
	  
	//   // #path17
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 2.792960;
	//   ctx.moveTo(82.178301, 220.504330);
	//   ctx.lineTo(70.172686, 227.435780);
	//   ctx.stroke();
	  
	//   // #path18
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 2.792960;
	//   ctx.moveTo(121.064200, 75.380160);
	//   ctx.lineTo(114.132760, 63.374546);
	//   ctx.stroke();
	  
	//   // #path19
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 2.792960;
	//   ctx.moveTo(227.302480, 259.390250);
	//   ctx.lineTo(234.233920, 271.395860);
	//   ctx.stroke();
	  
	//   // #path20
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 2.792960;
	//   ctx.moveTo(82.178314, 114.266060);
	//   ctx.lineTo(70.172701, 107.334610);
	//   ctx.stroke();
	  
	//   // #path21
	//   ctx.beginPath();
	//   ctx.strokeStyle = 'rgb(221, 255, 85)';
	//   ctx.lineWidth = 2.792960;
	//   ctx.moveTo(266.188390, 220.504330);
	//   ctx.lineTo(278.194010, 227.435780);
	//   ctx.stroke();
	//   ctx.restore();
	  
	// }
  }