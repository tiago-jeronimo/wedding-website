const presentes = [
    {
        'id':'01',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide1.PNG?alt=media&token=48a7673e-92b5-4f61-be35-6009f8fd2f8b',
        'product':'Batedeira',
        'price':'120,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2FBatedeira-120.png?alt=media&token=8ae56227-f85f-4d2a-99e8-ff09ad7d5438',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/D0YFu919qt',
    },
    {
        'id':'02',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide2.PNG?alt=media&token=ed330c23-1a2a-4ba8-9bc3-7a426515aa1a',
        'product':'Jogo de Cama',
        'price':'100,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2FJogo-de-cama-100.png?alt=media&token=99fe66e6-5098-48be-b979-a5c496d25d7a',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/Hb8r98FNTn',
    },
    {
        'id':'03',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide3.PNG?alt=media&token=6df5471b-827a-4764-b3c8-b15d28883d58',
        'product':'Faqueiro',
        'price':'150,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2FFaqueiro-150.png?alt=media&token=ec031e9b-756e-4ba5-9155-09b3b6f367e3',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/ic9Da70Wfc',
    },
    {
        'id':'04',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide4.PNG?alt=media&token=336003fc-1baf-4e9c-b68a-c2cbb83a7c28',
        'product':'Ferro de Passar',
        'price':'110,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2FFerro-de-passar-110.png?alt=media&token=eb3066b8-153c-488b-b577-e19b430120ea',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/C2CrpEnJ1g',
    },
    {
        'id':'05',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide5.PNG?alt=media&token=6922cb57-5d83-4aa9-b894-0372ea8cd47b',
        'product':'Jogo de Jantar',
        'price':'200,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2Fjogo-de-jantar-200.png?alt=media&token=a05f0eff-f67e-4ed1-8826-326dd46c8756',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/zZzeovWbgB',
    },
    {
        'id':'06',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide6.PNG?alt=media&token=b934d918-d6c4-44c1-975a-d949e3cfbc2f',
        'product':'Jogo de Panela',
        'price':'150,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2Fjogo-de-panela-150.png?alt=media&token=b514df32-5a7e-47f6-9f04-23523d69a6cf',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/JVo096VBhf',
    },
    {
        'id':'07',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide7.PNG?alt=media&token=0259b117-385d-42f3-820b-d473181f47c6',
        'product':'Liquidificador',
        'price':'140,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2Fliquidificador-140.png?alt=media&token=747fe699-f1c3-447f-b7b6-3b95c5eafc78',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/rhCM4ZZT2f',
    },
    {
        'id':'08',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide8.PNG?alt=media&token=4fccc5c3-3993-4b45-8144-b0395bd1974d',
        'product':'Microondas',
        'price':'250,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2FMicroondas-250.png?alt=media&token=8695efd6-7341-44fc-9626-e1d064e30dc2',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/pQVNiGbiDq',
    },
    {
        'id':'09',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide9.PNG?alt=media&token=03ba76ea-7456-433d-adc9-66c4da6390eb',
        'product':'Ventilador',
        'price':'180,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2FVentilador-180.png?alt=media&token=311b481c-1e05-47b7-9a6a-e9132cf9a381',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/6JTHsxozQU',
    },
    {
        'id':'10',
        'image':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/imagens-quadradas%2FSlide10.PNG?alt=media&token=d1af519c-180c-45e9-92ec-a93fb472339e',
        'product':'Viagem',
        'price':'300,00',
        'pix':'https://firebasestorage.googleapis.com/v0/b/debora-e-tiago.appspot.com/o/qr-code%2Fviagem-300.png?alt=media&token=8afa7885-25e6-4e51-ba3a-cb89e59d9535',
        'UrlPix':'https://nubank.com.br/pagar/sxhgd/2HGHSEHTY5',
    },
];

export default presentes;