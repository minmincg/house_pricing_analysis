# Austin house pricing analysis

## Project overview:
The purpose of this project is to carry out an analysis of the real estate market behavior in Austin, Texas, from 2018 to 2021. Various variables that influence the determination of the sale price will be examined, such as the number of bathrooms, bedrooms, parking spaces, land area, and construction area, among others. This information will be used to predict, through linear regression and neural networks, whether the sale prices were in line with the market. The same machine learning methods will be used to obtain a sale price based on users' input data of their house.

We will create a visualization in HTML coding with the use of Python Flask, HTML/CSS and JavaScript.

## Relevant questions:
* Did I buy my house above or below the market price?
* Did I sell my house above or below the market price?
* What is the price at which I could sell my house according to the market?


## Housing database
The chosen data has been downloaded from Kaggle. The purpose of the dataset is to collect information about the houses that participated in the real estate market in Austin, Texas, in the latest years.

There are 46 categories called: City, streetAddress, Zipcode, Latitude, Longitude, propertyTaxRate, garageSpaces, hasAssociation, hasCooling, hasGarage, hasHeating, hasSpa, hasView, homeType, parkingSpaces, yearBuilt, latestPrice, numPriceChanges, latest_saledate, latest_salemonth, latest_saleyear, latestPriceSource, numOfPhotos, numOfAccessibilityFeatures, numOfAppliances,numOfParkingFeatures, numOfPatioAndPorchFeatures, numOfSecurityFeatures, numOfWaterfrontFeatures, numOfWindowFeatures, numOfCommunityFeatures, lotSizeSqFt, livingAreaSqFt, numOfPrimarySchools, numOfElementarySchools, numOfMiddleSchools, numOfHighSchools, avgSchoolDistance, avgSchoolRating, avgSchoolSize, MedianStudentsPerTeacher, numOfBathrooms, numOfBedrooms, numOfStories, homeImage.

## Finding Data
For this project we fetch and grabbed the data from /www.kaggle.com/ our data set were retrived form
https://www.kaggle.com/code/threnjen/austin-housing-eda-nlp-models-visualizations/input


## Data Cleanup and Analysis
### Exploration and clean up
The first step was to import the file "austin_housing.csv" to Jupyter Notebook and analyze it in order to be able to select the most relevant variables for the project.

The dataset was filtered to 30 variables, and "numOfSchools" was created as a result of summing the different school levels. All this data was exported to the "austin_housing_reduced.csv" file, which contains these columns and their related information:
city,	streetAddress,	zipcode, latitude,	longitude,	propertyTaxRate,	garageSpaces,	hasCooling,	hasGarage,	hasHeating,	hasSpa,	hasView,	homeType,	yearBuilt,	latestPrice,	numPriceChanges,	numOfAccessibilityFeatures,	numOfAppliances,	numOfParkingFeatures,	numOfPatioAndPorchFeatures,	numOfSecurityFeatures,	numOfWaterfrontFeatures,	numOfWindowFeatures,	numOfCommunityFeatures,	lotSizeSqFt,	livingAreaSqFt,	avgSchoolRating,	numOfBathrooms,	numOfBedrooms,	numOfStories,	numOfSchools.


### Analysis

### Dashboard



## Visual references:



## Tools and sources
* Javascript
* HTML/CSS
* JSON
* GitHub and GitHub Pages
* console.log
* Matplotlib.pyplot
* Flask
* Jupyter Notebook
* CORS
* LiveServer JS


## Authors
* **Maria Jose Cavazos** - **[My github](https://github.com/minmincg "GitHub for Maria Jose Cavazos")**
* **Paola Aleman** - **[My github](https://github.com/paoaleman19 "GitHub for Pao Aleman")**
* **Javier Robles** - **[My github](https://github.com/javrobs "GitHub for Javier Robles")**
* **Cesar Cruz** - **[My github](https://github.com/CsarCruz "GitHub for Cesar Cruz")**


## Conclusions



## Acknowledgments
Austin Housing - EDA, NLP, Models, Visualizations. (2021). Retrived from https://www.kaggle.com/code/threnjen/austin-housing-eda-nlp-models-visualizations/input


## Copyright
Copyright:copyright: 2023. All Rights Reserved.
© 2023  Aleman Paola, Javier Robles, Cavazos Maria Jose, César Cruz, BootCamp Tecnologico de Monterrey.
