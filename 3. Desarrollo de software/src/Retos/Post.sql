BEGIN
    INSERT INTO MOTO(ID, BRAND, MODEL, CATEGORY_ID, NAME)
    VALUES(:id, :brand, :model, :category_id, :name);
    :status_code := 201;
END;