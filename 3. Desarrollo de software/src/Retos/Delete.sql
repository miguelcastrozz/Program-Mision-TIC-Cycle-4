BEGIN
    DELETE FROM MOTO
    WHERE ID =:id;
    :status_code := 204;
END;