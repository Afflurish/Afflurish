import { 
    Entity, 
    BaseEntity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    Unique
} from 'typeorm';

import IncomeSource from './IncomeSource.js';
import BudgetCategory from './BudgetCategory.js';
import Expense from './Expense.js';

@Entity('users')
@Unique(['email'])
class User extends BaseEntity {

    constructor(
        id: string,
        email: string,
        display_name: string,
        password: string,
        updated_at: Date,
        created_at: Date,

        income_sources: IncomeSource[],
        budget_categories: BudgetCategory[],
        expenses: Expense[]
    ) {
        super();
        this.id = id;
        this.email = email;
        this.display_name = display_name;
        this.password = password;
        this.updated_at = updated_at;
        this.created_at = created_at;

        this.income_sources = income_sources;
        this.budget_categories = budget_categories;
        this.expenses = expenses;
    };

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255 })
    email: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    display_name: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    /* Relations */
    @OneToMany(
        () => IncomeSource,
        (income_sources: IncomeSource) => income_sources.user,
        { onDelete: "CASCADE" }
    )
    income_sources: IncomeSource[];

    @OneToMany(
        () => BudgetCategory,
        (budget_categories: BudgetCategory) => budget_categories.user,
        { onDelete: "CASCADE" }
    )
    budget_categories: BudgetCategory[];

    @OneToMany(
        () => Expense,
        (expenses: Expense) => expenses.user,
        { onDelete: "CASCADE" }
    )
    expenses: Expense[]
};

export default User;