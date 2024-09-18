# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status,viewsets
from .models import Prospecto,Solicitud,Status
from .serializers import ProspectoSerializer,SolicitudSerializer,StatusSerializer
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression

class ProspectoView(APIView):
    def post(self, request, *args, **kwargs):
        # Serializar los datos de entrada
        serializer = ProspectoSerializer(data=request.data)
        print(request.data)
        print(serializer.is_valid())
        if serializer.is_valid():
            # Guardar el registro en la base de datos
            prospecto = serializer.save()
            
            # Cargar los datos
            df = pd.read_csv('BankChurners.csv')

            # Eliminar las columnas innecesarias
            df.drop(['CLIENTNUM', 'Attrition_Flag','Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_1','Naive_Bayes_Classifier_Attrition_Flag_Card_Category_Contacts_Count_12_mon_Dependent_count_Education_Level_Months_Inactive_12_mon_2'], axis=1, inplace=True)

            # Convertir columnas categóricas en columnas numéricas
            df = pd.get_dummies(df, columns=['Gender', 'Education_Level', 'Marital_Status', 'Income_Category', 'Card_Category'], drop_first=True)

            # Dividir los datos en conjuntos de entrenamiento y prueba
            X = df.drop('Credit_Limit', axis=1)
            y = df['Credit_Limit']
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

            # Escalar los datos
            scaler = StandardScaler()
            X_train = scaler.fit_transform(X_train)
            print(X.columns.values)
            X_test = scaler.transform(X_test)

            # Entrenar el modelo
            model = LinearRegression()
            model.fit(X_train, y_train)

            # Crear el nuevo prospecto para la predicción
            new_prospect = pd.DataFrame({
                'Customer_Age': [prospecto.customer_age],
                'Dependent_count': [prospecto.dependent_count],
                'Months_on_book': [prospecto.months_on_book],
                'Total_Relationship_Count': [prospecto.total_relationship_count],
                'Months_Inactive_12_mon': [prospecto.months_inactive_12_mon],
                'Contacts_Count_12_mon': [prospecto.contacts_count_12_mon],
                'Total_Revolving_Bal': [prospecto.total_revolving_bal],
                'Avg_Open_To_Buy': [prospecto.avg_open_to_buy],
                'Total_Amt_Chng_Q4_Q1': [prospecto.total_amt_chng_q4_q1],
                'Total_Trans_Amt': [prospecto.total_trans_amt],
                'Total_Trans_Ct': [prospecto.total_trans_ct],
                'Total_Ct_Chng_Q4_Q1': [prospecto.total_ct_chng_q4_q1],
                'Avg_Utilization_Ratio': [prospecto.avg_utilization_ratio],
                'Gender_M': [int(prospecto.gender_m)],
                'Education_Level_Doctorate': [int(prospecto.education_level_doctorate)],
                'Education_Level_Graduate': [int(prospecto.education_level_graduate)],
                'Education_Level_High School': [int(prospecto.education_level_high_school)],
                'Education_Level_Post-Graduate': [int(prospecto.education_level_post_graduate)],
                'Education_Level_Uneducated': [int(prospecto.education_level_uneducated)],
                'Education_Level_Unknown': [int(prospecto.education_level_unknown)],
                'Marital_Status_Married': [int(prospecto.marital_status_married)],
                'Marital_Status_Single': [int(prospecto.marital_status_single)],
                'Marital_Status_Unknown': [int(prospecto.marital_status_unknown)],
                'Income_Category_$40K - $60K': [int(prospecto.income_category_40k_60k)],
                'Income_Category_$60K - $80K': [int(prospecto.income_category_60k_80k)],
                'Income_Category_$80K - $120K': [int(prospecto.income_category_80k_120k)],
                'Income_Category_Less than $40K': [int(prospecto.income_category_less_than_40k)],
                'Income_Category_Unknown': [int(prospecto.income_category_unknown)],
                'Card_Category_Gold': [int(prospecto.card_category_gold)],
                'Card_Category_Platinum': [int(prospecto.card_category_platinum)],
                'Card_Category_Silver': [int(prospecto.card_category_silver)]
            })

            # Escalar los datos del prospecto
            new_prospect_scaled = scaler.transform(new_prospect)

            # Predecir el límite de crédito
            credit_limit_pred = model.predict(new_prospect_scaled)

            # Guardar el resultado en la base de datos
            return Response({
                'credit_limit': credit_limit_pred[0],
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, *args, **kwargs):
        pass

class SolicitudView(viewsets.ModelViewSet):
    queryset = Solicitud.objects.all()
    serializer_class = SolicitudSerializer

    def create(self, request, *args, **kwargs):
        data = request.data
        print(data)

        # Puedes hacer alguna transformación o validación adicional aquí si es necesario

        return super().create(request, *args, **kwargs)
    

class EstadosView(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer