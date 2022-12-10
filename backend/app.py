from flask import Flask
from keras.models import load_model
from keras.utils import load_img, img_to_array
import numpy as np
import os

app = Flask(__name__)

@app.route('/')
def home():
    return "I am nothing"
    
@app.route('/rice-leaf')
def rice_leaf():
    rice_leaf_disease = {'Brown spot':{"about":"""Brown leaf spot rice is one of the most serious diseases that can affect a growing rice crop. It usually begins with leaf spot on young leaves and, if not treated properly, it can decrease yield substantially.""",
                                   "cause":"""Brown spot is caused by the fungus Cochliobolus miyabeanus. Also called Helminthosporium leaf spot, it is one of the most prevalent rice diseases in Louisiana. When C. miyabeanus attacks the rice plants at emergence, the resulting seedling blight causes sparse or inadequate stands and weakened plants
                                    """,
                                   "solution":"""1. As disease is seed borne,Use disease free seeds.\n2. Removal of alternate & collateral hosts.\n3. The use of resistant varieties is the most economical means of control.\n4. Growing Resistant varieties like ADT 44,PY 4,CORH 1,CO 44,CAUVERY,BHAVANI,TPS 4 and Dhanu.\n5. Providing proper nutrition for optimum plant growth and prevention of water stress seem to be the most important factors in controlling brown spot.\n6. The disease is rarely observed in normally fertile rice soils.\n
                                   """
                                  },
                     "Leaf smut":{"about":"""Leaf smut ,caused by fungus Entyloma oryzae is a widely distributed ,but somewhat minor,disease of rice. The fungus produces slightly raised,angular ,black spots(sori)on both sides of leaves. The fungus is spread by airborne spores and over - winters on diseased leaf debris in soil.leaf smut occurs late in the growing season and causes little loss.The disease is favoured by high nitrogen rates.
                                    """,
                                  "cause":"""Leaf smut, caused by the fungus Entyloma oryzae, is a widely distributed, but somewhat minor, disease of rice. The fungus produces slightly raised, angular, black spots (sori) on both sides of the leaves. Although rare, it also can produce spots on leaf sheaths.             
                                    """,
                                   "solution":"""In most situations, there is no major loss caused by rice leaf smut, so treatment isn’t usually given. However, it can be a good idea to use good general management practices to prevent the infection or keep it in check, and to keep plants healthy overall. As with many other fungal infections, this one is spread by infected plant material in the soil\nWhen healthy leaves contact the water or ground with old diseased leaves, they can become infected. Cleaning up debris at the end of each growing season can prevent spread of leaf smut.                                   """
                                  },
                    "Bacterial leaf blight":{"about":"""The disease is most likely to develop in areas that have weeds and stubbles of infected plants. It can occur in both tropical and temperate environments, particularly in irrigated and rainfed lowland areas. In general, the disease favors temperatures at 25−34°C, with relative humidity above 70%.
                                                    """,
                                    "cause":"""Bacterial blight is caused by Xanthomonas oryzae pv. oryzae. It causes wilting of seedlings and yellowing and drying of leaves.
                                    """,
                                   "solution":"""1.Use balanced amounts of plant nutrients, especially nitrogen.\n2.Ensure good drainage of fields (in conventionally flooded crops) and nurseries.\n3.Keep fields clean. Remove weed hosts and plow under rice stubble, straw, rice ratoons and volunteer seedlings, which can serve as hosts of bacteria.\n4.Allow fallow fields to dry in order to suppress disease agents in the soil and plant residues.
                                   """
                                  }
                    }
    model = load_model(os.path.join("model","model.h5"))
    img = os.path.join("images","1.jpg")
    img = load_img(img,target_size = (350,350,3))
    x = img_to_array(img)
    x = np.expand_dims(x,axis=0)

    target = model.predict(x)
    target = np.argmax(target)
    
    indices = {0:'Bacterial leaf blight', 1:'Brown spot',2:'Leaf smut'}
    base = rice_leaf_disease[indices[target]]
    about =  base['about']
    cause = base['cause']
    solution = base['solution']
    return f"{about}\n\n{cause}\n\n{solution}"

if __name__ == '__main__':
    app.run(debug=False)