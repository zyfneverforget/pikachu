!function(){
	let code=`
	.preview{
		height: 50%;
		border: 1px green solid;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fee433;
	}
	.wrapper{
		width: 100%;
		height: 165px;
		position: relative;
	}
	.nose{
		width: 0px;
		height: 0px;
		border: 12px solid;
		border-color: black transparent transparent;
		position: absolute;
		left: 50%;
		top: 28px;
		margin-left: -12px;
		border-radius: 12px
	}
	.eye{
		width: 49px;
		height: 49px;
		background: #2e2e2e;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		margin-left: -137px;
		border: 2px black solid;
	}
	.eye::before{
		content:'';
		display: block;
		width: 24px;
		height: 24px;
		background: white;
		border-radius: 50%;
		position: absolute;
		left:5px;
		top:5px;
	}
	.eyes.left{
		width: 49px;
		height: 49px;
		background: #2e2e2e;
		border-radius: 50%;
		position: absolute;
		right: 50%;
		margin-right: -125px;
		border: 2px black solid;
	}
	.eyes::before{
		content:'';
		display: block;
		width: 24px;
		height: 24px;
		background: white;
		border-radius: 50%;
		position: absolute;
		left:5px;
		top:5px;
	}
	.face{
		width: 68px;
		height:68px;
		background: red;
		border: 2px solid;
		border-radius: 50%;
	}
	.face.right{
		position: absolute;
		left:50%;
		top:85px;
		margin-left: 120px;
	}
	.face.left{
		position: absolute;
		left:50%;
		top:85px;
		margin-left: -185px;
	}
	.upperlip{
		height:20px;
		width: 80px;
		border: 3px solid;
		position: absolute;
		background: #fee433;
	}
	.upperlip.left{
		top: 50px;
		border-bottom-left-radius: 40px 25px;
		border-top: none;
		border-right: none;
		transform: rotate(-20deg);
		right:50%;
	}
	.upperlip.right{
		border-bottom-right-radius: 40px 25px;
		border-top: none;
		border-left:none;
		transform:rotate(20deg);
		top: 50px;
		left: 50%;
	}
	.lowlipWrapper{
		overflow: hidden;
		position: absolute;
		bottom: 0;
		left:50%;
		margin-left: -150px;
		height: 110px;
		width: 300px;
	}
	.lowerlip{
		width: 300px;
		height: 3500px;
		background: #990513;
		border-radius: 200px/2000px;
		position: absolute;
		bottom: 0;
		overflow: hidden;
	}
	.lowerlip::after{
		content: '';
		position: absolute;
		bottom: -18px;
		width:100px;
		height: 100px;
		background: #fc4a62;
		left: 50%;
		border-radius: 50%;
		margin-left: -50px;
	}
	`
	let duration = 20
	writeCode('',code)

	$('.actions').on('click','button',function(a){
		let $button = $(a.currentTarget)
		let speed=$button.attr('data-speed')
		switch(speed){
			case 'slow':
				duration= 30
				break
			case 'normal':
				duration = 20
				break
			case 'fast':
				duration = 5
				break		
		}
	})
	function writeCode(Pre,code,fn){
		let domCode=document.querySelector('#code')
		let pre = Pre || ''
		let n=0
		let id 
		id = setTimeout(function f1(){
			n +=1
			domCode.innerHTML= pre+code.substring(0,n)
			style.innerHTML=pre+code.substring(0,n)
			domCode.scrollTop = 10000
			if(n<code.length){
				id = setTimeout(f1,duration)
			}else{
				fn.call()
			}
		},duration)
	}
}.call()