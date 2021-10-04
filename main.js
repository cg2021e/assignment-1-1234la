function main(){
    var canvas = document.getElementById("Canvas");
    var gl = canvas.getContext("webgl");

    var leftVertices = [
        // kubus sisi atas
        //segitiga 1 egh
        -0.67, 0.3,   0.892, 0.960, 0.950,  
        -0.62, 0.38,  0.892, 0.960, 0.950, 
        -0.37, 0.38,  0.892, 0.960, 0.950, 

        //segitiga 2 hef
        -0.37, 0.38,   0.892, 0.960, 0.950, 
        -0.67, 0.3,  0.892, 0.960, 0.950, 
        -0.32, 0.3,  0.892, 0.960, 0.950, 

        //kubus sisi depan
        //segitiga 1 efc
        -0.67, 0.3,   0.941, 0.983, 0.990, 
        -0.32, 0.3,  0.941, 0.983, 0.990, 
        -0.65, 0,  0.941, 0.983, 0.990,

        //segitiga 2 cfd
        -0.65, 0,  0.941, 0.983, 0.990,
        -0.32, 0.3,   0.941, 0.983, 0.990,  
        -0.34, 0,  0.941, 0.983, 0.990,

        //kotak emas 
        //segitiga 1 p1q1r1
        -0.6075, 0.23,  0.839, 0.714, 0.294,
        -0.3825, 0.23,  0.839, 0.714, 0.294,  
        -0.595, 0.037,  0.839, 0.714, 0.294,

        //segitiga 2 r1q1s1
        -0.595, 0.037,  0.839, 0.714, 0.294,
        -0.3825, 0.23,  0.839, 0.714, 0.294,  
        -0.395, 0.037,  0.839, 0.714, 0.294,


        //tabung sisi atas
        //segitiga 1
        -0.405, 0.475,   0.753, 0.753, 0.718, 
        -0.4150, 0.485,  0.753, 0.753, 0.718, 
        -0.4150, 0.470,  0.753, 0.753, 0.718,

        //segitiga 2
        -0.4150, 0.470, 0.753, 0.753, 0.718,
        -0.4150, 0.485,  0.753, 0.753, 0.718,
        -0.4275, 0.490,  0.753, 0.753, 0.718,

        //segitiga 3  
        -0.4275, 0.490,  0.753, 0.753, 0.718, 
        -0.4150, 0.470,  0.753, 0.753, 0.718, 
        -0.4275, 0.465,  0.753, 0.753, 0.718, 
        
        
        //segitiga 4 
        -0.4500, 0.493,  0.753, 0.753, 0.718, 
        -0.4275, 0.490,  0.753, 0.753, 0.718, 
        -0.4275, 0.465,  0.753, 0.753, 0.718, 
        
        //segitiga 5 
        -0.4275, 0.465,  0.753, 0.753, 0.718, 
        -0.4500, 0.493,  0.753, 0.753, 0.718, 
        -0.450, 0.462,  0.753, 0.753, 0.718, 
        

        //segitiga 6 
        -0.450, 0.493,  0.753, 0.753, 0.718, 
        -0.450, 0.462,  0.753, 0.753, 0.718, 
        -0.4725, 0.495,  0.753, 0.753, 0.718, 

        //segitiga 7
        -0.4725, 0.495,  0.753, 0.753, 0.718, 
        -0.450, 0.462,  0.753, 0.753, 0.718, 
        -0.4725, 0.460,  0.753, 0.753, 0.718,  

        //segitiga 8 
        -0.4725, 0.460,  0.753, 0.753, 0.718, 
        -0.4725, 0.495,  0.753, 0.753, 0.718, 
        -0.495, 0.495,  0.753, 0.753, 0.718, 

        //segitiga 9 
        -0.495, 0.495,  0.753, 0.753, 0.718, 
        -0.4725, 0.460,  0.753, 0.753, 0.718, 
        -0.495, 0.46,  0.753, 0.753, 0.718, 

        //segitiga 10
        -0.495, 0.46,  0.753, 0.753, 0.718, 
        -0.495, 0.495,  0.753, 0.753, 0.718, 
        -0.5175, 0.495,  0.753, 0.753, 0.718, 

        //segitiga 11 
        -0.5175, 0.495,  0.753, 0.753, 0.718, 
        -0.495, 0.46,  0.753, 0.753, 0.718, 
        -0.5175, 0.460,  0.753, 0.753, 0.718, 

        //segitiga 12 
        -0.5175, 0.460,  0.753, 0.753, 0.718, 
        -0.5175, 0.495,  0.753, 0.753, 0.718, 
        -0.540, 0.493,  0.753, 0.753, 0.718, 

        //segitiga 13
        -0.540, 0.493,  0.753, 0.753, 0.718, 
        -0.5175, 0.460,  0.753, 0.753, 0.718, 
        -0.540, 0.462,  0.753, 0.753, 0.718, 

        //segitiga 14
        -0.540, 0.462,  0.753, 0.753, 0.718, 
        -0.540, 0.493,  0.753, 0.753, 0.718, 
        -0.5625, 0.490,  0.753, 0.753, 0.718, 

        //segitiga 15
        -0.5625, 0.490,  0.753, 0.753, 0.718, 
        -0.540, 0.462,  0.753, 0.753, 0.718, 
        -0.5625, 0.465,  0.753, 0.753, 0.718, 

        //segitiga 16
        -0.5625, 0.465,  0.753, 0.753, 0.718, 
        -0.5625, 0.490,  0.753, 0.753, 0.718, 
        -0.575, 0.485,  0.753, 0.753, 0.718, 

        //segitiga 17
        -0.575, 0.485,  0.753, 0.753, 0.718, 
        -0.5625, 0.465,  0.753, 0.753, 0.718, 
        -0.575, 0.470,  0.753, 0.753, 0.718, 

        //segitiga 18
        -0.575, 0.470,  0.753, 0.753, 0.718, 
        -0.575, 0.485,  0.753, 0.753, 0.718, 
        -0.585, 0.475,  0.753, 0.753, 0.718, 


        // tabung sisi samping
        //segitiga 1
        -0.405, 0.475,  0.682, 0.678, 0.608, 
        -0.410, 0.35, 0.682, 0.678, 0.608, 
        -0.4150, 0.470,  0.682, 0.678, 0.608, 

        //segitiga 2 
        -0.4150, 0.470,  0.682, 0.678, 0.608, 
        -0.410, 0.35, 0.682, 0.678, 0.608, 
        -0.4150, 0.345,  0.682, 0.678, 0.608, 

        //segitiga 3
        -0.4150, 0.345,  0.682, 0.678, 0.608, 
        -0.4150, 0.470, 0.682, 0.678, 0.608, 
        -0.4275, 0.465,  0.682, 0.678, 0.608,  
        
        //segitiga 4
        -0.4275, 0.465,  0.682, 0.678, 0.608, 
        -0.410, 0.35, 0.682, 0.678, 0.608, 
        -0.4275, 0.34,  0.682, 0.678, 0.608, 

        //segitiga 5 n1f1e
        -0.4275, 0.34,  0.682, 0.678, 0.608, 
        -0.4275, 0.465, 0.682, 0.678, 0.608, 
        -0.450, 0.462,  0.682, 0.678, 0.608, 

        //segitiga 6 e1n1m1
        -0.450, 0.462,  0.682, 0.678, 0.608, 
        -0.4275, 0.34, 0.682, 0.678, 0.608, 
        -0.450, 0.337,  0.682, 0.678, 0.608, 

        //segitiga 7 m1e1d1
        -0.450, 0.337,  0.682, 0.678, 0.608, 
        -0.450, 0.462, 0.682, 0.678, 0.608, 
        -0.4725, 0.460,  0.682, 0.678, 0.608, 

        //segitiga 8 d1m1l1
        -0.4725, 0.460,  0.682, 0.678, 0.608, 
        -0.450, 0.337, 0.682, 0.678, 0.608, 
        -0.475, 0.335,  0.682, 0.678, 0.608, 

        //segitiga 9 l1d1n
        -0.475, 0.335,  0.682, 0.678, 0.608, 
        -0.4725, 0.460, 0.682, 0.678, 0.608, 
        -0.495, 0.46,  0.682, 0.678, 0.608, 

        //segitiga 10 nlm
        -0.495, 0.46,  0.682, 0.678, 0.608, 
        -0.475, 0.335, 0.682, 0.678, 0.608, 
        -0.495, 0.335,  0.682, 0.678, 0.608, 

        //segitiga 11 mnt
        -0.495, 0.335,  0.682, 0.678, 0.608, 
        -0.495, 0.46, 0.682, 0.678, 0.608, 
        -0.5175, 0.460,  0.682, 0.678, 0.608, 

        //segitiga 12 tmk
        -0.5175, 0.460,  0.682, 0.678, 0.608, 
        -0.495, 0.335, 0.682, 0.678, 0.608, 
        -0.5175, 0.335,  0.682, 0.678, 0.608, 

        //segitiga 13 ktu
        -0.5175, 0.335,  0.682, 0.678, 0.608, 
        -0.5175, 0.460, 0.682, 0.678, 0.608, 
        -0.540, 0.462,  0.682, 0.678, 0.608,  

        //segitiga 14 ukj
        -0.540, 0.462,  0.682, 0.678, 0.608, 
        -0.5175, 0.335, 0.682, 0.678, 0.608, 
        -0.540, 0.337,  0.682, 0.678, 0.608, 

        //segitiga 15 juv
        -0.540, 0.337,  0.682, 0.678, 0.608, 
        -0.540, 0.462, 0.682, 0.678, 0.608, 
        -0.5625, 0.465,  0.682, 0.678, 0.608, 

        // segitiga 16 vji
        -0.5625, 0.465,  0.682, 0.678, 0.608, 
        -0.540, 0.337, 0.682, 0.678, 0.608, 
        -0.5625, 0.34,  0.682, 0.678, 0.608, 

        // segitiga 17 ivw
        -0.5625, 0.34,  0.682, 0.678, 0.608, 
        -0.5625, 0.465, 0.682, 0.678, 0.608, 
        -0.575, 0.470,  0.682, 0.678, 0.608, 

        // segitiga 18 wih
        -0.575, 0.470,  0.682, 0.678, 0.608, 
        -0.5625, 0.34, 0.682, 0.678, 0.608, 
        -0.58, 0.35,  0.682, 0.678, 0.608, 

        //segitiga 19 hwk
        -0.58, 0.35,  0.682, 0.678, 0.608, 
        -0.575, 0.470, 0.682, 0.678, 0.608, 
        -0.585, 0.475,  0.682, 0.678, 0.608, 

        //segitiga 20 khi 
        -0.585, 0.475,  0.682, 0.678, 0.608, 
        -0.58, 0.35, 0.682, 0.678, 0.608, 
        -0.58, 0.35,  0.682, 0.678, 0.608, 
        
        //tabung sisi atas kecil
        //segitiga 1 h4l4m4
        -0.455, 0.483,  0.333, 0.282, 0.149,
        -0.473, 0.488,  0.333, 0.282, 0.149,  
        -0.472, 0.478,  0.333, 0.282, 0.149,

        //segitiga 2 m4l4f4
        -0.472, 0.478,  0.333, 0.282, 0.149,
        -0.473, 0.488,  0.333, 0.282, 0.149,  
        -0.496, 0.489,  0.333, 0.282, 0.149,

        //segitiga 2 f4m4g4
        -0.496, 0.489,  0.333, 0.282, 0.149,
        -0.472, 0.478,  0.333, 0.282, 0.149,  
        -0.496, 0.476,  0.333, 0.282, 0.149,

        //segitiga 2 g4f4j4
        -0.496, 0.476,  0.333, 0.282, 0.149,
        -0.496, 0.489,  0.333, 0.282, 0.149,  
        -0.521, 0.488,  0.333, 0.282, 0.149,
        
        //segitiga 2 j4g4k4
        -0.521, 0.488,  0.333, 0.282, 0.149,
        -0.496, 0.476,  0.333, 0.282, 0.149,  
        -0.521, 0.477,  0.333, 0.282, 0.149,

        //segitiga 2 k4j4i4
        -0.521, 0.477,  0.333, 0.282, 0.149,
         -0.521, 0.488,  0.333, 0.282, 0.149,  
         -0.537, 0.482,  0.333, 0.282, 0.149,

    ];

    var rightVertices = [
        // kubus sisi atas
        //segitiga 1 zab
        0.310, 0.098,   0.892, 0.960, 0.950,  
        0.689, 0.108,  0.892, 0.960, 0.950, 
        0.270, -0.104,  0.892, 0.960, 0.950, 

        //segitiga 2 bac
        0.270, -0.104,   0.892, 0.960, 0.950, 
        0.689, 0.108,  0.892, 0.960, 0.950, 
        0.755, -0.088,  0.892, 0.960, 0.950, 

        //kubus sisi depan
        //segitiga 1 bcd
        0.270, -0.104,   0.941, 0.983, 0.990, 
        0.755, -0.088,  0.941, 0.983, 0.990, 
        0.325, -0.445,  0.941, 0.983, 0.990,

        //segitiga 2 dce
        0.325, -0.445, 0.941, 0.983, 0.990,
        0.755, -0.088,   0.941, 0.983, 0.990,  
        0.714, -0.431, 0.941, 0.983, 0.990,


        //tabung sisi atas
        //segitiga 1 wqr
        0.634, 0.191,   0.753, 0.753, 0.718, 
        0.630, 0.201,  0.753, 0.753, 0.718, 
        0.629, 0.184,  0.753, 0.753, 0.718,

        //segitiga 2 rqp
        0.629, 0.184, 0.753, 0.753, 0.718,
        0.630, 0.201,  0.753, 0.753, 0.718,
        0.620, 0.211,  0.753, 0.753, 0.718,

        //segitiga 3  prs
        0.620, 0.211,  0.753, 0.753, 0.718, 
        0.629, 0.184,  0.753, 0.753, 0.718, 
        0.621, 0.177,  0.753, 0.753, 0.718, 
        
        
        //segitiga 4 spo
        0.621, 0.177,  0.753, 0.753, 0.718, 
        0.620, 0.211,  0.753, 0.753, 0.718, 
        0.6, 0.22,  0.753, 0.753, 0.718, 
        
        //segitiga 5 ost
        0.6, 0.22,  0.753, 0.753, 0.718, 
        0.621, 0.177,  0.753, 0.753, 0.718, 
        0.605, 0.166,  0.753, 0.753, 0.718, 
        

        //segitiga 6 ton
        0.605, 0.166,  0.753, 0.753, 0.718, 
        0.6, 0.22,  0.753, 0.753, 0.718, 
        0.581, 0.228,  0.753, 0.753, 0.718,  

        //segitiga 7 ntu
        0.581, 0.228,  0.753, 0.753, 0.718, 
        0.605, 0.166,  0.753, 0.753, 0.718, 
        0.588, 0.157,  0.753, 0.753, 0.718,  

        //segitiga 8 unm
        0.588, 0.157,  0.753, 0.753, 0.718, 
        0.581, 0.228,  0.753, 0.753, 0.718, 
        0.560, 0.233,  0.753, 0.753, 0.718, 

        //segitiga 9 muv
        0.560, 0.233,  0.753, 0.753, 0.718, 
        0.588, 0.157,  0.753, 0.753, 0.718, 
        0.568, 0.152,  0.753, 0.753, 0.718, 

        //segitiga 10 vml
        0.568, 0.152,  0.753, 0.753, 0.718, 
        0.560, 0.233,  0.753, 0.753, 0.718, 
        0.540, 0.237,  0.753, 0.753, 0.718, 

        //segitiga 11 lvk
        0.540, 0.237,  0.753, 0.753, 0.718, 
        0.568, 0.152,  0.753, 0.753, 0.718, 
        0.543, 0.146,  0.753, 0.753, 0.718, 

        //segitiga 12 klz
        0.543, 0.146,  0.753, 0.753, 0.718, 
        0.540, 0.237,  0.753, 0.753, 0.718, 
        0.500, 0.237,  0.753, 0.753, 0.718, 

        //segitiga 13 zka
        0.500, 0.237,  0.753, 0.753, 0.718, 
        0.543, 0.146,  0.753, 0.753, 0.718, 
        0.5, 0.142,  0.753, 0.753, 0.718, 

        //segitiga 14 azb
        0.5, 0.142,  0.753, 0.753, 0.718, 
        0.500, 0.237,  0.753, 0.753, 0.718, 
        0.460, 0.234,  0.753, 0.753, 0.718, 

        //segitiga 15 baj
        0.460, 0.234,  0.753, 0.753, 0.718, 
        0.5, 0.142,  0.753, 0.753, 0.718, 
        0.465, 0.146,  0.753, 0.753, 0.718, 

        //segitiga 16 jbc
        0.465, 0.146,  0.753, 0.753, 0.718, 
        0.460, 0.234,  0.753, 0.753, 0.718, 
        0.440, 0.231,  0.753, 0.753, 0.718, 

        //segitiga 17 cji
        0.440, 0.231,  0.753, 0.753, 0.718, 
        0.465, 0.146,  0.753, 0.753, 0.718, 
        0.434, 0.150,  0.753, 0.753, 0.718, 

        //segitiga 18 icd.
        0.434, 0.150,  0.753, 0.753, 0.718, 
        0.440, 0.231,  0.753, 0.753, 0.718, 
        0.420, 0.224,  0.753, 0.753, 0.718, 

        //dih
        0.420, 0.224,  0.753, 0.753, 0.718, 
        0.434, 0.150,  0.753, 0.753, 0.718, 
        0.420, 0.157,  0.753, 0.753, 0.718, 

        //hde
        0.420, 0.157,  0.753, 0.753, 0.718, 
        0.420, 0.224,  0.753, 0.753, 0.718, 
        0.40, 0.215,  0.753, 0.753, 0.718, 

        //ehg
        0.40, 0.215,  0.753, 0.753, 0.718, 
        0.420, 0.157,  0.753, 0.753, 0.718, 
        0.401, 0.168,  0.753, 0.753, 0.718, 

        //gef
        0.401, 0.168,  0.753, 0.753, 0.718, 
        0.40, 0.215,  0.753, 0.753, 0.718, 
        0.390, 0.200,  0.753, 0.753, 0.718, 

        //fgv
        0.390, 0.200,  0.753, 0.753, 0.718, 
        0.401, 0.168,  0.753, 0.753, 0.718, 
        0.390, 0.185,  0.753, 0.753, 0.718, 


        // tabung sisi samping
        //segitiga 1 wpr
        0.634, 0.191,  0.682, 0.678, 0.608,
        0.626, 0.021, 0.682, 0.678, 0.608, 
        0.629, 0.184,  0.682, 0.678, 0.608,  

        //segitiga 2 rps
        0.629, 0.184,  0.682, 0.678, 0.608,
        0.626, 0.021, 0.682, 0.678, 0.608, 
        0.621, 0.177,  0.682, 0.678, 0.608,

        //segitiga 3 spw
        0.621, 0.177,  0.682, 0.678, 0.608, 
        0.626, 0.021, 0.682, 0.678, 0.608, 
        0.609, -0.0000701,  0.682, 0.678, 0.608,  
        
        //segitiga 4 w3s2t2
        0.609, -0.0000701,  0.682, 0.678, 0.608, 
        0.621, 0.177, 0.682, 0.678, 0.608, 
        0.605, 0.166,  0.682, 0.678, 0.608, 

        //segitiga 5 t2w3v3
        0.605, 0.166,  0.682, 0.678, 0.608, 
        0.609, -0.0000701, 0.682, 0.678, 0.608, 
        0.586, -0.0125,  0.682, 0.678, 0.608, 

        //segitiga 6 v3t2u2
        0.586, -0.0125,  0.682, 0.678, 0.608, 
        0.605, 0.166, 0.682, 0.678, 0.608, 
        0.588, 0.157,  0.682, 0.678, 0.608, 

        //segitiga 7 u2v3v2
        0.588, 0.157,  0.682, 0.678, 0.608, 
        0.586, -0.0125, 0.682, 0.678, 0.608, 
        0.568, 0.152,  0.682, 0.678, 0.608, 

        //segitiga 8 v2v3u3
        0.568, 0.152,  0.682, 0.678, 0.608, 
        0.586, -0.0125, 0.682, 0.678, 0.608, 
        0.556, -0.023,  0.682, 0.678, 0.608, 

        //segitiga 9 u3v2k2
        0.556, -0.023,  0.682, 0.678, 0.608, 
        0.568, 0.152, 0.682, 0.678, 0.608, 
        0.543, 0.146,  0.682, 0.678, 0.608, 

        //segitiga 10 k2u3s3
        0.543, 0.146,  0.682, 0.678, 0.608, 
        0.556, -0.023, 0.682, 0.678, 0.608, 
        0.514, -0.0270,  0.682, 0.678, 0.608, 

        //segitiga 11 s3k2a2
        0.514, -0.0270,  0.682, 0.678, 0.608, 
        0.543, 0.146, 0.682, 0.678, 0.608, 
        0.5, 0.142,  0.682, 0.678, 0.608, 

        //segitiga 12 a2s3j2
        0.5, 0.142,  0.682, 0.678, 0.608, 
        0.514, -0.0270, 0.682, 0.678, 0.608, 
        0.465, 0.146,  0.682, 0.678, 0.608, 

        //segitiga 13 j2s3t3
        0.465, 0.146,  0.682, 0.678, 0.608, 
        0.514, -0.0270, 0.682, 0.678, 0.608, 
        0.475, -0.025,  0.682, 0.678, 0.608,  

        //segitiga 14 t3j2i2
        0.475, -0.025,  0.682, 0.678, 0.608, 
        0.465, 0.146, 0.682, 0.678, 0.608, 
        0.434, 0.150,  0.682, 0.678, 0.608, 

        //segitiga 15 i2t3r3
        0.434, 0.150,  0.682, 0.678, 0.608, 
        0.475, -0.025, 0.682, 0.678, 0.608, 
        0.434, -0.0130,  0.682, 0.678, 0.608, 

        // segitiga 16 r3i2h2
        0.434, -0.0130,  0.682, 0.678, 0.608, 
        0.434, 0.150, 0.682, 0.678, 0.608, 
        0.420, 0.157,  0.682, 0.678, 0.608, 

        // segitiga 17 h2r3q3
        0.420, 0.157,  0.682, 0.678, 0.608, 
        0.434, -0.0130, 0.682, 0.678, 0.608, 
        0.412, -0.00087,  0.682, 0.678, 0.608, 

        // segitiga 18 q3h2g2
        0.412, -0.00087,  0.682, 0.678, 0.608, 
        0.420, 0.157, 0.682, 0.678, 0.608, 
        0.401, 0.168,  0.682, 0.678, 0.608, 

        //segitiga 19 g2q3o3
        0.401, 0.168,  0.682, 0.678, 0.608, 
        0.412, -0.00087, 0.682, 0.678, 0.608, 
        0.395, 0.0190,  0.682, 0.678, 0.608, 

        //segitiga 20 o3g2v1
        0.395, 0.0190,  0.682, 0.678, 0.608, 
        0.401, 0.168, 0.682, 0.678, 0.608, 
        0.390, 0.185,  0.682, 0.678, 0.608, 

        //segitiga 20 v1o3f2
        0.390, 0.185,  0.682, 0.678, 0.608,
        0.401, 0.168, 0.682, 0.678, 0.608, 
        0.390, 0.200,  0.682, 0.678, 0.608, 

        
        //tabung sisi atas kecil
        //segitiga 1 kzj
        0.564, 0.188,  0.333, 0.282, 0.149,
        0.567, 0.19870,  0.333, 0.282, 0.149,  
        0.560, 0.208,  0.333, 0.282, 0.149,

        //segitiga 2 jke
        0.560, 0.208,  0.333, 0.282, 0.149,
        0.564, 0.188,  0.333, 0.282, 0.149,  
        0.544, 0.214,  0.333, 0.282, 0.149,

        //segitiga 2 ekd
        0.544, 0.214,  0.333, 0.282, 0.149,
        0.564, 0.188,  0.333, 0.282, 0.149,  
        0.550, 0.180,  0.333, 0.282, 0.149,

        //segitiga 2 dei
        0.550, 0.180,  0.333, 0.282, 0.149,
        0.544, 0.214,  0.333, 0.282, 0.149,  
        0.524, 0.2175,  0.333, 0.282, 0.149,
        
        //segitiga 2 idl
        0.524, 0.2175,  0.333, 0.282, 0.149,
        0.550, 0.180,  0.333, 0.282, 0.149,  
        0.531, 0.175,  0.333, 0.282, 0.149,

        //segitiga 2 lia
        0.531, 0.175,  0.333, 0.282, 0.149,
         0.524, 0.2175,  0.333, 0.282, 0.149,  
        0.504, 0.218,  0.333, 0.282, 0.149,

        //segitiga 2 alb
        0.504, 0.218,  0.333, 0.282, 0.149,
        0.531, 0.175,  0.333, 0.282, 0.149,  
        0.509, 0.173,  0.333, 0.282, 0.149,

        //segitiga 2 bah
        0.509, 0.173,  0.333, 0.282, 0.149,
        0.504, 0.218,  0.333, 0.282, 0.149,  
        0.487, 0.216,  0.333, 0.282, 0.149,

        //segitiga 2 hbm
        0.487, 0.216,  0.333, 0.282, 0.149,
        0.509, 0.173,  0.333, 0.282, 0.149,  
        0.489, 0.174,  0.333, 0.282, 0.149,

        //segitiga 2 mhc
        0.489, 0.174,  0.333, 0.282, 0.149,
        0.487, 0.216,  0.333, 0.282, 0.149,  
        0.470, 0.212,  0.333, 0.282, 0.149,

        //segitiga 2 cmf
        0.470, 0.212,  0.333, 0.282, 0.149,
        0.489, 0.174,  0.333, 0.282, 0.149,  
        0.467, 0.178,  0.333, 0.282, 0.149,

        //segitiga 2 fcg
        0.467, 0.178,  0.333, 0.282, 0.149,
        0.470, 0.212,  0.333, 0.282, 0.149,  
        0.456, 0.207,  0.333, 0.282, 0.149,

        //segitiga 2 gfn
        0.456, 0.207,  0.333, 0.282, 0.149,
        0.467, 0.178,  0.333, 0.282, 0.149,  
        0.453, 0.185,  0.333, 0.282, 0.149,

        //segitiga 2 ngw
        0.453, 0.185,  0.333, 0.282, 0.149,
        0.456, 0.207,  0.333, 0.282, 0.149,  
        0.447, 0.195,  0.333, 0.282, 0.149,
    ];

    var vertices = [...leftVertices,...rightVertices]; 

    // Create a lnekkd-list for storing the vertices data
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying  vec3 vColor;
        uniform mat4 uTranslate;
        void main(){
            gl_Position = uTranslate * vec4(aPosition, 0.0, 1.0); // Center of the coordinate
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
    
    // Create .c in GPU
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader,fragmentShaderSource);
    
    // Compile .c into .o
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
    
    // Prepare a .exe shell (shader program)
    var shaderProgram = gl.createProgram();

     // Put the two .o files into the shell
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    
    // Link the two .o files, so together they can be a runnable program/context.
    gl.linkProgram(shaderProgram);
    // Start using the context (analogy: start using the paints and the brushes)
    gl.useProgram(shaderProgram);
    
    // Teach the computer how to collect
    //  the positional values from ARRAY_BUFFER
    //  to each vertex being processed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 0);
    gl.enableVertexAttribArray(aPosition);

    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 5*Float32Array.BYTES_PER_ELEMENT, 2*Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aColor);

    var speed = 0.0176;
    var dy = 0;
    const uTranslate = gl.getUniformLocation(shaderProgram, 'uTranslate');
    
    function render() {
        //control the bouncing range
        if (dy >= 0.75 || dy <= -0.55) speed = -speed;
		dy += speed;
        
        const rightPosition = [
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0, dy, 0.0, 1.0,
		]

		const leftPosition = [
			1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
			0, 0.0, 0.0, 1.0,
		]
		
        //coloring canvas
		gl.clearColor(0.7, 0.6, 0.6, 0.8); 
		gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniformMatrix4fv(uTranslate, false, leftPosition);
        gl.drawArrays(gl.TRIANGLES, 0, leftVertices.length/5);

		gl.uniformMatrix4fv(uTranslate, false, rightPosition);
        gl.drawArrays(gl.TRIANGLES, leftVertices.length/5, rightVertices.length/5);
            
        requestAnimationFrame(render);
    }
    render();
}