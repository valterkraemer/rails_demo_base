# frozen_string_literal: true
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
company = Company.create({
    name: "Rails Demo Software", 
    role: 'buyer'
})

company.users.create(name: "TestBuyer1", role: 'sales')
company.users.create(name: "TestBuyer2", role: 'sales')
company.users.create(name: "TestBuyer3", role: 'marketing')
company.users.create(name: "TestBuyer4", role: 'marketing')
company.users.create(name: "TestBuyer5", role: 'marketing')
company.users.create(name: "TestBuyer6", role: 'marketing')
company.users.create(name: "TestBuyer7", role: 'purchasing')
company.users.create(name: "TestBuyer8", role: 'purchasing')
company.users.create(name: "TestBuyer9", role: 'executive')
company.users.create(name: "TestBuyer10", role: 'executive')
company.users.create(name: "TestBuyer11", role: 'executive')
company.users.create(name: "TestBuyer12", role: 'executive')
company.users.create(name: "TestBuyer13", role: 'executive')

company1 = Company.create({
    name: "ABC Software", 
    role: 'supplier'
})

company1.users.create(name: "TestBuyer1", role: 'sales')
company1.users.create(name: "TestBuyer2", role: 'sales')
company1.users.create(name: "TestBuyer3", role: 'marketing')
company1.users.create(name: "TestBuyer4", role: 'marketing')
company1.users.create(name: "TestBuyer5", role: 'marketing')
company1.users.create(name: "TestBuyer6", role: 'marketing')
company1.users.create(name: "TestBuyer7", role: 'purchasing')
company1.users.create(name: "TestBuyer8", role: 'purchasing')
company1.users.create(name: "TestBuyer9", role: 'executive')
company1.users.create(name: "TestBuyer10", role: 'executive')
company1.users.create(name: "TestBuyer11", role: 'executive')
company1.users.create(name: "TestBuyer12", role: 'executive')
company1.users.create(name: "TestBuyer13", role: 'executive')

company3 = Company.create({
    name: "ABC Software", 
    role: 'supplier'
})

10.times do
    company3.users.create(name: "TestBuyer1", role: 'sales')
end

10.times do
    company3.users.create(name: "TestBuyer1", role: 'marketing')
end

10.times do
    company3.users.create(name: "TestBuyer1", role: 'executive')
end

10.times do
    company3.users.create(name: "TestBuyer1", role: 'purchasing')
end