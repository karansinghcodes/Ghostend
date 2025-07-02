-- CreateTable
CREATE TABLE "api_data" (
    "id" UUID NOT NULL,
    "end_point" VARCHAR(255) NOT NULL,
    "type" VARCHAR(50) NOT NULL,
    "schema" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "api_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "api_data_end_point_key" ON "api_data"("end_point");
